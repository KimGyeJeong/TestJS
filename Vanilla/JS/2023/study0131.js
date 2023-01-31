// 배열
//배열(Array)은 여러개의 값을 순차적으로 나열한 자료구조

//예.
const arr_1 = ['apple', 'banana', 'orange'];
/*
배열이 가지고 있는 값을 요소(element)라고 부른다.
자바스크립트의 모든 값을 배열의 요소가 될 수 있음. 원시값, 객체, 함수, 배열 등이 가능 함

배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 인덱스(index)를 가짐
 */
console.log(arr_1[0]);  // apple
console.log(arr_1[1]);  // banana
console.log(arr_1[2]);  // orange

arr_1.forEach((item, index) => {
    console.log(`index: ${index}, value: ${item}`);
});

//배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 가짐
console.log(arr_1.length);  // 3

console.log('--------------------------');
//배열은 인덱스와 length 프로퍼티를 갖기 때문에 for문을 통해 순차적으로 요소에 접근할 수 있음
for (let i = 0; i < arr_1.length; i++) {
    console.log(arr_1[i]);
}

//배열은 객체타입이다. 자바스크립트에서는 배열이라는 타입은 존재하지 않음.
console.log(typeof arr_1);   // object

//배열은 배열 리터럴, Array 생성자 함수, Array.of 메서드, Array.from 메서드를 통해 생성 가능
//배열의 생성자 함수는 Array이며, 배열의 프로토타입 객체는 Array.prototype이다. Array.prototype은 배열을 위한 빌트인 메서드를 제공함
const arr_2 = [1, 2, 3];
console.log(arr_2.constructor === Array);    // true
console.log(Object.getPrototypeOf(arr_2) === Array.prototype);    // true


//배열은 인덱스로 표현되는 값의 순서와 length 프로퍼티를 갖기 때문에 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조 임
for (let i = 0; i < arr_2.length; i++) {
    console.log(arr_2[i]);  // 1 2 3
}

console.log('--------------------------');
console.log('--------------------------');

//자바스크립트 배열은 자료구조의 배열과 다름
/*
자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조를 말하며 이러한 배열을 밀집배열(dense array)이라고 함
 */

// 선형검색을 통해 배열(array)에 특정요소(target)가 존재하는지 확인
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환함
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));    // 2
console.log(linearSearch([1, 2, 3, 4, 5], 7));    // -1

/*
자바스크립트의 배열은 자료구조에서 말하는 일반적인 의미의 배열과 다름.
배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져있지 않을수도 있음. 이러한 배열을 희소배열(sparse array)이라고 함
 */

//자바스크립트의 배열은 엄밀히 말해 일반적 의미의 배열은 아님.
//자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체
console.log(Object.getOwnPropertyDescriptors([1,2,3]));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

//이처럼 JS배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며, length 프로퍼티를 갖는 특수한 객체
//JS배열의 요소는 사실 프로퍼티 값임.
//JS에서 사용할수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있음
const arr_3 = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
];

console.log(arr_3.length);
console.log(typeof arr_3);

arr_3.forEach((item, index)=>{
    console.log(`${index} 번째 타입은 ${typeof item}`);
});

//배열과 일반 객체의 성능을 테스트 해보면 배열이 일반 객체보다 빠르다.
const arr_4 = [];
console.time('Array');
for(let i = 0; i < 100000; i++){
    arr_4[i] = i;
}
console.timeEnd('Array');

const obj = {};
console.time('Object');
for(let i = 0; i < 100000; i++){
    obj[i] = i;
}
console.timeEnd('Object');

//....? 객체가 더 빠름....??
/*
Array: 5.336ms
Object: 3.393ms

Array: 5.934ms
Object: 4.636ms

Array: 6.027ms
Object: 4.215ms
 */