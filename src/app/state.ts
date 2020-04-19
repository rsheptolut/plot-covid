import { ChartType } from './graph-type';

export class State {
    constructor(
        public selectedCountries: string[] = [ '(world)', 'US', 'Australia', 'Singapore' ],
        public hiddenCountries: string[] = [],
        public chartType: string = ChartType.NewCases,
        public average: boolean = true,
        public avgSamples: number = 5,
        public normalize: boolean = true,
        public normalizePopulation: number = 1000000,
        public startFrom: string = 'value',
        public startDate: string = new Date(2020, 1, 21, 0, 0, 0, 0).toISOString(),
        public startValue: number = 1,
        public log: boolean = true,
    ) {
    }
}