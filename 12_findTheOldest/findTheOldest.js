const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// const findTheOldest = function (array) {
//   return array.reduce((obj, person) => {
//     const personAge = person.yearOfDeath - person.yearOfBirth;
//     const objAge = obj.yearOfDeath - obj.yearOfBirth;
//     if (!person.yearOfDeath) {
//       const aliveDate = new Date();
//       person.yearOfDeath = aliveDate.getFullYear();
//     }
//     if (Object.keys(obj).length === 0) {
//       obj = person;
//     }
//     if (personAge > objAge) {
//       obj = person;
//     }
//     return obj
//   }, {})
// }
// Do not edit below this line
module.exports = findTheOldest;


// if person.yearOfDeath does not exist, then make it current year.