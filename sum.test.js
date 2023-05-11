const sum = require('./sum.js'); // Make sure that relative path is correct

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
