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
    expect(createRange(5, 15, 5)).toEqual([5, 10, 15]);
    expect(createRange(0, 6, 2)).toEqual([0, 2, 4, 6]);
  });

  test("returns a range of numbers when start and end are provided", () => {
    expect(createRange(7, 11)).toEqual([7, 8, 9, 10, 11]);
    expect(createRange(0, 9)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("getScreentimeAlertList", () => {
  test("throws an error if users is missing", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");

    expect(() => {
      getScreentimeAlertList([]);
    }).toThrow("users is required");

    expect(() => {
      getScreentimeAlertList("foo");
    }).toThrow("users is required");
  });

  test("throws an error if date is missing", () => {
    const users = [
      { username: "sam_j_1989", name: "Sam Jones", screenTime: [] },
    ];
    expect(() => {
      getScreentimeAlertList(users);
    }).toThrow("date is required");
  });

  test("returns no users when there are no activities for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 75, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-05-02",
            usage: { twitter: 0, instagram: 10, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { mapMyRun: 0, whatsApp: 90, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 84, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
  });

  test("returns no users when the screentime is less than 100 minutes for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 75, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-05-02",
            usage: { twitter: 0, instagram: 10, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { mapMyRun: 0, whatsApp: 90, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 84, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
  });

  test("returns an array of users who have used more than 100 minutes of screentime for a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 75, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-05-02",
            usage: { twitter: 0, instagram: 10, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { mapMyRun: 0, whatsApp: 90, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 84, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "phil_p",
        name: "Phil P",
        screenTime: [
          {
            date: "2019-05-02",
            usage: { twitter: 0, instagram: 10, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { mapMyRun: 99, whatsApp: 90, facebook: 0, safari: 10 },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([
      "beth_1234",
      "sam_j_1989",
      "phil_p",
    ]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
  });
});

describe("hexToRGB", () => {
  test("throws an error if hexadecimal code is missing", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");

    expect(() => {
      hexToRGB("");
    }).toThrow("hexStr is required");

    expect(() => {
      hexToRGB("1234");
    }).toThrow("hexStr is required");
  });

  test("transforms the hex code into an RGB code", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#BF12DE")).toBe("rgb(191,18,222)");
    expect(hexToRGB("#ABCDEF")).toBe("rgb(171,205,239)");
  });
});
