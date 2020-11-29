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
  var count = 0;
  for (i = 0; i < people.length; i++) {
    if (people[i].subjects.length >0)
      count = count + people[i].subjects.length;
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (i = 0; i < menu.length; i++) {
    for (j = 0; j < menu[i].ingredients.length; j++) {
      if ( menu[i].ingredients[j] == ingredient)
        return true;
    }
  }
  return false;
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
