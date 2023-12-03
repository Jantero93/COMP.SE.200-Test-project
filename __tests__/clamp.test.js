import clamp from "../src/clamp";

describe("clamp", () => {
  it("clamps negative numbers to lower bound", () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  it("clamps positive numbers to upper bound", () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  it("returns the number if within bounds", () => {
    expect(clamp(3, -5, 5)).toBe(3);
  });

  it("handles non-numeric lower and upper bounds", () => {
    expect(clamp(3, undefined, undefined)).toBe(3);
  });

  it("handles NaN as number", () => {
    expect(clamp(NaN, -5, 5)).toBeNaN();
  });

  it("handles NaN as lower and upper bounds", () => {
    expect(clamp(3, NaN, NaN)).toBe(3);
  });
});
