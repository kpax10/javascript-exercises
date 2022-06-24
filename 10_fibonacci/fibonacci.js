const fibonacci = function (n) {
  const array = [];

  if (typeof n === 'string') {
    n = parseInt(n);
  }
  if (n < 0) return 'OOPS'
  if (n === 1) {
    array.push(1);
  }
  if (n >= 2) {
    array.push(1, 1);
    for (let i = 2; i < n; i++) {
      array.push((array[i - 2]) + (array[i - 1]));
    }
  }
  return array[array.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
