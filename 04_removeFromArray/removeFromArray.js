const removeFromArray = function (array, ...Args) {
    // filter the array??

    for (let i = 0; ((i < array.length) && (i >= 0)); i++) {
        for (let a = 0; a < (Args.length); a++) {
            if (array[i] === Args[a]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

//console.log(removeFromArray([1, 2, 3, 4], 1, 2));
//else arr.splice(arr.indexOf(args[i]), 1);

// Do not edit below this line
module.exports = removeFromArray;
