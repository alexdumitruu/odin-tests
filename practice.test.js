// const sum = require('./practice');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const { capitalize, reverseString } = require('./practice');

test('first letter to be capitalized', () => {
    expect(capitalize('tactu'))
    .toBe('Tactu');
});

test('string is reversed', () => {
    expect(reverseString('abcde'))
    .toBe('edcba');
});