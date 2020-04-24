export class CsvRow {
    constructor(
    public date: string,
    public iso_code: string,
    public location: string,
    public new_cases: string,
    public new_cases_per_million: string,
    public new_deaths: string,
    public new_deaths_per_million: string,
    public new_tests: string,
    public new_tests_per_thousand: string,
    public tests_units: string,
    public total_cases: string,
    public total_cases_per_million: string,
    public total_deaths: string,
    public total_deaths_per_million: string,
    public total_tests: string,
    public total_tests_per_thousand: string,
    ) {
    }
}