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

describe("createRange", () => {
  test("throws an error if start is not provided", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");

    expect(() => {
      createRange("");
    }).toThrow("start is required");
  });

  test("throws an error if end is not provided", () => {
    expect(() => {
      createRange(1);
    }).toThrow("end is required");

    expect(() => {
      createRange(1, "");
    }).toThrow("end is required");
  });

  test("throws an error if start and end are the same", () => {
    expect(() => {
      createRange(1, 1);
    }).toThrow("start and end cannot be the same");

    expect(() => {
      createRange(5, 5, 3);
    }).toThrow("start and end cannot be the same");
  });

  test("returns a range of numbers when start, end and step are provided", () => {
    expect(createRange(5, 15, 5)).toBe([5, 10, 15]);
    expect(createRange(0, 6, 2)).toBe([0, 2, 4, 6]);
  });

  test("returns a range of numbers when start and end are provided", () => {
    expect(createRange(7, 11)).toBe([7, 8, 9, 10, 11]);
    expect(createRange(0, 9)).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
