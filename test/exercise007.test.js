const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("throws an error if no number is passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");

    expect(() => {
      sumDigits("");
    }).toThrow("n is required");
  });

  test("returns the number if single digit", () => {
    expect(sumDigits(0)).toBe(0);
  });

  test("returns the number if single digit", () => {
    expect(sumDigits(5)).toBe(5);
  });

  test("returns the sum of all the digits in any number", () => {
    expect(sumDigits(435)).toBe(12);
    expect(sumDigits(12)).toBe(3);
    expect(sumDigits(555)).toBe(15);
  });
});
