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
    if (!person.yearOfDeath) {
      person.yearOfDeath = 2022;
    }
    if (Object.keys(obj).length === 0) {
      obj = person;
    }
    let personAge = person.yearOfDeath - person.yearOfBirth;
    let objAge = obj.yearOfDeath - obj.yearOfBirth;
    if (personAge > objAge) {
      obj = person;
    }
    return obj
  }, {})
}
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;


// if person.yearOfDeath does not exist, then make it current year.