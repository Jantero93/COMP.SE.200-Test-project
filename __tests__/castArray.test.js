import castArray from "../src/castArray";

describe("castArray", () => {
  it("casts a number to an array", () => {
    expect(castArray(1)).toEqual([1]);
  });

  it("casts an object to an array", () => {
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
  });

  it("casts a string to an array", () => {
    expect(castArray("abc")).toEqual(["abc"]);
  });

  it("casts null to an array", () => {
    expect(castArray(null)).toEqual([null]);
  });

  it("casts undefined to an array", () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });

  it("returns an empty array when no arguments are given", () => {
    expect(castArray()).toEqual([]);
  });

  it("returns the same array if an array is provided", () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});
