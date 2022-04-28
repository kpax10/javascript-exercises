const sumAll = function (getNum1, getNum2) {
    const array = [];
    let sum = 0;

    // create array
    for (let i = getNum1; i <= getNum2; i++) array.push(i);
    // add array to sum
    for (let elem of array) sum += elem;
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
