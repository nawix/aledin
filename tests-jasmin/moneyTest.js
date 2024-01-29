import { formatValuta } from "../scripts/utils/money.js";

describe("test suite: formatValuta", () => {
  it("convert fening u KM", () => {
    expect(formatValuta(2095)).toEqual("20.95");
  });

  it("rad sa nulom", () => {
    expect(formatValuta(0)).toEqual("0.00");
  });

  it("zaokruzivanje", () => {
    expect(formatValuta(2000.5)).toEqual("20.01");
  });
});
