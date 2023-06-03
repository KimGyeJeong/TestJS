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