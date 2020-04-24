import { ChartType } from './graph-type';

export class State {
    constructor(
        public selectedCountries: string[] = [],
        public hiddenCountries: string[] = [],
        public chartType: string = ChartType.NewCases,
        public average: boolean = true,
        public avgSamples: number = 5,
        public normalize: boolean = true,
        public normalizePopulation: number = 1000000,
        public dataset: string = 'ECDC',
        public startFrom: string = 'date',
        public startDate: string = null,
        public startValue: number = 1,
        public log: boolean = true,
    ) {
    }
}
