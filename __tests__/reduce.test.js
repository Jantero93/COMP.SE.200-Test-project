import reduce from "../src/reduce";

describe("reduce", () => {
  it("reduces an array with an accumulator", () => {
    const sum = (sum, n) => sum + n;
    expect(reduce([1, 2], sum, 0)).toBe(3);
  });

  it("reduces an object to a value", () => {
    const resultFunc = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };
    expect(reduce({ a: 1, b: 2, c: 1 }, resultFunc, {})).toEqual({
      1: ["a", "c"],
      2: ["b"],
    });
  });

  it("uses the first element as an accumulator if not provided", () => {
    const sum = (sum, n) => sum + n;
    expect(reduce([1, 2, 3], sum)).toBe(6);
  });

  it("handles empty collections", () => {
    const sum = (sum, n) => sum + n;
    expect(reduce([], sum, 0)).toBe(0);
  });

  it("handles no iteratee function", () => {
    expect(reduce([1, 2, 3])).toEqual(3);
  });
});
