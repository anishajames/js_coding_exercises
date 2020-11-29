function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
    return word.charAt(0).toUpperCase() + word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
    return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var addVAT = originalPrice*vatRate/100+originalPrice;
  if (addVAT == Math.floor(addVAT))
    return parseFloat(addVAT);
  else
    return parseFloat(addVAT.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
    var salePrice = parseFloat(originalPrice-originalPrice*reduction/100);
  if (salePrice == Math.floor(salePrice))  
    return parseFloat(salePrice);
  else 
      return parseFloat(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position;
  var length;
  if(str.length % 2 == 1) {
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
  var reverseString = word.split("");
  reverseString.reverse();
  return reverseString.join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var reverseString;
  var reversedWords = new Array();
  for(i = 0; i<words.length; i++){
    reverseString = words[i].split("");
    reverseString.reverse();
    reversedWords.push(reverseString.join(""));
  }
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var count =0;
  for(i = 0; i<users.length; i++){
    if(users[i].type == "Linux"){
      count++;
    }
  }
  return count;
  
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var sum =0, meanVal = 0;
  for(i = 0; i<scores.length; i++){
    sum += scores[i];
  }
  meanVal = sum/scores.length;
  if (meanVal == Math.floor(meanVal))
    return parseFloat(meanVal);
  else
    return parseFloat(meanVal.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
  simpleFizzBuzz
};
