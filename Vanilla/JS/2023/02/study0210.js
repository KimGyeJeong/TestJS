//Array.isArray
/*
Array.isArray 는 Array 생성자 함수의 정적메서드임.
Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false 반환
 */

//true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(new Array()));

//false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(1));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ __proto__: Array.prototype }));
console.log(Array.isArray({0 : 1, length : 1}));

//Array.prototype.indexOf
/*
indexOf 메서드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환함
*/
// - 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색한 요소의 인덱스를 반환함
// - 원본 배열에 인수로 전달한 요소가 없다면 -1을 반환함
const arr_1 = [1, 2, 2, 3];

// 배열 arr_1에서 욧 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환함
arr_1.indexOf(2); // 1
console.log(arr_1.indexOf(2));
// 배열 arr_1에 요소 4가 없으므로 -1을 반환함
arr_1.indexOf(4); // -1
console.log(arr_1.indexOf(4));
// 두번째 인수는 검색을 시작할 인덱스임. 두 번째 인수를 생략하면 처음부터 검색함
arr_1.indexOf(2, 2); // 2
console.log(arr_1.indexOf(2, 2));

//indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용함
const foods_1 = ['apple', 'banana', 'orange', 'melon'];

// foods 배열에 'orange' 요소가 존재하는지 확인함
if(foods_1.indexOf('orange') === -1){
    // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가함.
    foods_1.push('orange');
}
console.log(foods_1);

//indexOf 메서드 대신 ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.
const foods_2 = ['apple', 'banana', 'orange', 'melon'];

console.log('-----------------');
// foods_2 배열에 'orange' 요소가 존재하는지 확인함
if(!foods_2.includes('orange')){
    // foods_2 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가함.
    foods_2.push('orange');
}

console.log(foods_2);

//Array.prototype.push
//push 메서드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환함.
//push 메서드는 원본 배열을 직접 변경함.
const arr_2 = [1, 2, 3];

// 인수로 전달받은 모든 값을 원본 배열 arr_2의 마지막 요소로 추가하고 변경된 length값을  반환 함
let result_2 = arr_2.push(4, 5);
console.log(result_2); // 5

// push 메서드는 원본 배열을 직접 변경함
console.log(arr_2); // [1, 2, 3, 4, 5]

//push 메서드는 성능 면에서 좋지 않음. 마지막 요소로 추가할 요소가 하나뿐이라면 push메서드를 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가할 수 있음.
//이 방법이 push 메서드 보다 빠름.
const arr_3 = [1, 2, 3];

// arr_3.push(4)과 동일한 처리를 함. 이 방법이 push 메서드보다 빠름
arr_3[arr_3.length] = 4;
console.log(arr_3); // [1, 2, 3, 4]

//push 메서드는 원본 배열을 직접 변경하는 부수 효과가 있음
const arr_4 = [1, 2, 3];
console.log(arr_4); // [1, 2, 3]

// ES6 스프레드 문법
const newArr_4 = [...arr_4, 4, 5];
console.log(newArr_4); // [1, 2, 3, 4, 5]

//Array.prototype.pop
//pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환함.
//원본 배열이 빈 배열이면 undefined를 반환함
//pop 메서드는 원본 배열을 직접 변경함
const arr_5 = [1, 2, 3];

// 원본 배열에서 마지막 요소를 제거하고 제거된 요소를 반환함
let result_5 = arr_5.pop();
console.log(result_5); // 3

// pop메서드는 원본 배열을 직접 변경함
console.log(arr_5); // [1, 2]