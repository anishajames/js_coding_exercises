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
  const chkIngredient = (item) => item.ingredients.includes(ingredient);
  return menu.some(chkIngredient);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const duplicates = arr1.filter((item) => arr2.includes(item));
  return duplicates
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
