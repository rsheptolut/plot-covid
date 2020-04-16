import { Component, ViewChild, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import Chart from 'chart.js';
import { DataRow } from './data-row';
import { State } from './state';
import hash from 'object-hash';
import { niceColors } from './colors';
import { ChartType } from './graph-type';
import { Helpers } from './helpers';
import { pipe } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { Params, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UrlState } from './url-state';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private mobileQueryListener: () => void;
  @ViewChild('chart', { static: true }) chart: ElementRef;
  private data: { [ key: string ]: DataRow[] };
  public countryOptions: string[];
  public chartTypes = ChartType;
  public chartTypeOptions = Object.values(ChartType);
  public state: State;
  public currentChart: Chart;
  public pop: { [key: string]: number; };
  public mainUpdatedStr: string;
  private numberScale = [ 0, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000 ];
  mobileQuery: MediaQueryList;
  private startDate: Date;
  private endDate: Date;
  public colors: { [ country: string ]: string } = {};

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
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
      this.state = UrlState.toState(p as UrlState);
      await this.settingChange();
    });
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
      per = 'per ' + this.abbrNumber(Math.pow(10, Math.log10(this.state.normalizePopulation)));
      arr.push(per);
    }

    if (this.state.average && this.state.avgSamples > 1) {
      arr.push('moving avg over ' + this.state.avgSamples + ' days');
    }

    if (this.state.shift && this.state.shiftThreshold > 0) {
      arr.push('starting at ' + this.state.shiftThreshold + ' cases ' + per);
    }

    return "Showing: " + arr.join(', ') + ' (click to change settings)';
  }

  public async normalizeChange(): Promise<void> {
    if (this.state.normalize) {
      if (this.state.shiftThreshold > 10) {
        this.state.shiftThreshold /= Math.max(1, Math.round(this.state.normalizePopulation / 10000));
      }
    } else {
      if (this.state.shiftThreshold < 10) {
        this.state.shiftThreshold *= Math.min(1000, Math.round(this.state.normalizePopulation / 10000));
      }
    }

    await this.settingChange();
  }

  public async settingChange(): Promise<void> {
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
    this.currentChart?.destroy();

    this.state.avgSamples = Math.max(1, Math.min(28, this.state.avgSamples));

    this.startDate = this.arrayMin(this.state.selectedCountries.map(c => new Date(this.data[c][0].date)));
    this.endDate = this.arrayMax(this.state.selectedCountries.map(c => new Date(this.data[c][this.data[c].length - 1].date)));

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
    }

    if (this.state.hiddenCountries && this.state.hiddenCountries.length) {
      for (let i = 0; i < this.currentChart.data.datasets.length; i++) {
        const meta = this.currentChart.getDatasetMeta(i);
        meta.hidden = this.state.hiddenCountries.indexOf(this.currentChart.data.datasets[i].label) >= 0;
      }

      this.currentChart.update();
    }
  }

  private async initPopulation(): Promise<void> {
    if (this.pop) {
      return;
    }

    const req1 = fetch(document.baseURI + '/assets/country-by-population.json');
    const req2 = fetch(document.baseURI + '/assets/country-by-abbreviation.json');
    const req3 = fetch(document.baseURI + '/assets/countries.json');
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
        () => this.data[c].filter(p => new Date(p.date) >= this.startDate).map(p => p[prop]),
        d => this.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => this.arrayDifference(d),
        d => this.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.shift ? d.slice(d.findIndex(n => n >= this.state.shiftThreshold)) : d,
        d => this.arrayAbsolute(d),
        d => this.arrayRound(d),
      );

      return this.createDataset(c, getData(null));
    });

    const datasetDayOffsets = datasets.map((d, i) => this.data[this.state.selectedCountries[i]].length - d.data.length);

    const labels = this.getLabels(datasets);

    this.currentChart = new Chart(this.chart.nativeElement, {
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
        tooltips: {
          callbacks: {
            [this.state.shift ? 'title' : 'titleDisabled']: t => this.state.shift ? this.addDays(this.startDate, datasetDayOffsets[t[0].datasetIndex] + t[0].index).toDateString().substring(4, 10) : undefined,
          }
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            type: this.state.log ? 'logarithmic' : 'linear',
            ticks: {
              callback: this.abbrNumber,
            },
            afterBuildTicks: () => this.numberScale,
          }],
        },
      },
    });
  }

  private plotNew(prop: string): void {
    const datasets = this.state.selectedCountries.map(c => {
      const getData = pipe(
        () => this.data[c].filter(p => new Date(p.date) >= this.startDate && new Date(p.date) <= this.endDate).map(p => p[prop]),
        d => this.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => this.arrayDifference(d),
        d => this.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.shift ? d.slice(d.findIndex(n => n >= this.state.shiftThreshold)) : d,
        d => this.arrayRound(d),
      );

      return this.createDataset(c, getData(null));
    });

    const datasetDayOffsets = datasets.map((d, i) => this.data[this.state.selectedCountries[i]].length - d.data.length);

    const labels = this.getLabels(datasets);

    this.currentChart = new Chart(this.chart.nativeElement, {
      type: 'line',
      data: {
        datasets,
        labels,
      },
      options: {
        animation: {
          duration: 0,
        },
        onClick: () => this.updateHiddenCountries(),
        tooltips: {
          callbacks: {
            [this.state.shift ? 'title' : 'titleDisabled']: t => this.state.shift ? this.addDays(this.startDate, datasetDayOffsets[t[0].datasetIndex] + t[0].index).toDateString().substring(4, 10) : undefined,
          }
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            type: this.state.log ? 'logarithmic' : 'linear',
            ticks: {
              callback: this.abbrNumber,
              min: 1,
            },
            afterBuildTicks: () => this.numberScale,
          }],
        },
      },
    });
  }

  private plotGrowth(prop: string): void {
    const datasets = this.state.selectedCountries.map(c => {
      const getData = pipe(
        () => this.data[c].filter(p => new Date(p.date) >= this.startDate && new Date(p.date) <= this.endDate).map(p => p[prop]),
        d => this.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => this.arrayDifference(d),
        d => this.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.shift ? d.slice(d.findIndex(n => n >= this.state.shiftThreshold)) : d,
        d => this.arrayGrowthFactor(d),
        d => this.arrayRound(d),
      );

      return this.createDataset(c, getData(null));
    });

    const datasetDayOffsets = datasets.map((d, i) => this.data[this.state.selectedCountries[i]].length - d.data.length);

    const labels = this.getLabels(datasets);

    this.currentChart = new Chart(this.chart.nativeElement, {
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
        tooltips: {
          callbacks: {
            [this.state.shift ? 'title' : 'titleDisabled']: t => this.state.shift ? this.addDays(this.startDate, datasetDayOffsets[t[0].datasetIndex] + t[0].index).toDateString().substring(4, 10) : undefined,
          }
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            type: 'linear',
            ticks: {
              max: 1.5,
              min: 0.5,
            }
          }],
        },
      },
    });
  }

  private createDataset(label: string, data: number[]) {
    return {
      label,
      borderColor: this.getNiceColor(label),
      data,
      fill: false,
      pointRadius: 2,
      pointHitRadius: 4,
    };
  }

  private arrayMin<T>(arr: T[], def?: T): T {
    return arr && arr.length ? arr.reduce((p, c) => p > c ? c : p) : def;
  }

  private arrayMax<T>(arr: T[], def?: T): T {
    return arr && arr.length ? arr.reduce((p, c) => p < c ? c : p) : def;
  }

  private getLabels(datasets: { data: number[]; }[]): string[] {
    if (this.state.shift) {
      return Helpers.range([ 1, Math.max(...datasets.map(d => d.data.length)), 1 ])
        .map(n => 'Day ' + n);
    } else {
      const r = Helpers.range([ 1, this.daysBetween(this.startDate, this.endDate) + 1, 1 ]);
      return r.map(n => this.addDays(this.startDate, n - 1).toDateString().substring(4, 10));
    }
  }

  private addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 60 * 60 * 24 * 1000);
  }

  private daysBetween(date1: Date, date2: Date): number {
    return Math.floor((date2.getTime() - date1.getTime()) / (60 * 60 * 24 * 1000));
  }

  private arrayDifference(arr: number[]): number[] {
    const result = arr.map((p, i, a) => p - (i ? a[i - 1] : 0));
    return result;
  }

  private arrayAbsolute(arr: number[]): number[] {
    let total = 0;
    const result = arr.map(p => {
      total += p;
      return total;
    });
    return result;
  }

  private arrayRound(arr: number[]): number[] {
    return arr.map(a => Math.round(a * 100) / 100);
  }

  private arrayMul(arr: number[], mul: number): number[] {
    const result = arr.map(p => p * mul);
    return result;
  }

  private arrayMovingAverage(arr: number[], samples: number): number[] {
    if (samples <= 1) {
      return arr;
    }

    let accum = 0;
    const r: number[] = new Array(arr.length);
    for (let i = 0; i < r.length; i++) {
      if (i >= samples) {
        accum -= arr[i - samples];
      }
      accum += arr[i];
      r[i] = accum / Math.min(samples, i + 1);
    }
    return r;
  }

  private arrayGrowthFactor(arr: number[]): number[] {
    const r: number[] = new Array(arr.length);
    for (let i = 1; i < r.length; i++) {
      if (arr[i] === 0) {
        r[i] = 1;
      } else if (arr[i - 1] === 0) {
        r[i] = 1;
      } else {
        r[i] = arr[i] / arr[i - 1];
      }
    }
    r[0] = r[1];
    return r;
  }

  private getNiceColor(c: string): string {
    let result = this.colors[c];
    if (!result) {
      let i = this.getHashBucket(c, niceColors.length);
      if (Object.keys(this.colors).length < niceColors.length) {
        const usedColors = Object.keys(this.colors).map(country => this.colors[country]);
        i = 0;
        while (usedColors.indexOf(niceColors[i]) >= 0) {
          i++;
        }
      }
      result = niceColors[i];
      this.colors[c] = result;
    }
    return result;
  }

  private getHashBucket(v: any, numberOfBuckets: number): number {
    return parseInt((hash(v) as string).slice(0, 6), 16) % numberOfBuckets;
  }

  private abbrNumber(label: number): string {
    let zeroes = Math.log10(label);
    if (zeroes % 1 === 0) {
      const suffixes = [ '', 'K', 'M', 'B', 'T' ];
      const suffixIndex = Math.floor(zeroes / 3);
      zeroes = zeroes % 3;
      return '1' + (zeroes > 0 ? '0'.repeat(zeroes) : '') + suffixes[suffixIndex];
    }
  }
}
