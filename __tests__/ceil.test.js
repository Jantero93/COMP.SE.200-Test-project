import ceil from "../src/ceil";

describe("ceil", () => {
  it("rounds numbers up without precision", () => {
    expect(ceil(4.006)).toBe(5);
  });

  it("rounds numbers up with positive precision", () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  it("rounds numbers up with negative precision", () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  it("handles negative numbers", () => {
    expect(ceil(-6.004, 2)).toBe(-6.0);
  });

  it("handles zero precision", () => {
    expect(ceil(4.006, 0)).toBe(5);
  });

  it("handles zero value", () => {
    expect(ceil(0)).toBe(0);
  });
});
