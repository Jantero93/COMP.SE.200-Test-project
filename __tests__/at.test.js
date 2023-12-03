import at from "../src/at";

describe("at", () => {
  const object = { a: [{ b: { c: 3 } }, 4] };

  it("returns values for specified paths", () => {
    expect(at(object, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
  });

  it("handles single string path", () => {
    expect(at(object, "a[0].b.c")).toEqual([3]);
  });

  it("handles array of paths", () => {
    expect(at(object, ["a[0].b.c"])).toEqual([3]);
  });

  it("returns undefined for non-existent paths", () => {
    expect(at(object, ["a[2]"])).toEqual([undefined]);
  });

  it("handles empty paths", () => {
    expect(at(object, [])).toEqual([]);
  });
});
