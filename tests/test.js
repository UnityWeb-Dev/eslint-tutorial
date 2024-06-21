// Example test file for ESLint tutorial

const { addNumbers } = require('../src/index');

// Test case 1: Adding positive numbers
test('Adding positive numbers', () => {
  const result = addNumbers(5, 10);
  expect(result).toBe(15);
});

// Test case 2: Adding negative numbers
test('Adding negative numbers', () => {
  const result = addNumbers(-5, -10);
  expect(result).toBe(-15);
});

// Test case 3: Adding positive and negative numbers
test('Adding positive and negative numbers', () => {
  const result = addNumbers(5, -10);
  expect(result).toBe(-5);
});
