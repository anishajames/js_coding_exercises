const findNextNumber = (nums, n) =>
  nums.includes(n) && nums.indexOf(n) != nums.length - 1
    ? nums[nums.indexOf(n) + 1]
    : null;

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const occurrences = { 1: 0, 0: 0 };
  str.split("").map((num) => {
    occurrences[num] += 1;
  });
  return occurrences;
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(String(n).split("").reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
