// let numbers=[1,2,3,4,5];
let numbers=[1,2,100,-99,1,2,3]
let numbers2=[1,2,100,-99,1,2,3]

for(let i=0;i<numbers.length;i++){
    // numbers[i]*=numbers[i]*2;
    // numbers[i] = numbers[i]*2;
    numbers[i]*=2;
    console.log(numbers[i])
}

console.log(numbers)

console.log('//////////////')
let numbers3 = numbers2.map(numbers2 => numbers2*2)
console.log(numbers2.map(numbers2 => numbers2*2))
console.log('//////////////')
console.log(numbers2)
console.log(numbers3)
