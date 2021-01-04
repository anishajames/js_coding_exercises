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
  return addVATPrice === Math.floor(addVATPrice)
    ? parseFloat(addVATPrice)
    : parseFloat(addVATPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const salePrice = parseFloat(
    originalPrice - (originalPrice * reduction) / 100
  );
  return salePrice === Math.floor(salePrice)
    ? parseFloat(salePrice)
    : parseFloat(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position, length;
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
  return words.map((word) => word.split("").reverse().join(""));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let meanVal,
    sum = 0;
  scores.forEach((score) => (sum += score));
  meanVal = sum / scores.length;
  return meanVal === Math.floor(meanVal)
    ? parseFloat(meanVal)
    : parseFloat(meanVal.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return n % 3 === 0 && n % 5 === 0
    ? "fizzbuzz"
    : n % 3 === 0
    ? "fizz"
    : n % 5 === 0
    ? "buzz"
    : n;
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
