const A = require('./globalA');

global.mesaage = 'Hello';

console.log('TEST');
console.log(A); //[Function (anonymous)]
console.log(A());