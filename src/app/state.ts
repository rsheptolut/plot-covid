import { ChartType } from './graph-type';

export class State {
    constructor(
        public selectedCountries: string[] = [ 'US' ],
        public hiddenCountries: string[] = [],
        public chartType: string = ChartType.NewCases,
        public average: boolean = true,
        public avgSamples: number = 5,
        public normalize: boolean = true,
        public normalizePopulation: number = 1000000,
        public shift: boolean = true,
        public shiftThreshold: number = 1,
        public log: boolean = true,
    ) {
    }
}