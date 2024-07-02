const add = require("..");

describe('Add calculator', () => {
    test('should return 0 for empty string', () => {
        expect(add("")).toBe(0)
    });

    test('should handle any amount of numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15)
    });
});