const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
} = require("../challenges/exercise006");

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

describe("isValidDNA", () => {
  test("throws an error if no string is passed", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA("");
    }).toThrow("str is required");
  });

  test("returns false if not a valid DNA", () => {
    expect(isValidDNA("DNDJDEKJSDYJDB")).toBe(false);
  });

  test("returns true if valid DNA", () => {
    expect(isValidDNA("DNDJCDEKJSDYJDB")).toBe(true);
    expect(isValidDNA("skkioutcopa")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("throws an error if no string is passed", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");

    expect(() => {
      getComplementaryDNA("");
    }).toThrow("str is required");
  });

  test("returns complementary base pair", () => {
    expect(getComplementaryDNA("C")).toBe("G");
    expect(getComplementaryDNA("G")).toBe("C");
    expect(getComplementaryDNA("T")).toBe("A");
    expect(getComplementaryDNA("A")).toBe("T");
    expect(getComplementaryDNA("CTAG")).toBe("GATC");
    expect(getComplementaryDNA("CAATTC")).toBe("GTTAAG");
  });
});

describe("isItPrime", () => {
  test("throws an error if no number is passed", () => {
    expect(() => {
      isItPrime();
    }).toThrow("number is required");

    expect(() => {
      isItPrime("");
    }).toThrow("number is required");

    expect(() => {
      isItPrime(1.23);
    }).toThrow("input is not an integer");

    expect(() => {
      isItPrime("foo");
    }).toThrow("input is not an integer");

    expect(() => {
      isItPrime(true);
    }).toThrow("input is not an integer");
  });
});
