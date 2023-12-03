import keys from "../src/keys";

describe("keys", () => {
  it("returns own property names of an object", () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    expect(keys(new Foo())).toEqual(["a", "b"]);
  });

  it("returns keys for array-like objects", () => {
    expect(keys("hi")).toEqual(["0", "1"]);
  });

  it("handles non-object values", () => {
    expect(keys(123)).toEqual([]);
  });

  it("handles arrays", () => {
    expect(keys([1, 2, 3])).toEqual(["0", "1", "2"]);
  });

  it("handles empty objects", () => {
    expect(keys({})).toEqual([]);
  });
});
