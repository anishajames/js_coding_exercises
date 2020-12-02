function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  //forEach Implementation
  /* let newArr = [];
  nums.forEach(function (num) {
    if (num < 1)
      newArr.push(num);
  });
  return newArr;
  */
  var result = nums.filter(function (val) {
    return val < 1;
  });

  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  //forEach Implementation
  /*let newArr = [];
  names.forEach(function (name) {
    if (name.charAt(0) == char)
      newArr.push(name);
  });
  return newArr;
*/
  var result = names.filter(function (name) {
    return name.charAt(0) == char;
  });

  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  //forEach Implementation
  /*let newArr = [];
  words.forEach(function (word) {
    if (word.startsWith("to "))
      newArr.push(word);
  });
  return newArr;
*/
  var result = words.filter(function (word) {
    return word.startsWith("to ");
  });

  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  //forEach Implementation
  /*  let newArr = [];
    nums.forEach(function (num) {
      if (Number.isInteger(num))
        newArr.push(num);
    });
    return newArr;
  */
  var result = nums.filter(function (num) {
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
  //forEach Implementation
  /*let newArr = [];
  nums.forEach(function (num) {
    const sqrtNum = Math.sqrt(num);
    newArr.push(parseFloat(sqrtNum.toFixed(2))); 
  });
  return newArr;
  */
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
