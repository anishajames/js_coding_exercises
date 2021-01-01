function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const addVATPrice = (originalPrice * vatRate) / 100 + originalPrice;
  if (addVATPrice === Math.floor(addVATPrice)) return parseFloat(addVATPrice);
  else return parseFloat(addVATPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const salePrice = parseFloat(
    originalPrice - (originalPrice * reduction) / 100
  );
  if (salePrice === Math.floor(salePrice)) return parseFloat(salePrice);
  else return parseFloat(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position;
  let length;
  if (str.length % 2 === 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversedWords = new Array();
  words.map((word) => reversedWords.push(word.split("").reverse().join("")));
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      count++;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0,
    meanVal = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  meanVal = sum / scores.length;
  if (meanVal === Math.floor(meanVal)) return parseFloat(meanVal);
  else return parseFloat(meanVal.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
  if (n % 3 === 0) {
    return "fizz";
  }
  if (n % 5 === 0) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
