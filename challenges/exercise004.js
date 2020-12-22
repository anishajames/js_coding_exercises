function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const result = nums.filter(function (val) {
    return val < 1;
  });
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const result = names.filter(function (name) {
    return name.charAt(0) == char;
  });

  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const result = words.filter(function (word) {
    return word.startsWith("to ");
  });

  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const result = nums.filter(function (num) {
    return Number.isInteger(num);
  });

  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let newArr = [];
  users.forEach(function (user) {
    newArr.push(user.data.city.displayName);
  });
  return newArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrtNums = nums.map(function (num) {
    return parseFloat(Math.sqrt(num).toFixed(2));
  });
  return sqrtNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let newArr = [];
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().indexOf(str.toLowerCase()) > -1) {
      newArr.push(sentence);
    }
  });
  return newArr;

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const largestNums = triangles.map(function (triangle) {
    return Math.max.apply(Math, triangle);
  });
  return largestNums;
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
