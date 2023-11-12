import add from '../src/add';
import isObject from '../src/isObject';

describe('test set', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('testing test', () => {
    expect(1).toBe(1);
  });

  test('isObject', () => {
    const object = { test: 1, attribute: 'test' };
    expect(isObject(object)).toBe(true);
  });
});
