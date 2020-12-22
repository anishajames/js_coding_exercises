const { TestScheduler } = require("jest");
const { sumMultiples } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("an Array is required");
  });

  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
  });

  test("returns the sum of decimal numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 2, 30.0, 15.0])).toBe(45);
  });

  test("returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 12.5, 15.5])).toBe(0);
  });
});
