// console.log('Hello World');
//
// const candyMachine = {
//     status : {
//         name : 'node',
//         count : 5,
//     },
//     getCandy() {
//         this.status.count--;
//         return this.status.count;
//     },
// };
//
// const {getCandy, status : {count}} = candyMachine;
//
// console.log(getCandy);  //[Function: getCandy]
//
// console.log(count); //5
//
// let testCandy = candyMachine.getCandy();
// console.log(testCandy); //4
//
// let getCandy2 = candyMachine.getCandy;
// let count2 = candyMachine.status.count;
//
// console.log(getCandy2); //[Function: getCandy]
// console.log(count2); //4
//
//
// console.log('hello world');
//
// var Human = function (type) {
//     this.type = type || 'human';
// };
// Human.isHuman = function (human) {
//     return human instanceof Human;
// };
// Human.prototype.breathe = function () {
//     alert('h-a-a-a-m');
// };
//
// var Zero = function (type, firstName, lastName) {
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };
// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;
// Zero.prototype.sayName = function () {
//     alert(this.firstName + ' ' + this.lastName);
// }
// var oldZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(oldZero); // true
//
// console.log(oldZero);   //Zero { type: 'human', firstName: 'Zero', lastName: 'Cho' }
// console.log(oldZero.constructor); // [Function: Zero]
//
// // console.log(Human.prototype.breathe()); //ERROR


//1103 Study
const{odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));   //짝수입니다
console.log(checkStringOddOrEven('hello')); //홀수입니다