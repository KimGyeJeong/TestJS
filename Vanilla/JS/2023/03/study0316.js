//RegExp
/*
정규 표현식 regular expression은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어(format lnaguage)이다.
 */

// 사용자로부터 입력받은 휴대폰 전화번호
const tel_1 = '010-1234-5678';

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다
const regExp_1 = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp_1.test(tel_1));   //true
