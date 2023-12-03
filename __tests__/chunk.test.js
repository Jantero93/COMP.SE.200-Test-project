import chunk from "../src/chunk";

describe("chunk", () => {
  it("splits an array into chunks of specified size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("handles uneven chunks", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  it("returns an empty array when input is empty", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("returns the original array when chunk size is 1", () => {
    expect(chunk(["a", "b", "c"], 1)).toEqual([["a"], ["b"], ["c"]]);
  });

  it("handles chunk sizes larger than the array", () => {
    expect(chunk(["a", "b"], 5)).toEqual([["a", "b"]]);
  });

  it("handles non-integer chunk sizes", () => {
    expect(chunk(["a", "b", "c", "d"], 2.5)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("handles negative chunk sizes", () => {
    expect(chunk(["a", "b", "c", "d"], -1)).toEqual([]);
  });

  it("handles non-numeric chunk sizes", () => {
    expect(chunk(["a", "b", "c", "d"], "invalid")).toEqual([]);
  });
});
