const add = require("..");

describe('Add calculator', () => {
    test('should return 0 for empty string', () => {
        expect(add("")).toBe(0)
    });
});