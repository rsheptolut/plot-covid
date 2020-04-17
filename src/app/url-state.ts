import { State } from './state';
import { ChartType } from './graph-type';

export class UrlState {
    public countries: string;
    public hide: string;
    public chart: string;
    public avg: number;
    public pop: number;
    public log: string;
    public startDate: string;
    public startValue: number;

    public static fromState(state: State): UrlState {
        const result = new UrlState();
        result.countries = state.selectedCountries.join(',');
        result.hide = state.hiddenCountries.join(',');
        result.chart = state.chartType || ChartType.NewCases;
        result.avg = state.average && state.avgSamples > 1 ? state.avgSamples : undefined;
        result.pop = state.normalize ? state.normalizePopulation : undefined;
        result.log = state.log ? '1' : '0';
        result.startDate = state.startFrom === 'date' && state.startDate ? new Date(state.startDate).toISOString().slice(0, 10) : undefined;
        result.startValue = !result.startDate ? state.startValue || 1 : undefined;

        return result;
    }

    public static toState(state: UrlState): State {
        const result = new State();
        if (Object.keys(state).length) {
            result.selectedCountries = state.countries ? state.countries.split(',') : [ 'US' ];
            result.hiddenCountries = state.hide ? state.hide.split(',') : [];
            result.chartType = state.chart || ChartType.NewCases;
            if (Object.keys(ChartType).map(k => ChartType[k]).indexOf(result.chartType) < 0) {
                result.chartType = ChartType.NewCases;
            }
            result.average = state.avg > 1;
            result.avgSamples = result.average ? state.avg : 5;
            result.normalize = state.pop >= 100;
            result.normalizePopulation = result.normalize ? state.pop : 1000000;
            if (state.startDate && state.startDate.length === 10) {
                result.startFrom = 'date';
                result.startDate = new Date(state.startDate).toISOString();
            } else {
                result.startFrom = 'value';
                result.startValue = state.startValue || (result.normalize ? 1 : 100);
            }
            result.log = !(state.log === '0');
        }

        return result;
    }
}
