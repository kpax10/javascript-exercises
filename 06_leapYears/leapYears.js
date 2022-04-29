const leapYears = function (year) {
    if (year % 400 === 0 && year % 100 === 0) return false;
    if (year % 400 === 0 && year % 100 === 0) return false;

    // if % by 400  && 4 true
    // if % by 100 && 4 false


};
console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;