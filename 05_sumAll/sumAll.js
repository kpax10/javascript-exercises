const sumAll = function (getNum1, getNum2) {
    const array = [];
    let sum = 0;
    // guard clauses
    if (
        (getNum1 < 0 || getNum2 < 0) ||
        (getNum1 < 0 || getNum2 < 0) ||
        (typeof getNum1 === 'string') ||
        (typeof getNum2 === 'string') ||
        (typeof getNum1 === 'object') ||
        (typeof getNum2 === 'object')
    ) return 'ERROR';
    // swap if larger num first
    if (getNum1 > getNum2) {
        getNum1 = getNum1 + getNum2;
        getNum2 = getNum1 - getNum2;
        getNum1 = getNum1 - getNum2;
    }
    // create array
    for (let i = getNum1; i <= getNum2; i++) array.push(i);
    // add array to sum
    for (let elem of array) sum += elem;
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
