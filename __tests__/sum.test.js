import add from '../src/add';
import isObject from '../src/isObject';

describe('test set', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('failing test set', () => {
  test('always will fail', () => {
    expect(isObject(1)).toBe(true);
  });
});
