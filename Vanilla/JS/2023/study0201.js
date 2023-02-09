// length 프로퍼티와 희소 배열
/*
length 프로퍼티는 요소의 개수, 즉 배열의 길이를 나타내는 0 이상의 정수를 값으로 갖음
length 프로퍼티의 값은 빈 배열일 경우 0이며, 빈 배열이 아닐 경우 가장 큰 인데그에 1을 더한 것과 같음
 */

console.log([].length); // 0
console.log([1, 2, 3].length); // 3

console.log('-------------------------');

const arr_1 = [1, 2, 3];

console.log(arr_1.length); // 3
// 요소 추가

arr_1.push(4);
//요소를 추가하면 length 프로퍼티의 값이 자동 갱신됨
arr_1.forEach((e) => console.log(e)); // 1 2 3 4
console.log(arr_1.length); // 4
// 요소 삭제

arr_1.pop();
arr_1.forEach((e)=> console.log(e)); // 1 2 3
console.log(arr_1.length); // 3

console.log('-------------------------');

//length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어듬
const arr_2 = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
arr_2.length = 3;

// 배열의 길이가 5에서 3으로 줄어듬
console.log(arr_2); // [1, 2, 3]

//length 프로퍼티 값보다 큰 숫자 값을 할당 하는 경우,
//length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않음
const arr_3 = [1];

// 현재 length 프로퍼티 값인 1보다 큰 숫자 값 3을 length 프로퍼티에 할당
arr_3.length = 3;

// length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않음
console.log(arr_3.length); // 3
console.log(arr_3); // [ 1, <2 empty items> ]   arr[1], arr[2]는 값이 존재하지 않음.

/*
현재 length 프로퍼티 값보다 큰 숫자 값을 length 프로퍼티에 할당하는 경우 length 프로퍼티 값은 성공적으로 변경되지만 실제 배열에는 아무런 변함이 없음.
값 없이 비어있는 요소를 위해 메모리 공간을 확보하지 않으며 빈 요소를 생성하지도 않음
 */
console.log(Object.getOwnPropertyDescriptors(arr_3));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
 */

//배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열을 희소 배열이라 함.
// 희소 배열
const sparse_1 = [,2, , 4];

// 희소 배열의 length 프로퍼티 값은 요소의 개수와 일치하지 않음
console.log(sparse_1.length); // 4
console.log(sparse_1); // [ <2 empty items>, 2, <1 empty item>, 4 ]

// 배열 sparse_1에는 인덱스가 0, 2인 요소가 존재하지 않음
console.log(Object.getOwnPropertyDescriptors(sparse_1));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
 */

//희소 배열은 length 와 배열 요소의 개수가 일치하지 않음
//희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 큼.
//배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선임


// 배열 생성
//배열 리터럴. 요소를 쉼표로 구분하여 대괄호로 묶음. 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재
const arr_4 = [1, 2, 3];
console.log(arr_4.length); // 3
console.log(arr_4); // [ 1, 2, 3 ]

const arr_5=[];
console.log(arr_5.length); // 0
console.log(arr_5); // []

const arr_6 = [1,,3];
console.log(arr_6.length); // 3
console.log(arr_6); // [ 1, <1 empty item>, 3 ]
console.log(arr_6[1]); // undefined
//arr_6[1]이 undefined인 이유는 arr_6에 프로퍼티 키가 '1'인 프로퍼티가 존재하지 않기 때문
