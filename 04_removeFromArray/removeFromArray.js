const removeFromArray = function (arr, ...theArgs) {
    // filter the array??

    for (let i = 0; i < theArgs.length; i++) {
        if (arr[i] === theArgs[i]) {
            break;
        } else arr.splice(arr.indexOf(theArgs[i]), 1);
    }
    return arr;
}
console.log(removeFromArray([1, 2, 3, 4], 7, 2));

// Do not edit below this line
//module.exports = removeFromArray;
// const arr = [4, 5, 6];
// arr.splice(arr.indexOf(7))
// console.log(arr);