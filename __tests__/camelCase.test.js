import camelCase from "../src/camelCase";

describe("camelCase", () => {
  it("converts space-separated words to camelCase", () => {
    expect(camelCase("Valion Oltermanni")).toBe("valionOltermanni");
  });

  it("converts hyphen-separated words to camelCase", () => {
    expect(camelCase("--AURA-juusto--")).toBe("auraJuusto");
  });

  it("converts underscore-separated words to camelCase", () => {
    expect(camelCase("__KOSKEN_LASKIJA__")).toBe("koskenLaskija");
  });

  it("handles empty strings", () => {
    expect(camelCase("")).toBe("");
  });
});
