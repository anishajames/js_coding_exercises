const findNextNumber = (nums, n) =>
  nums.includes(n) && nums.indexOf(n) !== nums.length - 1
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
  return arrs.flat().reduce((a, b) => a + b);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  const firstElement = arr.shift();
  arr.unshift(arr.pop());
  arr.push(firstElement);
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let foundNeedle = false;
  Object.values(haystack).some(function (item) {
    if (item.toString().toLowerCase().includes(searchTerm.toLowerCase()))
      foundNeedle = true;
  });
  return foundNeedle;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const words = str
    .toLowerCase()
    .replace(/[!?.,:;]/g, "")
    .split(" ");
  let occurrences = {};
  words.map((word) => {
    occurrences[word] === undefined
      ? (occurrences[word] = 1)
      : occurrences[word]++;
  });
  return occurrences;
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
