const repeatString = function (string, num) {
    let concat = '';

    if (num < 0) return 'ERROR';
    for (let i = 0; i < num; i++) {
        concat += string;
    }
    return concat
};

// Do not edit below this line
module.exports = repeatString;
