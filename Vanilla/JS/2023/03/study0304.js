//Array.prototype.some
//some 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출함.
//이때 some 메서드는 콜백 함수의 반환값이 단 한번이라도 참이면 true, 모두 거짓이면 false 를 반환함

// 배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
console.log([1, 2, 3, 4, 5].some((v) => v > 10)); // false
console.log([1, 2, 3, 4, 5, 11].some((v) => v > 10)); // true

// 배열의 요소 중 'banana'가 존재하는지 확인
console.log(['apple', 'orange', 'melon'].some((v) => v === 'banana')); // false
console.log(['apple', 'banana', 'melon'].some((v) => v === 'banana')); // true

// some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환함
console.log([].some((v) => v > 10)); // false

//some 메서드의 두 번째 인수로 some 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있음.


//Array.prototype.every
/*
every 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출함.
이때 콜백 함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false 를 반환함
 */

// 배열의 모든 요소가 3보다 큰지 확인
console.log([4, 5, 6, 7].every(v => v > 3)); // true
console.log([4, 5, 6, 7].every(v => v > 4)); // false


//Array.prototype.find
/*
ES6에서ㅓ 도입된 find 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환함.
콜백 함수의 반환값이 true인 요소가 존재하지 않는다면 undefined를 반환함
 */
const users_1 = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'},
    {id: 3, name: 'Park'},
    {id: 2, name: 'Choi'}
]

// id가 2인 첫 번째 요소를 반환함. find 메서드는 배열이 아니라 요소를 반환함.
console.log(users_1.find(user => user.id === 2)); // {id: 2, name: 'Kim'}