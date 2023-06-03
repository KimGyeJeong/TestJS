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

const summarizeUser2 = (username, userage, userhasHobby) => {
    return (
        'Name is ' + username + ', age is ' + userage + ' and the user has hobbies: ' + userhasHobby
    );
}

console.log(summarizeUser2(name, age, hasHobbies));   // Name is MAX, age is 30 and the user has hobbies: true

const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

const addOne = x => x+1;
console.log(addOne(1)); // 2

const addRandom = () => Math.random() + Math.random();
console.log(addRandom());
