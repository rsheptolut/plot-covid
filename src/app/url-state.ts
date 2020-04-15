import { State } from './state';
import { ChartType } from './graph-type';

export class UrlState {
    public countries: string;
    public hide: string;
    public chart: string;
    public avg: number;
    public pop: number;
    public shift: number;
    public log: string;

    public static fromState(state: State): UrlState {
        const result = new UrlState();
        result.countries = state.selectedCountries.join(',');
        result.hide = state.hiddenCountries.join(',');
        result.chart = state.chartType || ChartType.NewCases;
        result.avg = state.average && state.avgSamples > 1 ? state.avgSamples : undefined;
        result.pop = state.normalize ? state.normalizePopulation : undefined;
        result.shift = state.shift ? state.shiftThreshold : undefined;
        result.log = state.log ? '1' : '0';

        return result;
    }

    public static toState(state: UrlState): State {
        const result = new State();
        if (Object.keys(state).length) {
            result.selectedCountries = state.countries ? state.countries.split(',') : [ 'US' ];
            result.hiddenCountries = state.hide ? state.hide.split(',') : [];
            result.chartType = state.chart || ChartType.NewCases;
            result.average = state.avg > 1;
            result.avgSamples = result.average ? state.avg : 5;
            result.normalize = state.pop >= 100;
            result.normalizePopulation = result.normalize ? state.pop : 1000000;
            result.shift = state.shift > 0;
            result.shiftThreshold = result.shift ? state.shift : 1;
            result.log = state.log === '1';
        }

        return result;
    }
}
