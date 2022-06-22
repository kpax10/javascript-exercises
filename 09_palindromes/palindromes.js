const palindromes = function (string) {
  const array = [];

  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] === ' ') ||
      (string[i] === '.') ||
      (string[i] === ',') ||
      (string[i] === '!')
    ) continue
    array.push(string[i].toLowerCase());
  };

  let j = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[j]) {
      j--;
    } else return false;
  } return true
};
// Do not edit below this line
module.exports = palindromes;