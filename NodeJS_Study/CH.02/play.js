const person  = {
    name : 'MAX',
    age : 29,
    greet : () =>
    {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);

person.greet(); // Hi, I am undefined

const person2 = {
    name : 'MIN',
    age : 30,
    greet : function(){
        console.log('Hi, I am ' + this.name);
    }
};
person2.greet(); // Hi, I am MIN

const person3 = {
    name : 'MAX2',
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};
person3.greet(); // Hi, I am MAX2


const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map(hobby =>
     'Hobby : '+ hobby
));
console.log(hobbies)

const copiedArray = hobbies.slice();
console.log(`copiedArray : ${copiedArray}`);

const copiedArray2 = [hobbies];
console.log(`copiedArray2 : ${copiedArray2}`);

console.log(hobbies == copiedArray2); // false
console.log(hobbies === copiedArray2); // false

const copiedArray3 = [...hobbies];
console.log(`copiedArray3 : ${copiedArray3}`);
console.log(hobbies == copiedArray3); // false
console.log(hobbies === copiedArray3); // false

const toArray = (arg1, arg2, arg3) => [arg1, arg2, arg3];
console.log(toArray(1,2,3));

const toArray2 = (...args) => args;
console.log(toArray2(1,2,3));

