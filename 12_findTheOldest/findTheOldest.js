const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function (array) {

  //refactor this
  // array.sort((a, b) => {
  //   if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
  //     return -1;
  //   } else return 1;
  // })
  // return array[0];

  //reduce
  return array.reduce((obj, person) => {
    //if object is empty, add person to obj
    // if person age > obj, replace obj w new person

    if (person.yearOfDeath - person.yearOfBirth > obj.yearOfDeath - obj.yearOfBirth) {
      // obj[person] = obj;
      obj = obj[person]
    }

    return obj

  }, {});
}


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
