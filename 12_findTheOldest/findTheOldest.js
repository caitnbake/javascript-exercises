const findTheOldest = function(people) {
    let oldest = people[0];
    let thisYear = new Date().getFullYear();
    
    for (let person of people) {
        let currentAge = (person.yearOfDeath || thisYear) - person.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || thisYear) - oldest.yearOfBirth;
        
        if (currentAge > oldestAge) {
            oldest = person;
        }
    }
    return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
