const removeFromArray = function (arr, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++) {
        arr.splice(arr.indexOf(theArgs[i]), 1);
    }
    return arr;
}
console.log(removeFromArray([1, 2, 3, 4], 7, 2));

// Do not edit below this line
//module.exports = removeFromArray;
