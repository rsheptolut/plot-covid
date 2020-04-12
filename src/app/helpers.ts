export class Helpers {
    public static toDictionary<TItem, T>(items: TItem[], keySelector: (item: TItem) => string, valueSelector: (item: TItem) => T): { [key: string]: T } {
        const result: { [key: string]: T } = {};
        for (const item of items) {
            result[keySelector(item)] = valueSelector(item);
        }
        return result;
    }
    
    public static range(range: number[]): number[] {
        const result: number[] = [];
        for (let i = range[0]; i <= range[1]; i += range[2]) {
            result.push(i);
        }
        return result;
    }
}
