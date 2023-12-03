import capitalize from "../src/capitalize";

describe("capitalize", () => {
  it("capitalizes lowercase words", () => {
    expect(capitalize("emmental")).toBe("Emmental");
  });

  it("capitalizes uppercase words", () => {
    expect(capitalize("EMMENTAL")).toBe("Emmental");
  });

  it("handles mixed case words", () => {
    expect(capitalize("EmMeNtAl")).toBe("Emmental");
  });

  it("handles empty strings", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles strings with only the first character", () => {
    expect(capitalize("e")).toBe("E");
  });
});
