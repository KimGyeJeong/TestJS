//심벌과 프로퍼티 은닉
//심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for ... in 문이나 Object.keys, Object.getOwnPropertyNames 메서드로 찾을 수 없음

const obj_1 = {
    // 심벌 값으로 프로퍼티 키를 생성
    [Symbol('mySymbol')]: 1,
    [Symbol('mySymbol2')] : 2
};
for(const key in obj_1){
    console.log(key); // 아무것도 출력되지 않음
}

console.log(Object.keys(obj_1)); // []
console.log(Object.getOwnPropertyNames(obj_1)); // []

// getOwnPropertySymbols 메서드는 인수로 전달한 객체의 심벌 프로퍼티 키를 배열로 반환함
console.log(Object.getOwnPropertySymbols(obj_1)); // [Symbol(mySymbol), Symbol(mySymbol2)]

// getOwnPropertySymbols 메서드로 심벌 값도 찾을 수 있음
let symbolKey1 = Object.getOwnPropertySymbols(obj_1)[0];
console.log(obj_1[symbolKey1]); // 1
symbolKey1 = Object.getOwnPropertySymbols(obj_1)[1];
console.log(obj_1[symbolKey1]); // 2

//심벌과 표준 빌트인 객체 확장
// 표준 빌트인 객체에 사용자 정의 메서드를 직접 추가하여 확장하는 것은 권장하지 않음. 표준 빌트인 객체는 읽기 전용으로 사용하는 것이 좋음
Array.prototype.sum = function(){
    return this.reduce((acc, cur) => acc + cur, 0);
};
console.log([1,2].sum()); // 3

/*
직접 추가한 메서드와 표준 사양으로 추가될 메서드의 이름이 중복될수 있음. 이러한 경우 표준 메서드를 이전에 사용자 정의 메서드를 덮어쓰게됨. 이러한 경우 문제가 됨.
심벌 값으로 프로퍼티 키를 생성하여 표준 빌트인 객체를 확장하면 표준 빌트인 객체의 기존 프로퍼티 키와 충돌하지 않음. 어떤 프로퍼티 키와도 충돌한 위험이 없어 안전하게 표준 빌트인 객체를 확장할 수 있음
 */

// 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전함
Array.prototype[Symbol.for('sum2')] = function(){
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([5,7][Symbol.for('sum2')]()); // 12


//Well-Known Symbol
// 자바스크립트가 기본 제공하는 빌트인 심벌 값을 ECMAScript 사양에서는 Well-known Symbol 이라 부름.

// 1~5 범위의 정수로 이루어진 이터러블
const iterable_1 = {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator](){
        let cur = 1;
        const max = 5;
        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
        return {
            next(){
                return {value: cur++, done: cur > max + 1};
            }
        };
    }
};
for(const num of iterable_1){
    console.log(num); // 1 2 3 4 5
}