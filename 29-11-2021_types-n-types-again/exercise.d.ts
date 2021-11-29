declare module 'stats' {
    type Comparator<T> = (itemA: T, itemB: T) => number;
    type GetIndexNumber = <T>(input: T[], comparator: Comparator<T>) => number;
    type GetElement = <T>(input: T[], comparator: Comparator<T>) => null | T;
    type GetValue = <T>(element: T) => number;

    export const getMaxIndex: GetIndexNumber;
    export const getMinIndex: GetIndexNumber;
    export const getMedianIndex: GetIndexNumber;

    export const getMinElement: GetElement;
    export const getMaxElement: GetElement;
    export const getMedianElement: GetElement;

    export function getAverageValue <T>(items: T[], getValue: (element: T) =>  number): number | null;
}