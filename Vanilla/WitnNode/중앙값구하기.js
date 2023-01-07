let arr=[1,2,7,10,11];

// let arr2=[9,-1,0];
let arr2 = [1,-10,3,-23,5]

arr2.sort();
console.log(arr2)
arr2.sort((a,b)=>a-b);
console.log(arr2)

let median_arrnum = arr[Math.floor(arr.length/2)];
console.log(median_arrnum);


///////////////////////////////
let arr3 =
arr2.sort((a,b) => a-b)
.at(Math.floor(arr2.length/2))

console.log(arr3)