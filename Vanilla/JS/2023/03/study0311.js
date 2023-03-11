//Number
//표준 빌트인 객체(standard built-in object)인 Number는 원시 타입인 숫자를 타룰 때 유용한 프로퍼티와 메서드를 제공함

const numObj_1 = new Number();
console.log(numObj_1); // [Number: 0]

const numObj_2 = new Number(10);
console.log(numObj_2); // [Number: 10]

const numObj_3 = new Number('10');
console.log(numObj_3); // [Number: 10]

const numObj_4 = new Number('10.53');
console.log(numObj_4); // [Number: 10.53]

const numObj_5 = new Number('hello');
console.log(numObj_5); // [Number: NaN]

//new 연산자를 사용하지 않고 Number 생성자 함수를 호출하면 Number 인스턴스가 아닌 숫자를 반환함
//이를 이용하여 명시적으로 타입을 변환하기도 함

// 문자열 타입 => 숫자 타입
console.log(Number('0')); // 0
console.log(Number('10')); // 10
console.log(Number('-10')); // -10
console.log(Number('10.53')); // 10.53
console.log(Number('hello')); // NaN

// 불리언 타입 => 숫자 타입
console.log(`true : ${Number(true)}`); // 1
console.log(`false : ${Number(false)}`); // 0

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('')); // 0
console.log(Number(' ')); // 0


//Number 프로퍼티

//Number.EPSILON
console.log(`Number.EPSILON : ${Number.EPSILON}`); // 2.220446049250313e-16
//1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같음
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004
console.log(`0.1 + 0.2 == 0.3 : ${0.1 + 0.2 == 0.3}`); // false

//Number.EPSILON은 부동 소수점으로 인해 발생하는 오차를 해결하기 위해 사용
function isEqual_6(a, b){
    // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작거나 같으면 같은 값으로 간주
    return Math.abs(a - b) <= Number.EPSILON;
}

console.log(isEqual_6(0.1 + 0.2, 0.3)); // true


//Number.MAX_VALUE
//자바스크립트에서 표현할수 있는 가장 큰 양수 값이다. Number.MAX_VALUE보다 큰 값은 Infinity이다.
console.log(`Number.MAX_VALUE : ${Number.MAX_VALUE}`); // 1.7976931348623157e+308
console.log(`Number.MAX_VALUE + 1 : ${Number.MAX_VALUE + 1}`); // Infinity
console.log(`Infinity > Number.MAX_VALUE : ${Infinity > Number.MAX_VALUE}`); // true

//Number.MIN_VALUE
//자바스크립트에서 표현할 수 있는 가장 작은 양수 값이다. Number.MIN_VALUE보다 작은 값은 0이다.
console.log(`Number.MIN_VALUE : ${Number.MIN_VALUE}`); // 5e-324
console.log(`Number.MIN_VALUE - 1 : ${Number.MIN_VALUE - 1}`); // 0
console.log(`0 < Number.MIN_VALUE : ${0 < Number.MIN_VALUE}`); // true

//Number.MAX_SAFE_INTEGER
//자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값이다
console.log(`Number.MAX_SAFE_INTEGER : ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991

//Number.MIN_SAFE_INTEGER
//자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값이다
console.log(`Number.MIN_SAFE_INTEGER : ${Number.MIN_SAFE_INTEGER}`); // -9007199254740991

//Number.POSITIVE_INFINITY
//양의 무한대를 나타내는 숫자값 Infinity와 같음
console.log(`Number.POSITIVE_INFINITY : ${Number.POSITIVE_INFINITY}`); // Infinity
console.log(`Number.POSITIVE_INFINITY === Infinity : ${Number.POSITIVE_INFINITY === Infinity}`); // true

//Number.NEGATIVE_INFINITY
//음의 무한대를 나타내는 숫자값 -Infinity와 같음
console.log(`Number.NEGATIVE_INFINITY : ${Number.NEGATIVE_INFINITY}`); // -Infinity
console.log(`Number.NEGATIVE_INFINITY === -Infinity : ${Number.NEGATIVE_INFINITY === -Infinity}`); // true
console.log(`Number.NEGATIVE_INFINITY === Infinity : ${Number.NEGATIVE_INFINITY === Infinity}`); // false

//Number.NaN
//숫자가 아님을 나타내는 값 NaN과 같음
console.log(`Number.NaN : ${Number.NaN}`); // NaN
console.log(`Number.NaN === NaN : ${Number.NaN === NaN}`); // false
console.log(`Number.NaN === Number.NaN : ${Number.NaN === Number.NaN}`); // false
// console.log(`Number.NaN === window.NaN `); // false

