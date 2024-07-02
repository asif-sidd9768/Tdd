const add = require("..");

describe('Add calculator', () => {
    test('should return 0 for empty string', () => {
        expect(add("")).toBe(0)
    });

    test('should handle any amount of numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15)
    });

    test('should handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6)
    });

    test('should support different delimeters', () => {
        expect(add("//;\n1;2")).toBe(3)
    });

    test('should throw exception on negative numbers', () => {
        expect(() => add("1,2,-3,-4")).toThrow("negative numbers not allowed -3, -4")
    });

    test('should ignore numbers above greater or equals to 1000', () => {
        expect(add("2,1000,1")).toBe(3)
    });

    test('should support any length of delimeter', () => {
        expect(add("//[***]\n1***2***3")).toBe(6)
    });
});