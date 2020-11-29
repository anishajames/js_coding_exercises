function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if(nums.length == 0)  
    return nums;
  else{
    for (i = 0; i < nums.length; i++) {
      nums[i] = nums[i]*nums[i];
    }
    return nums;
  } 

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var newWord = words[0];
  for (i = 1; i < words.length; i++) {
    newWord = newWord + words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
  }
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
