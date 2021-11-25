import RemoveIslands from './removeIslands';

describe('Remove Islands', () => {
    
    it('should return a valid matrix without islands', () => {
        const input = [
            [1, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 1],
        ];
        const expected = [
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1],
        ];
        const result = RemoveIslands(input);
        expect(result).toEqual(expected);
    });

    it('should return a 6x6 valid matrix without islands', () => {
        const input = [
            [1, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 1],
            [0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 0, 0, 1],
        ];
        const expected = [
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 1],
        ];
        const result = RemoveIslands(input);
        expect(result).toEqual(expected);
    });

    it('should return a 7x6 valid matrix without islands', () => {
        const input = [
            [1, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 1],
        ];
        const expected = [
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 1],
        ];
        const result = RemoveIslands(input);
        expect(result).toEqual(expected);
    });
})
