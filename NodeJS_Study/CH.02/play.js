const name = 'MAX';
let age = 29;
const hasHobbies = true;

console.log(name);  // MAX
console.log(age);   // 29
console.log(hasHobbies);    // true

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));    // Name is MAX, age is 29 and the user has hobbies: true
