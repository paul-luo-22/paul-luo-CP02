const index = require('./index')

test('sums two numbers', () => {
  expect(index.sum(1, 1)).toEqual(2)
})
