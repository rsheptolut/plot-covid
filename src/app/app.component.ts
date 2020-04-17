import { Component, ViewChild, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import Chart from 'chart.js';
import { DataRow } from './data-row';
import { State } from './state';
import { ChartType } from './graph-type';
import { Helpers } from './helpers';
import { pipe } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UrlState } from './url-state';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private mobileQueryListener: () => void;
  private portraitQueryListener: () => void;
  @ViewChild('chart', { static: true }) chart: ElementRef;
  private data: { [ key: string ]: DataRow[] };
  public countryOptions: string[];
  public chartTypes = ChartType;
  public chartTypeOptions = Object.keys(ChartType).map(k => this.chartTypes[k]);
  public state: State;
  public currentChart: Chart;
  public pop: { [key: string]: number; };
  public mainUpdatedStr: string;
  public mobileQuery: MediaQueryList;
  public portraitQuery: MediaQueryList;
  private startDate: Date;
  private endDate: Date;
  private ignoreRouteChanges = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.portraitQuery = media.matchMedia('(orientation: portrait)');
    this.portraitQueryListener = () => changeDetectorRef.detectChanges();
    this.portraitQuery.addListener(this.portraitQueryListener);

    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  get samples(): string {
    return (this.state.avgSamples || 0).toString();
  }

  set samples(value: string) {
    this.state.avgSamples = parseInt(value, 10);
  }

  public async ngOnInit(): Promise<void> {
    const response = await fetch('https://pomber.github.io/covid19/timeseries.json');
    const date = response.headers.get('last-modified') || response.headers.get('Date');
    if (date) {
      this.mainUpdatedStr = ' (updated ' + new Date(date).toLocaleDateString() + ')';
    }
    this.data = await response.json();
    this.countryOptions = Object.keys(this.data).sort((a, b) => a.localeCompare(b));

    this.activatedRoute.queryParams.subscribe(async p => {
      if (!this.ignoreRouteChanges) {
        this.state = UrlState.toState(p as UrlState);
        this.state.selectedCountries = this.state.selectedCountries.filter(c => this.data[c]);
        this.state.hiddenCountries = this.state.hiddenCountries.filter(c => this.data[c]);
        await this.settingChange();
      }
    });
  }

  public getTitle(): string {
    if (!this.state) {
      return;
    }

    const arr = [ this.state.chartType ];
    if (this.state.log) {
      arr.push('log scale');
    }

    if (this.mobileQuery.matches) {
      return arr.join(', ');
    }

    let per = '';
    if (this.state.normalize && this.state.normalizePopulation > 100 && this.state.normalizePopulation < 10000000000) {
      per = 'per ' + Helpers.abbrNumber(Math.pow(10, Math.log10(this.state.normalizePopulation)));
      arr.push(per);
    }

    if (this.state.average && this.state.avgSamples > 1) {
      arr.push('moving avg over ' + this.state.avgSamples + ' days');
    }

    if (this.state.startFrom === 'date' && this.state.startDate) {
      arr.push('starting from ' + new Date(this.state.startDate).toDateString().substring(4, 10));
    } else {
      arr.push('starting at ' + this.state.startValue + ' cases ' + per);
    }

    return 'Showing: ' + arr.join(', ') + ' (click to change settings)';
  }

  public async normalizeChange(): Promise<void> {
    if (this.state.normalize) {
      if (this.state.startValue > 10) {
        this.state.startValue /= Math.max(1, Math.round(this.state.normalizePopulation / 10000));
      }
    } else {
      if (this.state.startValue < 10) {
        this.state.startValue *= Math.min(1000, Math.round(this.state.normalizePopulation / 10000));
      }
    }

    await this.settingChange();
  }

  public async dateChange(): Promise<void> {
    this.state.startFrom = 'date';
    await this.settingChange();
  }

  public async offsetChange(): Promise<void> {
    this.state.startFrom = 'value';
    await this.settingChange();
  }

  public async settingChange(): Promise<void> {
    this.ignoreRouteChanges = true;
    setTimeout(() => this.ignoreRouteChanges = false, 100);
    const queryParams = UrlState.fromState(this.state);

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
      });

    this.replot();
  }

  public async replot(): Promise<void> {
    if (!this.state.selectedCountries.length || !this.state.chartType) {
      return;
    }

    this.updateHiddenCountries();

    this.state.avgSamples = Math.max(1, Math.min(28, this.state.avgSamples));

    this.startDate = Helpers.arrayMin(this.state.selectedCountries.map(c => Helpers.getTsDate(this.data[c][0].date)));
    this.endDate = Helpers.arrayMax(this.state.selectedCountries.map(c => Helpers.getTsDate(this.data[c][this.data[c].length - 1].date)));

    const userStartDate = this.state.startFrom === 'date' && this.state.startDate ? new Date(this.state.startDate) : null;
    if (userStartDate && userStartDate > this.startDate) {
      this.startDate = userStartDate;
    }

    if (this.state.normalize) {
      await this.initPopulation();
    }

    switch (this.state.chartType) {
      case ChartType.TotalCases:
        this.plotTotal('confirmed');
        break;
      case ChartType.NewCases:
        this.plotNew('confirmed');
        break;
      case ChartType.CasesGrowth:
        this.plotGrowth('confirmed');
        break;
      case ChartType.TotalDeaths:
        this.plotTotal('deaths');
        break;
      case ChartType.NewDeaths:
        this.plotNew('deaths');
        break;
      case ChartType.DeathGrowth:
        this.plotGrowth('deaths');
        break;
      case ChartType.TotalRecoveries:
        this.plotTotal('recovered');
        break;
      case ChartType.NewRecoveries:
        this.plotNew('recovered');
        break;
      case ChartType.RecoveryGrowth:
        this.plotGrowth('recovered');
        break;
    }
  }

  private async initPopulation(): Promise<void> {
    if (this.pop) {
      return;
    }

    const baseHref = document.getElementsByTagName('base')[0].href;
    const req1 = fetch(baseHref + '/assets/country-by-population.json');
    const req2 = fetch(baseHref + '/assets/country-by-abbreviation.json');
    const req3 = fetch(baseHref + '/assets/countries.json');
    const countrySNameToPop = await (await req1).json();
    const countrySNameToAbbr = await (await req2).json();
    const countryPNameToAbbr = await (await req3).json();
    const snameToPopDict = Helpers.toDictionary(countrySNameToPop, c => c['country'] as string, c => parseInt(c['population'], 10));
    const abbrToSnameDict = Helpers.toDictionary(countrySNameToAbbr, c => c['abbreviation'] as string, c => c['country'] as string);
    this.pop = Helpers.toDictionary(Object.keys(countryPNameToAbbr), c => c, c => snameToPopDict[abbrToSnameDict[countryPNameToAbbr[c]['code']]]);
  }

  private plotTotal(prop: string): void {
    const datasets = this.state.selectedCountries.map(c => {
      const getData = pipe(
        () => this.data[c].filter(p => Helpers.getTsDate(p.date) >= this.startDate).map(p => p[prop]),
        d => Helpers.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => Helpers.arrayDifference(d),
        d => Helpers.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.startFrom === 'value' ? d.slice(d.findIndex(n => n >= this.state.startValue)) : d,
        d => Helpers.arrayAbsolute(d),
        d => Helpers.arrayRound(d),
      );

      return this.createDataset(c, getData(null));
    });

    this.createChart(datasets);
  }

  private plotNew(prop: string): void {
    const datasets = this.state.selectedCountries.map(c => {
      const getData = pipe(
        () => this.data[c].filter(p => Helpers.getTsDate(p.date) >= this.startDate).map(p => p[prop]),
        d => Helpers.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => Helpers.arrayDifference(d),
        d => Helpers.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.startFrom === 'value' ? d.slice(d.findIndex(n => n >= this.state.startValue)) : d,
        d => Helpers.arrayRound(d),
      );

      return this.createDataset(c, getData(null));
    });

    this.createChart(datasets);
  }

  private plotGrowth(prop: string): void {
    const datasets = this.state.selectedCountries.map(c => {
      const getData = pipe(
        () => this.data[c].filter(p => Helpers.getTsDate(p.date) >= this.startDate).map(p => p[prop]),
        d => Helpers.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => Helpers.arrayDifference(d),
        d => Helpers.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.startFrom === 'value' ? d.slice(d.findIndex(n => n >= this.state.startValue)) : d,
        d => Helpers.arrayGrowthFactor(d),
        d => Helpers.arrayRound(d),
      );

      return this.createDataset(c, getData(null));
    });

    const scales = {
      yAxes: [{
        type: 'linear',
        ticks: {
          max: 1.5,
          min: 0.5,
        }
      }],
    };

    this.createChart(datasets, scales);
  }

  private createDataset(label: string, data: number[]): Chart.ChartDataSets {
    return {
      label,
      borderColor: Helpers.getNiceColor(label),
      data,
      fill: false,
      pointRadius: 2,
      pointHitRadius: 4,
    };
  }

  private createChart(datasets: Chart.ChartDataSets[], scales?: Chart.ChartScales | Chart.LinearScale | Chart.LogarithmicScale | Chart.TimeScale) {
    scales = scales || {
      yAxes: [{
        type: this.state.log ? 'logarithmic' : 'linear',
        ticks: {
          min: 0,
          callback: Helpers.abbrNumber,
        },
        afterBuildTicks: () => [ 0, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000 ],
      }],
    };

    const labels = this.getLabels(datasets);
    const datasetDayOffsets = datasets.map((d, i) => this.data[this.state.selectedCountries[i]].length - d.data.length);

    const config: Chart.ChartConfiguration = {
      type: 'line',
      data: {
        labels,
        datasets,
      },
      options: {
        animation: {
          duration: 0,
        },
        onClick: () => this.updateHiddenCountries(),
        maintainAspectRatio: false,
        scales,
      },
    };

    if (this.state.startFrom === 'value') {
      config.options.tooltips = {
        callbacks: {
          title: t => Helpers.addDays(this.startDate, datasetDayOffsets[t[0].datasetIndex] + t[0].index).toDateString().substring(4, 10),
        }
      };
    }

    this.currentChart?.destroy();
    this.currentChart = new Chart(this.chart.nativeElement, config);

    if (this.state.hiddenCountries && this.state.hiddenCountries.length) {
      for (let i = 0; i < this.currentChart.data.datasets.length; i++) {
        const meta = this.currentChart.getDatasetMeta(i);
        meta.hidden = this.state.hiddenCountries.indexOf(this.currentChart.data.datasets[i].label) >= 0;
      }

      this.currentChart.update();
    }
  }

  private getLabels(datasets: Chart.ChartDataSets[]): string[] {
    if (this.state.startFrom === 'value') {
      return Helpers.range([ 1, Math.max(...datasets.map(d => d.data.length)), 1 ])
        .map(n => 'Day ' + n);
    } else {
      const r = Helpers.range([ 1, Helpers.daysBetween(this.startDate, this.endDate) + 1, 1 ]);
      return r.map(n => Helpers.addDays(this.startDate, n - 1).toDateString().substring(4, 10));
    }
  }

  private updateHiddenCountries(): void {
    if (this.currentChart) {
      setTimeout(() => {
        const newHiddenCountries = this.currentChart.data.datasets.filter((d, i) => this.currentChart.getDatasetMeta(i).hidden).map(d => d.label);
        if (newHiddenCountries.length !== this.state.hiddenCountries.length || this.state.hiddenCountries.some((h, i) => h !== newHiddenCountries[i])) {
          this.state.hiddenCountries = newHiddenCountries;
          this.settingChange();
        }
      });
    }
  }
}
