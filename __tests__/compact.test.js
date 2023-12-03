import compact from "../src/compact";

describe("compact", () => {
  it("removes falsey values from an array", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  it("keeps truthy values", () => {
    expect(compact(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  it("handles arrays with only falsey values", () => {
    expect(compact([false, null, 0, "", undefined, NaN])).toEqual([]);
  });

  it("handles empty arrays", () => {
    expect(compact([])).toEqual([]);
  });

  it("handles arrays with only truthy values", () => {
    expect(compact([1, "a", {}, []])).toEqual([1, "a", {}, []]);
  });
});
