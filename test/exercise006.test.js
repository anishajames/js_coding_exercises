const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
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

  test("returns true if its prime", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(19)).toBe(true);
  });

  test("returns false if its not prime", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(26)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("throws an error if no number is passed", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");

    expect(() => {
      createMatrix(5);
    }).toThrow("fill is required");

    expect(() => {
      createMatrix("", "foo");
    }).toThrow("n is required");

    expect(() => {
      createMatrix(5, "");
    }).toThrow("fill is required");
  });

  test("returns empty matrix when n is 0", () => {});

  test("returns single element matrix when n is 1", () => {
    expect(createMatrix(1, "test")).toEqual(["test"]);
  });

  test("returns an array of arrays", () => {
    expect(createMatrix(2, "test")).toEqual([
      ["test", "test"],
      ["test", "test"],
    ]);

    expect(createMatrix(5, "the yellow cat")).toEqual([
      [
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
      ],
      [
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
      ],
      [
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
      ],
      [
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
      ],
      [
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
        "the yellow cat",
      ],
    ]);
  });
});
