import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DataRow } from './data-row';
import { State } from './state';
import { StorageService } from './storage.service';
import hash from 'object-hash';
import { niceColors } from './colors';
import { GraphType } from './graph-type';
import { Helpers } from './helpers';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart: ElementRef;
  private data: { [ key: string ]: DataRow[] };
  public countryOptions: string[];
  public graphTypes = GraphType;
  public graphTypeOptions = Object.values(GraphType);
  public state: State;
  public currentChart: Chart;
  public dateLabels: string[];
  public pop: { [key: string]: number; };
  private numberScale = [ 0, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000 ];

  constructor(private storageService: StorageService) {
    this.state = this.storageService.get('state') as State || new State();
    this.storageService.beforeSave.subscribe(() => this.saveUi())
    this.storageService.onSave.subscribe(() => this.storageService.set('state', this.state));
  }

  get samples(): string {
    return (this.state.avgSamples || 0).toString();
  }

  set samples(value: string) {
    this.state.avgSamples = parseInt(value, 10);
  }

  private saveUi(): void {
    this.updateHiddenCountries();
  }

  private updateHiddenCountries(): void {
    if (this.currentChart) {
      this.state.hiddenCountries = this.currentChart.data.datasets.filter((d, i) => this.currentChart.getDatasetMeta(i).hidden).map(d => d.label);
    }
  }

  public async ngOnInit(): Promise<void> {
    this.data = await (await fetch('/assets/timeseries.json')).json();
    this.countryOptions = Object.keys(this.data).sort((a, b) => a.localeCompare(b));
    this.dateLabels = this.data[this.state.selectedCountries[0]].map(p => p.date.replace('2020-', ''));
    await this.replot();
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
    await this.replot();
  }

  public async replot(): Promise<void> {
    if (!this.state.selectedCountries.length || !this.state.graphType) {
      return;
    }

    this.updateHiddenCountries();
    this.currentChart?.destroy();

    this.state.avgSamples = Math.max(1, Math.min(28, this.state.avgSamples));

    if (this.state.normalize) {
      await this.initPopulation();
    }

    switch (this.state.graphType) {
      case GraphType.TotalCases:
        this.plotTotal('confirmed');
        break;
      case GraphType.NewCases:
        this.plotNew('confirmed');
        break;
      case GraphType.CasesGrowth:
        this.plotGrowth('confirmed');
        break;
      case GraphType.TotalDeaths:
        this.plotTotal('deaths');
        break;
      case GraphType.NewDeaths:
        this.plotNew('deaths');
        break;
      case GraphType.DeathGrowth:
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

    const countrySNameToPop = await (await fetch('/assets/country-by-population.json')).json();
    const countrySNameToAbbr = await (await fetch('/assets/country-by-abbreviation.json')).json();
    const countryPNameToAbbr = await (await fetch('/assets/countries.json')).json();
    const snameToPopDict = Helpers.toDictionary(countrySNameToPop, c => c['country'] as string, c => parseInt(c['population'], 10));
    const abbrToSnameDict = Helpers.toDictionary(countrySNameToAbbr, c => c['abbreviation'] as string, c => c['country'] as string);
    this.pop = Helpers.toDictionary(Object.keys(countryPNameToAbbr), c => c, c => snameToPopDict[abbrToSnameDict[countryPNameToAbbr[c]['code']]]);
  }

  private plotTotal(prop: string): void {
    const datasets = this.state.selectedCountries.map(c => {
      const getData = pipe(
        () => this.data[c].map(p => p[prop]),
        d => this.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => this.arrayDifference(d),
        d => this.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.shift ? d.slice(d.findIndex(n => n >= this.state.shiftThreshold)) : d,
        d => this.arrayAbsolute(d),
      );

      return this.createDataset(c, getData(null));
    });

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
        () => this.data[c].map(p => p[prop]),
        d => this.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => this.arrayDifference(d),
        d => this.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.shift ? d.slice(d.findIndex(n => n >= this.state.shiftThreshold)) : d,
      );

      return this.createDataset(c, getData(null));
    });

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
        () => this.data[c].map(p => p[prop]),
        d => this.arrayMul(d, this.state.normalize ? this.state.normalizePopulation / this.pop[c] : 1),
        d => this.arrayDifference(d),
        d => this.arrayMovingAverage(d, this.state.average ? this.state.avgSamples : 1),
        d => this.state.shift ? d.slice(d.findIndex(n => n >= this.state.shiftThreshold)) : d,
        d => this.arrayGrowthFactor(d),
      );

      return this.createDataset(c, getData(null));
    });

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
        scales: {
          yAxes: [{
            type: 'linear',
            ticks: {
              max: 2,
              min: 0.3,
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
    };
  }

  private getLabels(datasets: { data: number[]; }[]): string[] {
    if (this.state.shift) {
      return Helpers.range([ 1, Math.max(...datasets.map(d => d.data.length)), 1 ]).map(n => 'Day ' + n);
    } else {
      const startDate = new Date(this.data[this.state.selectedCountries[0]][0].date).getTime();
      this.dateLabels = this.data[this.state.selectedCountries[0]].map(p => p.date.replace('2020-', ''));
      const dayTicks = 60 * 60 * 24 * 1000;
      return Helpers.range([ 1, Math.max(...datasets.map(d => d.data.length)), 1 ]).map(n => new Date(startDate + (n - 1) * dayTicks).toISOString().substring(5, 10));
    }
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
    let result = this.state.colors[c];
    if (!result) {
      let i = this.getHashBucket(c, niceColors.length);
      if (Object.keys(this.state.colors).length < niceColors.length) {
        const usedColors = Object.keys(this.state.colors).map(country => this.state.colors[country]);
        i = 0;
        while (usedColors.indexOf(niceColors[i]) >= 0) {
          i++;
        }
      }
      result = niceColors[i];
      this.state.colors[c] = result;
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
