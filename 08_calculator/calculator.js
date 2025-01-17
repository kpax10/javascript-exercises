const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// const sum = function (array) {
//   let total = 0;

//   array.forEach(element => {
//     total += element;
//   });
//   return total;
// };

const sum = (array) => {
  return array.reduce((total, current) => total + current, 0);
}

// const multiply = (array) => {
//   let total = 1;
//   array.forEach(element => {
//     total *= element;
//   });
//   return total;
// }

const multiply = (array) => {
  return array.reduce((total, current) => total * current, 1)
}

// const power = (a, b) => a ** b;

const power = (a, b) => Math.pow(a, b);

const factorial = (num) => {
  if (num === 0) return 1;
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  };
  return total;
};

//using recursion
const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  };
  return n * recursiveFactorial(n - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
