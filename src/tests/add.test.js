const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should subtract add two numbers', () => {
    const result =  subtract(4, 2);
    expect(result).toBe(2);
});