// 정규 표현식의 생성
// 정규 표현식 리터럴은 패턴과 플래그로 구성됨

const target_1 = 'Is this all there is?';

// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않고 검색함
const regexp_1 = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭결과를 boolean값으로 반환함
console.log(regexp_1.test(target_1)); // true

const target_2 = 'Is this all there is?';
// const regexp_2 = new RegExp(/is/i); //ES6
// const regexp_2 = new RegExp(/is/,'i');
const regexp_2 = new RegExp('is','i');

console.log(regexp_2.test(target_2)); // true

const count_3 = (str, char) => (str.match(new RegExp(char, 'g')) ?? []).length;
console.log(count_3('Is this all there is?', 'is')); // 2
const count_4 = (str, char) => (str.match(new RegExp(char, 'gi')) ?? []).length;
console.log(count_4('Is this all there is?', 'is')); // 3
