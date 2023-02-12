//Array.prototype.concat
//concat 메서드는 인수로 전달된 값들(배열 또는 원시값)을 워본 배열의 마지막 요소로 추가한 새로운 배열을 반환함.
//인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가함. 원본 배열은 변경되지 않음

const arr_1 = [1, 2];
const arr_2 = [3, 4];
// 배열 arr_2 를 원본 배열 arr_1의 마지막 요소로 추가한 새로운 배열을 반환함
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가함
let result_1 = arr_1.concat(arr_2);
console.log(result_1); // [1, 2, 3, 4]
console.log(arr_1); // [1, 2]
console.log(arr_2); // [3, 4]

// 숫자를 원본 배열 arr_1의 마지막 요소로 추가한 새로운 배열을 반환함
result_1 = arr_1.concat(3);
console.log(result_1); // [1, 2, 3]

// 배열 arr_2와 숫자를 원본 배열 arr_1의 마지막 요소로 추가한 새로운 배열을 반환함
result_1 = arr_1.concat(arr_2, 3);
console.log(result_1); // [1, 2, 3, 4, 3]
// 원본 배열은 변경되지 않음.
console.log(arr_1); // [1, 2]
console.log(arr_2); // [3, 4]

console.log('--------------------------');

/*
push와 unshift 메서드는 concat 메서드로 대체할 수 있다.
push와 unshift 메서드는 concat와 유사하게 동작함
하지만 push와 unshift 메서드는 원본 배열을 직접 변경하지만 concat 메서드는 원본 배열을 변경하지않고 새로운 배열을 반환함.
push와 unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 하며 concat 메서드를 사용할 경우 반환값을 반드시 변수에 할당받아야 함.
 */

const arr_3 = [3, 4];

// unshift 메서드는 원본 배열을 직접 변경함.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없음
arr_3.unshift(1, 2);
// unshift 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있음
console.log(arr_3); // [1, 2, 3, 4]

console.log('--------------------------');

// push 메서드는 원본 배열을 직접 변경함.
// 따라서 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없음
arr_3.push(5, 6);
// push 메서드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 결과를 확인할 수 있음
console.log(arr_3); // [1, 2, 3, 4, 5, 6]

console.log('--------------------------');

// unshift와 push 메서드는 concat 메서드로 대체할 수 있음
const arr_4 = [3, 4];

// concat 메서드는 원본 배열을 변경하지 않고 새로운 배열을 반환함
// arr_3.unshift(1, 2)를 아래와 같이 대체할 수 있음
let result_4 = [1, 2].concat(arr_4);
console.log(result_4); // [1, 2, 3, 4]

// arr_3.push(5, 6)를 아래와 같이 대체할 수 있음
result_4 = result_4.concat(5, 6);
console.log(result_4); // [1, 2, 3, 4, 5, 6]

// 인수로 전달받은 값이 배열인 경우 push와 unshift 메서드는 배열을 그대로 원본 배열의 마지막/첫 번째 요소로 추가하지만
// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가함
const arr_5 = [3, 4];

// unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가함
arr_5.unshift([1, 2]);
console.log(arr_5); // [[1, 2], 3, 4]
arr_5.push([5, 6]);
console.log(arr_5); // [[1, 2], 3, 4, [5, 6]]

// concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가함
let result_5 = [1, 2].concat(arr_5);
console.log(result_5); // [1, 2, [1, 2], 3, 4, [5, 6]]

result_5 = result_5.concat([5, 6]);
console.log(result_5); // [1, 2, [1, 2], 3, 4, [5, 6], 5, 6]


// concat 메서드는  ES6의 스프레드 문법으로 대체할 수 있음
let result_6 = [1, 2].concat([3, 4]);
console.log(result_6); // [1, 2, 3, 4]
result_6 = [];
console.log(result_6); // []

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있음
result_6 = [...[1, 2], ...[3, 4]];
console.log(result_6); // [1, 2, 3, 4]

result_6 = [];
result_6 = [...[1, 2, 3], [4, 5]];
console.log(result_6); // [1, 2, 3, [4, 5]]
result_6 = [...result_6, ...[6, 7]];
console.log(result_6);

// result_6 = [];
let result_6_1 = [result_6, ...[8, 9]];
console.log(result_6_1); // [ [ 1, 2, 3, [ 4, 5 ], 6, 7 ], 8, 9 ]
// result_6_1 =[];
// result_6_1 = [...result_6, ... [8, 9]];
// console.log(result_6_1); // [ 1, 2, 3, [ 4, 5 ], 6, 7, 8, 9 ]
result_6_1 = [...result_6_1, ...[8, 9]];
console.log(result_6_1); // [ [ 1, 2, 3, [ 4, 5 ], 6, 7 ], 8, 9, 8, 9 ]


//Array.prototype.splice
//push, pop, unshift, shift 메서드는 모두 원본 배열을 직접 변경하는 메서드(mutator method)이며,
//원본 배열의 처음이나 마지막에 요소를 추가하거나 제거함.
//원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice 메서드를 사용함
//splice 메서드는 3개의 매개변수가 있으며 원본 배열을 직접 변경함
/*
- start : 원본 배열의 요소를 제거하기 시작할 인덱스. start만 지정하면 원본 배열의 start부터 모든 요소를 제거함.
          start가 음수인 경우 배열의 끝에서의 인덱스를 나타냄. 만약 start가 -1이면 마지막 요소를 가리키고 -n이면 마지막에서 n번째 요소를 가리킴
- deleteCount : 원본 배열의 요소를 제거하기 시작할 인덱스인 start부터 제거할 요소의 개수.
                deleteCount가 0인 경우 아무런 요소도 제거되지 않음(옵션)
- items : 제거한 위치에 삽입할 요소들의 목록임. 생략할 경우 원본 배열에서 요소들을 제거하기만 함(옵션)
*/

const arr_7 = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입
const result_7 = arr_7.splice(1, 2, 20, 30);

// 제거한 요소가 배열로 반환됨
console.log(result_7); // [2, 3]

// splice 메서드는 원본 배열을 직접 변경함
console.log(arr_7); // [1, 20, 30, 4]

console.log('--------------------------');
const arr_7_1 = [1,2,3,4,5,6,7];
arr_7_1.splice(3,1,30);
console.log(arr_7_1); // [ 1, 2, 3, 30, 5, 6, 7 ]
