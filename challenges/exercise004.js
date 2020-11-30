function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let newArr = [];
  nums.forEach(function (num) {
    if (num < 1)
      newArr.push(num);
  });
  return newArr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArr = [];
  names.forEach(function (name) {
    if (name.charAt(0) == char)
      newArr.push(name);
  });
  return newArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let newArr = [];
  words.forEach(function (word) {
    if (word.startsWith("to "))
      newArr.push(word);
  });
  return newArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newArr = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num))
      newArr.push(num);
  });
  return newArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
