//Number 메서드

//Number.isFinite
//인수로 전달된 숫자값이 정상적인 유한수. Infinity, -Infinity, NaN이 아닌 경우 true를 반환
console.log(`Number.isFinite(0) : ${Number.isFinite(0)}`); // true
console.log(`Number.isFinite(Number.MAX_VALUE) : ${Number.isFinite(Number.MAX_VALUE)}`); // true
console.log(`Number.isFinite(Number.MIN_VALUE) : ${Number.isFinite(Number.MIN_VALUE)}`); // true

console.log(`Number.isFinite(Infinity) : ${Number.isFinite(Infinity)}`); // false
console.log(`Number.isFinite(-Infinity) : ${Number.isFinite(-Infinity)}`); // false
console.log(`Number.isFinite(NaN) : ${Number.isFinite(NaN)}`); // false

//숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false
// Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않음
console.log(`Number.isFinite('0') : ${Number.isFinite('0')}`); // false
console.log(`Number.isFinite(null) : ${Number.isFinite(null)}`); // false
// isFinite는 인수를 숫자로ㅓ 암묵적 타입변환함. null은 0으로 암묵적 타입 변환함
console.log(`isFinite(null) : ${isFinite(null)}`); // true
console.log(`isFinite('0') : ${isFinite('0')}`); // true


//Number.isInteger
//인수로 전달된 숫자값이 정수Integer인지 검사하여 그 결과를 boolean값으로 반환함.
//검사하기 전에 인수를 숫자로 암묵적 타입 변환하지 않음

// 인수가 정수이면  true를 반환
console.log(`Number.isInteger(0) : ${Number.isInteger(0)}`); // true
console.log(`Number.isInteger(1) : ${Number.isInteger(1)}`); // true
console.log(`Number.isInteger(-100000) : ${Number.isInteger(-100000)}`); // true

// 0.5는 정수가 아님
console.log(`Number.isInteger(0.5) : ${Number.isInteger(0.5)}`); // false

// Number.isInteger는 인수를 숫자로 암묵적 타입 변환하지 않음
console.log(`Number.isInteger('0') : ${Number.isInteger('0')}`); // false

// false(boolean타입)은 숫자로 암묵적 타입 변환하지 않음
console.log(`Number.isInteger(false) : ${Number.isInteger(false)}`); // false

// Infinity/-Infinity는 정수가 아님
console.log(`Number.isInteger(Infinity) : ${Number.isInteger(Infinity)}`); // false
console.log(`Number.isInteger(-Infinity) : ${Number.isInteger(-Infinity)}`); // false


//Number.isNaN
//인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리안으로 반환함
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); // true
console.log(`Number.isNaN(0/0) : ${Number.isNaN(0/0)}`); // true
console.log(`Number.isNaN('NaN') : ${Number.isNaN('NaN')}`); // false
console.log(`Number.isNaN(123) : ${Number.isNaN(123)}`); // false

//Number.isNaN메서드는 빌트인 전역 함수 isNaN과 차이가 있음.
//빌트인 전역 함수isNaN은 전달받은 인수를 숫자로 암묵적 타입 변환하여 검사를 수행하지만 Number.isNaN메서드는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않음
console.log(`isNaN('NaN') : ${isNaN('NaN')}`); // true
console.log(`isNaN(123) : ${isNaN(123)}`); // false
console.log(`Number.isNaN(undefined) : ${Number.isNaN(undefined)}`); // false

//Number.isSafeInteger
//인수로 전달된 숫ㅈ자값이 안전한 정수인지 검사하여 그 결과를 불리안 값으로 변환 함

// 0은 안전한 정수
console.log(`Number.isSafeInteger(0) : ${Number.isSafeInteger(0)}`); // true
// 100000000000은 안전한 정수
console.log(`Number.isSafeInteger(100000000000) : ${Number.isSafeInteger(100000000000)}`); // true

// 100000000000000000000은 안전한 정수가 아님
console.log(`Number.isSafeInteger(100000000000000000000) : ${Number.isSafeInteger(100000000000000000000)}`); // false
// 0.5는 안전한 정수가 아님
console.log(`Number.isSafeInteger(0.5) : ${Number.isSafeInteger(0.5)}`); // false
// '123'은 숫자로 암묵적 타입 변환되지 않음
console.log(`Number.isSafeInteger('123') : ${Number.isSafeInteger('123')}`); // false
console.log(`Number.isSafeInteger(Number('123')) : ${Number.isSafeInteger(Number('123'))}`); // true
// false/true를 숫자로 암묵적 타입 변환하지 않음
console.log(`Number.isSafeInteger(false) : ${Number.isSafeInteger(false)}`); // false
console.log(`Number.isSafeInteger(true) : ${Number.isSafeInteger(true)}`); // false
// Infinity/-Infinity는 숫자가 아님
console.log(`Number.isSafeInteger(Infinity) : ${Number.isSafeInteger(Infinity)}`); // false
console.log(`Number.isSafeInteger(-Infinity) : ${Number.isSafeInteger(-Infinity)}`); // false


//Number.prototype.toExponential
//숫자를 지수 표기법의 문자열로 반환함
console.log(`(123).toExponential() : ${(123).toExponential()}`); // 1.23e+2
console.log(`(123).toExponential(1) : ${(123).toExponential(1)}`); // 1.2e+2
console.log(`(123).toExponential(2) : ${(123).toExponential(2)}`); // 1.23e+2
console.log(`(123).toExponential(3) : ${(123).toExponential(3)}`); // 1.230e+2
console.log(`(123).toExponential(4) : ${(123).toExponential(4)}`); // 1.2300e+2

// console.log(`1234.toExponential() : ${1234.toExponential()}`); // Invalid or unexpected token

/*
자바스크립트엔진은 숫자 뒤의 .을 부동 소수점 숫자의 소수 구분 기호로 해석함.
숫자에 소수점은 하나만 존재하므로 두번째 .은 프로퍼티 접근 연산자로 해석됨.
숫자 리터럴과 함께 메서드를 사용할 경우 혼란을 방지하기 위해 그룹 연산자를 사용할 것을 권장함
 */
console.log(`77.1234.toExponential() : ${77.1234.toExponential()}`); // 7.71234e+1
console.log(`(77).toExponential() : ${(77).toExponential()}`); // 7.7e+1

console.log(`99 .toExponential() : ${99 .toExponential()}`); // 9.9e+1
//숫자 뒤의 . 뒤에 공백이 오면 .을 프로퍼티 접근 연산자로 해석하기 때문


//Number.prototype.toFixed
//숫자를 반올림하여 문자열로 반환함

// 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정됨
console.log(`(12345.6789).toFixed() : ${(12345.6789).toFixed()}`); // 12346
// 소수점 이하 1자릿수 유효, 나머지 반올림
console.log(`(12345.6789).toFixed(1) : ${(12345.6789).toFixed(1)}`); // 12345.7
// 소수점 이하 2자릿수 유효, 나머지 반올림
console.log(`(12345.6789).toFixed(2) : ${(12345.6789).toFixed(2)}`); // 12345.68
// 소수점 이하 3자릿수 유효, 나머지 반올림
console.log(`(12345.6789).toFixed(3) : ${(12345.6789).toFixed(3)}`); // 12345.679


//Number.prototype.toPrecision
//인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환함

// 전체 자릿수 유효. 인수를 생략하면 기본값 0이 지정됨
console.log(`(12345.6789).toPrecision() : ${(12345.6789).toPrecision()}`); // 12345.6789
// 전체 자릿수 1자릿수 유효, 나머지 반올림
console.log(`(12345.6789).toPrecision(1) : ${(12345.6789).toPrecision(1)}`); // 1e+4
// 전체 자릿수 2자릿수 유효, 나머지 반올림
console.log(`(12345.6789).toPrecision(2) : ${(12345.6789).toPrecision(2)}`); // 1.2e+4
// 전체 자릿수 3자릿수 유효, 나머지 반올림
console.log(`(12345.6789).toPrecision(3) : ${(12345.6789).toPrecision(3)}`); // 1.23e+4


//Number.prototype.toString
//숫자를 문자열로 변환하여 반환함

// 인수를 생략하면 10진수 문자열을 반환함
console.log(`(12345).toString() : ${(12345).toString()}`); // 12345
// 2진수 문자열을 반환함
console.log(`(12345).toString(2) : ${(12345).toString(2)}`); // 11000000111001
// 8진수 문자열을 반환함
console.log(`(12345).toString(8) : ${(12345).toString(8)}`); // 30071
// 16진수 문자열을 반환함
console.log(`(12345).toString(16) : ${(12345).toString(16)}`); // 3039
