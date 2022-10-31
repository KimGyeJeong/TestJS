console.log('Hello World');

const candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy, status : {count}} = candyMachine;

console.log(getCandy);  //[Function: getCandy]

console.log(count); //5

let testCandy = candyMachine.getCandy();
console.log(testCandy); //4

let getCandy2 = candyMachine.getCandy;
let count2 = candyMachine.status.count;

console.log(getCandy2); //[Function: getCandy]
console.log(count2); //4


console.log('hello world');