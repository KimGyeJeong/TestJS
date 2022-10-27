//eval 함수를 통해 사용자로부터 입력받은 콘텐츠(untrusted data)를 실행하는 것은 보안에 매우 취약
//또 eval 함수를 통해 실행되는 코드는 JS 엔진에 의해 최적화가 수행되지 않으므로
// 일반적인 코드 실행에 비해 처리속도가 느림 --> eval 함수는 사용은 금지해야 함

//isFinite
//전달 받은 인수가 정상적인 유한수인지 검사
// 유한수이면 true. 무한수이면 false
//전달 받은 인수의 타입이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사 수행.
// Nan 값인 경우 false 반환

console.log(isFinite(0));       //true

console.log(isFinite(2e64));    //true

console.log(isFinite('10'));    //true

console.log(isFinite(null));    //true  null 은 0

console.log(isFinite(NaN));     //false

//isNaN
//전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환
//전달받은 인수의 타입이 숫자가 아닌 경우 숫자로 타입을 변환한 후 검사를 수행

console.log('isNaN');

//숫자
console.log(isNaN(NaN));        //true
console.log(isNaN(10));         //false

//문자열
console.log(isNaN('string'));   //true
console.log(isNaN('10'));       //false '10' 을 숫자 타입으로 변환
console.log(isNaN('10.1'));     //false '10.1'을 숫자 타입으로 변환
console.log(isNaN(''));         //false 빈공간을 0 으로 받아들임
console.log(isNaN(' '));        //false 위와 같음

//불리안
console.log(isNaN(true));       //false true -> 1
console.log(isNaN(false));      //false false -> 0
console.log(isNaN(null));       //false null -> 0

//undefined
console.log(isNaN(undefined));  //true undefined -> nan

//객체
console.log(isNaN({}));         //true {} -> nan

//date
console.log(isNaN(new Date())); //false new Date --> Number
console.log(isNaN(new Date().toString()));  //true  String -> nan

//parseFloat
//전달받은 문자열 인수를 부동 소수점 숫자(floating point number). 즉 실수로 해석(parsing)하여 반환

//문자열을 실수로 해석하여 반환
console.log(parseFloat('3.14'));    //3.14
console.log(parseFloat('10'));      //10
console.log(parseFloat('12.00'));      //12
console.log(parseFloat('13.20'));      //13.2

//공백으로 구분된 문자열은 첫 번째 문자열만 변환
console.log(parseFloat('1 2 3'));       //1
console.log(parseFloat('40 years'));    //40

//첫번째 문자열을 숫자로 변환할 수 없으면 NaN을 반환
console.log(parseFloat('he is 10'));    //NaN

//앞뒤 공백은 무시
console.log(parseFloat(' 40 '));        //40

//parseInt
//전달받은 문자열 인수를 정수(integer)로 해석(parsing)하여 반환

//문자열을 정수로 해석하여 반환
console.log(parseInt('10'));        //10
console.log(parseInt('20.2'));      //20

//전달받은 인수가 문자열이 아니면 문자열로 변환한 다음, 정수로 해석하여 반환
console.log(parseInt(300));         //300
console.log(parseInt(10.2));        //10

//10을 10진수로 해석 하고 그 결과를 10진수 정수로 반환
console.log(parseInt('10'));        //10

//10을 2진수로 해석. 그 결과 10진수 정수로 반환
console.log(parseInt('10', 2));     //2

//8진수로 해석
console.log(parseInt('10', 8));     //8

//16진수로 해석
console.log(parseInt('10', 16));    //16

//추가 예시
const x = 15;
let y = 0;

y = x.toString(2);
console.log(y); //1111
y = parseInt(x.toString(2), 2);
console.log(y); //15