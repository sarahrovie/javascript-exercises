const getAge = function (person) {
    person.yearOfDeath ??= new Date().getFullYear();
    
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        // let oldestAge = !oldest.yearOfDeath ?
        // year - oldest.yearOfBirth :
        // oldest.yearOfDeath - oldest.yearOfBirth;
        // let currentAge = !current.yearOfDeath ?
        // year - current.yearOfBirth :
        // current.yearOfDeath - current.yearOfBirth;

        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        
        return oldestAge > currentAge ? oldest : current;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
