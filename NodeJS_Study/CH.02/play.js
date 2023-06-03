var name = 'MAX';
var age = 29;
var hasHobbies = true;

console.log(name);  // MAX
console.log(age);   // 29
console.log(hasHobbies);    // true

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));    // Name is MAX, age is 29 and the user has hobbies: true