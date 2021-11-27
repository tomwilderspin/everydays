import FibonacciSequence, { sequenceRecursive } from './fibonacciSequence';

describe('Fibonacci sequence', () => {
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811

    it.each([
        [28, 317811],
        [17, 1597],
        [1, 1],
        [4, 3],
        [20, 6765],
        [46, 1836311903],
    ])('returns the %sth number in the sequence' , (targetNumber, expectedValue) => {
        const result = FibonacciSequence(targetNumber);
        expect(result).toEqual(expectedValue);
    })

    it.each([
        [28, 317811],
        [17, 1597],
        [1, 1],
        [4, 3],
        [20, 6765],
        [46, 1836311903],
    ])('returns the %sth number in the sequence with recursion' , (targetNumber, expectedValue) => {
        const result = sequenceRecursive(targetNumber);
        expect(result).toEqual(expectedValue);
    })
})
