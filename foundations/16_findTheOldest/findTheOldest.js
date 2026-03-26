// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

function getAge(birth, death){
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person)=>{
        let personAge = getAge(person.yearOfBirth,person.yearOfDeath);
        let oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        if(!("name" in oldest) || personAge > oldestAge){
            return person;
        }
        return oldest;
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
