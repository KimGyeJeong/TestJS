//이터레이션 프로토콜(Iteration protocol)은 순회 가능한(iterable) 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙임
//이터레이션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있음

/*
- 이터러블 프로토콜(iterable protocol)
이터러블 프로토콜을 준수한 객체를 이터러블이라 함.
이터러블은 for ... of 문으로 순회할 수 있으며 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있음

- 이터레이터 프로토콜(iterator protocol)
이터레이터 프로토콜을 준수한 객체를 이터레이터라 함.
 */

const isIterable = v => v!== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열, map, set 등은 이터러블이다
console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable({}));    // false


//이터러블은 for ... of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
const arr_1 = [1,2,3];

// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in arr_1); // true

// 이터러블인 배열은 for ... of 문으로 순회 가능함
for(const a of arr_1) {
    console.log(a); // 1 2 3
}

// 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있음
console.log([...arr_1]); // [1, 2, 3]

// 이터러블인 배열은 배열 디스트럭처럼 할당의 대상으로 사용할 수 있음
const [a, ...rest] = arr_1;
console.log(a); // 1
console.log(a, rest); // 1 [2, 3]