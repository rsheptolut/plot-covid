import { niceColors } from './colors';
import hash from 'object-hash';

export class Helpers {
  public static colors: { [ country: string ]: string } = {};

  public static toDictionary<TItem, T>(items: TItem[], keySelector: (item: TItem) => string, valueSelector: (item: TItem) => T): { [key: string]: T } {
    const result: { [key: string]: T } = {};
    for (const item of items) {
        result[keySelector(item)] = valueSelector(item);
    }
    return result;
  }

  public static groupBy<TItem, T>(items: TItem[], keySelector: (item: TItem) => string, valueSelector: (item: TItem[]) => T[]): { [key: string]: T[] } {
    const r1: { [key: string]: TItem[] } = {};

    for (const item of items) {
      const key = keySelector(item);
      let arr = r1[key];
      if (!arr) {
        arr = [];
        r1[key] = arr;
      }
      arr.push(item);
    }

    const r2: { [key: string]: T[] } = {};
    for (const k of Object.keys(r1)) {
      r2[k] = valueSelector(r1[k]);
    }

    return r2;
  }

  public static range(range: number[]): number[] {
    const result: number[] = [];
    for (let i = range[0]; i <= range[1]; i += range[2]) {
        result.push(i);
    }
    return result;
  }

  public static arrayDifference(arr: number[], disregardDays: number): number[] {
    const result = arr.map((p, i, a) => p - (i ? a[i - 1] : 0));
    return result.slice(1);
  }

  public static arrayAbsolute(arr: number[]): number[] {
    let total = 0;
    const result = arr.map(p => {
      total += p;
      return total;
    });
    return result;
  }

  public static arrayRound(arr: number[]): number[] {
    return arr.map(a => Math.round(a * 100) / 100);
  }

  public static arrayMul(arr: number[], mul: number): number[] {
    const result = arr.map(p => p * mul);
    return result;
  }

  public static arrayMin<T>(arr: T[], def?: T): T {
    return arr && arr.length ? arr.reduce((p, c) => p > c ? c : p) : def;
  }

  public static arrayMax<T>(arr: T[], def?: T): T {
    return arr && arr.length ? arr.reduce((p, c) => p < c ? c : p) : def;
  }

  public static arrayMovingAverage(arr: number[], samples: number): number[] {
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

  public static arrayGrowthFactor(arr: number[]): number[] {
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

  public static addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 60 * 60 * 24 * 1000);
  }

  public static daysBetween(date1: Date, date2: Date): number {
    return Math.floor((date2.getTime() - date1.getTime()) / (60 * 60 * 24 * 1000));
  }

  public static getNiceColor(c: string): string {
    let result = Helpers.colors[c];
    if (!result) {
      let i = this.getHashBucket(c, niceColors.length);
      if (Object.keys(Helpers.colors).length < niceColors.length) {
        const usedColors = Object.keys(Helpers.colors).map(country => Helpers.colors[country]);
        i = 0;
        while (usedColors.indexOf(niceColors[i]) >= 0) {
          i++;
        }
      }
      result = niceColors[i];
      Helpers.colors[c] = result;
    }
    return result;
  }

  public static getHashBucket(v: any, numberOfBuckets: number): number {
    return parseInt((hash(v) as string).slice(0, 6), 16) % numberOfBuckets;
  }

  public static abbrNumber(label: number): string {
    if (!label) {
      return '0';
    }
    let zeroes = Math.log10(label);
    if (zeroes % 1 === 0) {
      const suffixes = [ '', 'K', 'M', 'B', 'T' ];
      const suffixIndex = Math.floor(zeroes / 3);
      zeroes = zeroes % 3;
      return '1' + (zeroes > 0 ? '0'.repeat(zeroes) : '') + suffixes[suffixIndex];
    }
  }

  public static getTsDate(date: string): Date {
    const a = date.split('-');
    return new Date(parseInt(a[0], 10), parseInt(a[1], 10) - 1, parseInt(a[2], 10), 0, 0, 0, 0);
  }

  public static asTsDate(date: Date, padZeroes = false): string {
    let mo = (date.getMonth() + 1).toString();
    let da = date.getDate().toString();
    if (padZeroes) {
      if (mo.length === 1) {
        mo = '0' + mo;
      }
      if (da.length === 1) {
        da = '0' + da;
      }
    }
    return date.getFullYear() + '-' + mo + '-' + da;
  }
}
