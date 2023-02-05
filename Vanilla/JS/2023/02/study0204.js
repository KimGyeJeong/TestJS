//Array 생성자 함수
/*
Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있음
Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요함.
 */

// 1. 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성함
const arr_1 = new Array(10);
console.log(arr_1); // [ <10 empty items> ]
console.log(arr_1.length); // 10

// 2. 이때 생성된 배열은 희소 배열임. length 프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않음
console.log(Object.getOwnPropertyDescriptors(arr_1));
// {
//     length: { value: 10, writable: true, enumerable: false, configurable: false }
// }

// 3. 배열은 요소를 최대 2^32 - 1개까지 가질 수 있으므로 length 프로퍼티 값이 2^32 - 1보다 크면 RangeError가 발생함
// 배열은 요소를 최대 4,294,967,295개까지 가질 수 있음
new Array(4294967295);
// new Array(4294967296); // RangeError: Invalid array length
// try{
//     new Array(4294967296);
// }catch (e){
//     console.log(e); // RangeError: Invalid array length
// }

try {
    console.log('실행....');
    (() => {
        new Array(-1);
    })();
}catch (e){
    console.log(e); // RangeError: Invalid array length
}

// 4. 전달된 인수가 없는 경우 빈 배열을 생성함. 즉, 배열 리터럴 []과 같다.
console.log(new Array()); // []

// 5. 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
//전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성함
console.log(new Array(1, 2)); // [ 1, 2 ]
//전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성함
console.log(new Array('1')); // [ '1' ]

// 6. Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도, 즉 일반 함수로서 호출해도 배열을 생성하는 생성자 함수로 동작함.
// 이는 Array 생성자 함수 내부에서 new.target을 확인하기 때문
console.log(Array(1,2,3,4,5,6,7,8,9,10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Array.of
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성함.
console.log(Array.of(1)); // [ 1 ]
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
console.log(Array.of('1')); // [ '1' ]
console.log(Array.of('string')); // [ 'string' ]

// Array.from
// 유사 배열 객체를 변환하여 배열을 생성함
console.log(Array.from({length: 2, 0: 'a', 1: 'b'})); // [ 'a', 'b' ]
// 이터러블을 변환하여 배열을 생성함. 문자열은 이터러블임
console.log(Array.from('abc')); // [ 'a', 'b', 'c' ]


let array_from = Array.from('string');
console.log(array_from); // [ 's', 't', 'r', 'i', 'n', 'g' ]

// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined 요소로 채움.
console.log(Array.from({length: 2})); // [ undefined, undefined ]

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환됨.
console.log(Array.from({length: 2}, (v, i) => i)); // [ 0, 1 ]
console.log(Array.from({length: 5}, (v, i) => i)); // [ 0, 1, 2, 3, 4 ]


// 배열 요소의 참조
const arr_2 = [1, 2, 3];
// 인덱스가 0인 요소를 참조
console.log(arr_2[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr_2[1]); // 2

//존재하지 않는 요소에 접근하면 undefined가 반환됨
const arr_3 = [1, 2, 3];
// 인덱스가 2인 요소를 참조, 배열 arr_3의 요소는 3개이므로 인덱스가 4인 요소가 존재하지않음.
console.log(arr_3[4]); // undefined

// 희소 배열
const arr_4 = [1, , 3];
// 배열 arr_4에는 인덱스가 1인 요소가 존재하지 않음
console.log(Object.getOwnPropertyDescriptors(arr_4));
// {
//     '0': { value: 1, writable: true, enumerable: true, configurable: true },
//     '2': { value: 3, writable: true, enumerable: true, configurable: true },
//     length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

// 존재하지 않는 요소를 참조하면 undefined가반환 됨
console.log(arr_4[1]); // undefined
console.log(arr_4.length); // 3
console.log(arr_4[2]); // 3
console.log(arr_4[3]); // undefined


// 배열 요소의 추가와 갱신
const arr_5 = [0];
// 배열 요소의 추가
arr_5[1] = 1;

console.log(arr_5); // [ 0, 1 ]
console.log(arr_5.length); // 2

arr_5[100] = 100;
console.log(arr_5); // [ 0, 1, <98 empty items>, 100 ]
console.log(arr_5.length); // 101

// 명시적으로 값을 할당하지 않은 요소는 생성하지 않음
console.log(Object.getOwnPropertyDescriptors(arr_5));
// {
//     '0': { value: 0, writable: true, enumerable: true, configurable: true },
//     '1': { value: 1, writable: true, enumerable: true, configurable: true },
//     '100': { value: 100, writable: true, enumerable: true, configurable: true },
//     length: {
//         value: 101,
//             writable: true,
//             enumerable: false,
//             configurable: false
//     }
// }

// 요소값의 갱신
arr_5[1] = 10;
console.log(arr_5); // [ 0, 10, <98 empty items>, 100 ]

const arr_6 = [];
// 배열 요소의 추가
arr_6[0] = 1;
arr_6['1'] = 2;

// 프로퍼티 추가
arr_6['foo'] = 3;
arr_6.bar = 4;
arr_6[1.1] = 5;
arr_6[-1] = 6;

console.log(arr_6); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]
console.log(arr_6.length); // 2