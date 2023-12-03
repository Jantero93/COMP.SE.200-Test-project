import toInteger from "../src/toInteger";

describe("toInteger", () => {
  it("converts decimal numbers to integers", () => {
    expect(toInteger(3.2)).toBe(3);
  });

  it("converts strings to integers", () => {
    expect(toInteger("3.2")).toBe(3);
  });

  it("converts Number.MIN_VALUE to 0", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  it("converts Infinity to a large number", () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e308);
  });

  it("handles NaN", () => {
    expect(toInteger(NaN)).toBe(0);
  });

  it("handles null", () => {
    expect(toInteger(null)).toBe(0);
  });

  it("handles undefined", () => {
    expect(toInteger(undefined)).toBe(0);
  });
});
