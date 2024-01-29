import { formatValuta } from "../scripts/utils/money.js";

describe("test suite: formatValuta", () => {
  it("convert fening u KM", () => {
    expect(formatValuta(2095)).toEqual("20.95");
  });
});
