// const sum = require('./practice');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const { capitalize, reverseString, calculator } = require('./practice');

test('first letter to be capitalized', () => {
    expect(capitalize('tactu'))
    .toMatch('Tactu');
});

test('string is reversed', () => {
    expect(reverseString('abcde'))
    .toMatch('edcba');
});

test('calculator works fine', () => {
    expect(calculator().add(10, 45)).toBe(55);
    expect(calculator().subtract(45, 10)).toBe(35);
    expect(calculator().multiply(10, 45)).toBe(450);
    expect(calculator().divide(45, 5)).toBe(9);
});