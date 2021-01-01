function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.length === 0 ? nums : nums.map((num) => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newWord = words[0];
  for (let i = 1; i < words.length; i++) {
    newWord =
      newWord +
      words[i].charAt(0).toUpperCase() +
      words[i].substring(1, words[i].length);
  }
  return newWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  people.forEach((student) => (count += student.subjects.length));
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (menu[i].ingredients[j] === ingredient) return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  arr1.sort(); // Sort both the arrays
  arr2.sort();
  let common = []; // Array to contain common elements
  let i = 0,
    j = 0;
  // Break if one of them runs out
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // If both are same, add it to result
      common.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      // Increment the smaller value so that
      i++; // it could be matched with the larger
    } // element
    else {
      j++;
    }
  }

  return common;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
