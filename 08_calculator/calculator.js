const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function (array) {
  // let total = 0;
  // for (let i = 0; i < array.length; i++) {
  //   total += array[i];
  //   // return total;
  // } return total;

  let total = 0;
  array.forEach(element => {
    total += element;
  });
  return total;
}

const multiply = function () {

};

const power = function () {

};

const factorial = function () {

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
