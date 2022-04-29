const sumAll = function (getNum1, getNum2) {
    // guard clauses
    if (
        (getNum1 < 0 || getNum2 < 0) ||
        (typeof getNum1 !== 'number' || typeof getNum2 !== 'number')
    ) return 'ERROR';
    // swap if larger num first
    if (getNum1 > getNum2) {
        getNum1 = getNum1 + getNum2;
        getNum2 = getNum1 - getNum2;
        getNum1 = getNum1 - getNum2;
    }
    let sum = 0;
    for (let i = getNum1; i <= getNum2; i++) {
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
