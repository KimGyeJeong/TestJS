//RegExp 메서드
const target = 'IS this all there is?';

//RegExp.prototype,exec
//exec메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 비열로 반환함. 매칭결과가 없는 경우 null을 반환함.
const target_1 = 'IS this all there is?';
const regExp_1 = /is/;

console.log(regExp_1.exec(target_1));
//["is", index: 5, input: "IS this all there is?", groups: undefined]

//RegExp.prototype.test
//test메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 boolean값으로 반환함
const target_2 = 'IS this all there is?';
const regExp_2 = /is/;

console.log(regExp_2.test(target_2));   //true

//String.prototype.match
//대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환함
const target_3 = 'IS this all there is?';
const regExp_3 = /is/;

console.log(target_3.match(regExp_3));
//["is", index: 5, input: "IS this all there is?", groups: undefined]

const regExp_3_1 = /is/g;
console.log(target_3.match(regExp_3_1));    //["is", "is"]

const regExp_3_2 = /is/gi;
console.log(target_3.match(regExp_3_2));    //["IS", "is", "is"]

//플래그
//패턴과 함께 정규 표현식을 구성하는 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용함.
/*
i : ignore case, 대소문자를 구별하지 않고 패턴을 검색함
g : global, 대산 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색함
m : multiline, 문자열의 행이 바뀌더라도 패턴 검색을 계속함

플래그는 옵션이므로 선ㅊ택적으로 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수도 있음
어떠한 플래그를 사용하지 ㅇ낳은 경우 대소문자를 구별해서 패턴을 검색함
문자열에 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번째 매칭한 대상만 검색하고 종료함
 */

// target 문자열에서 is를 문자열을 대소문자를 구별하여 한 번만 검색함
console.log(target.match(/is/));    //["is", index: 5, input: "IS this all there is?", groups: undefined]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색함
console.log(target.match(/is/i));   //["IS", index: 0, input: "IS this all there is?", groups: undefined]
console.log(target.match(/is/i).index);  //0

// target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색함
console.log(target.match(/is/g));   //["is", "is"]

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색함
console.log(target.match(/is/gi));  //["IS", "is", "is"]



//패턴
/*
정규 표현식의 패턴은 문자열의 일정한 규칙을 표현하기 위해 사용하며, 정규 표현식의 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용함
패턴은 /로 열고 닫으며 문자열의 따옴표는 생략함, 따옴표를 포함하면 따옴표까지도 패턴에 포함되어 검색됨.
 */

//문자열 검색
//검색 대상 문자열과 플래그를 생략한 정규 표현식의 매칭 결과를 구하면 대소문자를 구별하여 정규 표현식과 매치한 첫 번째 결과만 반환함

// 'is' 문자열과 매치하는 패턴, 플래그가 생략되었으므로 대소문자를 구별함
const regExp_4 = /is/;

// target과 정규 표현식이 매치하는지 테스트함
console.log(regExp_4.test(target)); //true

// target과 정규 표혀식의 매칭 결과를 구함
console.log(target.match(regExp_4));   //["is", index: 5, input: "IS this all there is?", groups: undefined]

//대소문자를 구별하지 않고 검색하려면 플래그i를 사용함

// 'is' 문자열과 매치하는 패턴, 플래그 i를 추가하면 대소문자를 구별하지 않음
const regExp_5 = /is/i;
console.log(regExp_5.test(target)); //true
console.log(target.match(regExp_5));   //["IS", index: 0, input: "IS this all there is?", groups: undefined]

//검색 대상 문자열 내에서 패턴과 매치하는 모든 문자열을 전역 검색하려면 플래그g를 사용함

// 'is'문자열과 매치하는 패턴, 플래그 g를 추가하면 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색함
const regExp_6 = /is/ig;
console.log(regExp_6.test(target)); //true
console.log(target.match(regExp_6));   //["IS", "is", "is"]


//임의의 문자열 검색
// .은 임의의 문자 한개를 의미함. 문자의 내용은 무엇이든 상관없음

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색함
const regExp_7 = /.../g;
console.log(target.match(regExp_7));   //["IS ", "thi", "s a", "ll ", "the", "re ", "is?"]
console.log(regExp_7.test(target));    //true


//반복 검색
// [m,n]은 앞서 나온 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미함. 콤마 뒤에 공백이 있으면 정상 동작하지 않으므로 주의해야 함
const target2 = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색함
const regExp_8 = /A{1,2}/g;
console.log(target2.match(regExp_8));  //["A", "AA", "A", "A"]
const regExp_8_1 = /A{1,}/g;
console.log(target2.match(regExp_8_1));  //["A", "AA", "A", "AAA"]
const regExp_8_2 = /A{1,3}/g;
console.log(target2.match(regExp_8_2));  //["A", "AA", "A", "A", "AAA"]

// {n}은 앞선 패턴이 n번 반복되는 문자열을의미함. 즉 {n}은 {n,n}과 동일함
const regExp_9 = /A{2}/g;
console.log(target2.match(regExp_9));  //["AA", "AA"]

// {n,}은 앞선 패턴이 최소n번 이상 반복되는 문자열을 의미함
const regExp_10 = /A{2,}/g;
console.log(target2.match(regExp_10)); //["AA", "AAA"]

//+는 앞선 패턴이 최소 한번 이상 반복되는 문자열을 의미함. 즉, +는{1,}과 같음
// 'A'가 최소 한번 이상 반복되는 문자열을 전역 검색함
const regExp_11 = /A+/g;
console.log(target2.match(regExp_11)); //["A", "AA", "A", "AAA"]

// ?는 앞선 패턴이 최대 한번(0번 포함)이상 반복되는 문자열을 의미함. 즉, ?는 {0,1}과 동일함
const target3 = 'color colour';

// 'colo' 다음 'u'가 최대 한번(0번 포함) 이상 반복되고 'r'이 이어지는 문자열 'color', 'colour'을 전역 검색함
const regExp_12 = /colou?r/g;
console.log(target3.match(regExp_12)); //["color", "colour"]


//OR 검색
// |는 or의 의미를 갖음

const target4 = 'A AA B BB Aa Bb';

// 'A' 또는 'B'를 전역 검색함
const regExp_13 = /A|B/g;
console.log(target4.match(regExp_13)); //["A", "A", "A", "B", "B", "B", "A", "B"]

//분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용함

// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색함
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regExp_14 = /A+|B+/g;
console.log(target4.match(regExp_14)); //["A", "AA", "B", "BB", "A", "B"]

// 범위를 지정하려면 [] 내에 ~를 사용함.

// 'A' ~ 'Z'가 한번 이상 반복되는 문자열을 전역 검색함
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ... ~또는 'Z', 'ZZ', 'ZZZ', ///
const regExp_15 = /[A-Z]+/g;
console.log(target4.match(regExp_15)); //["A", "AA", "B", "BB", "A", "B"]

// 대소문자 구별하지 않기
const regExp_16 = /[A-Za-z]+/g;
console.log(target4.match(regExp_16)); //["A", "AA", "B", "BB", "A", "B", "Aa", "Bb"]

//숫자를 검색하는 방법
const target5 = 'AA BB 12 34 56,789';
// '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검색함
const regExp_17 = /[0-9]+/g;
console.log(target5.match(regExp_17)); //["12", "34", "56", "789"]

// 쉼표를 패턴에 표함시키기
// '0' ~ '9' 또는 ',' 가 한번 이상 반복되는 문자열을 전역 검색함
const regExp_18 = /[0-9,]+/g;
console.log(target5.match(regExp_18)); //["12", "34", "56,789"]
const regExp_18_1 = /[^0-9,]+/g;
console.log(target5.match(regExp_18_1)); //["AA BB ", " ", ","]

// 패턴을 간단히 표현하기
// \d 는 숫자를 의미([0-9]와 동일), \D는 숫자가 아닌 문자를 의미([^0-9]와 동일)
const regExp_19 = /[\d,]+/g;
console.log(target5.match(regExp_19)); //["12", "34", "56,789"]
const regExp_19_1 = /[\D,]+/g;
console.log(target5.match(regExp_19_1)); //["AA BB ", " ", ","]

// \w 는 알파벳, 숫자, 언더스코어를 의미([A-Za-z0-9_]와 동일), \W는 \w의 반대를 의미([A-Za-z0-9_]가 아닌 문자를 의미)
const target6 = 'AA Bb 12 34.567 8,9 _$%^';
console.log(target6.match(/[\w,]+/g)); //["AA", "Bb", "12", "34", "567", "8", "9", "_", "$", "%", "^"]
console.log(target6.match(/[\W,]+/g)); //[" ", " ", " ", ".", " ", ", ", " ", " ", " ", " ", " "]


//NOT 검색
// [...] 내에 ^를 사용하면 NOT을 의미함
console.log(target6.match(/[^A-Za-z,]+/g)); //[" 12 34.567 8,9 _$%^"]


//시작 위치로 검색
//[...] 밖의 ^은 문자열의 시작을 의미함.
const target7 = 'https://www.google.com';
console.log(target7.match(/^https/g)); //["https"]
console.log(/^https/.test(target7)); //true


//끝 위치로 검색
// $는 문자열의 마지막을 의미함
console.log(target7.match(/com$/g)); //["com"]
console.log(/com$/.test(target7)); //true


//자주 사용하는 정규 표현식

//특정 단어로 시작하는지 검사
//대상 문자열이 'https://', 'http://' 로 시작하는지 검사
//[...] 밖의 ^은 문자열의 시작을 의미하고, ?은 앞선 패턴이 최대 한 번 이상 반복되는지를 의미함. 검색 대산 문자열에 앞선 패턴 's'이 있어도 없어도 매치됨
const url = 'https://www.google.com';

// http:// or https:// 로 시작하는지 검사
console.log(/^https?:\/\//.test(url)); //true
console.log(/^http?:\/\//.test(url)); //false

// or 방식 사용
console.log(/^(http|https):\/\//.test(url)); //true
console.log(/^(http|https)?:\/\//.test(url)); //true

//특정 단어로 끝나는지 검사
const fileName = 'index.html';
// 파일명이 html로 끝나는지 확인
console.log(/html$/.test(fileName)); //true

//숫자로만 이루어진 문자열인지 검사
const number = '1234567890';

//숫자로만 이루어진 문자열인지 검사
console.log(/^\d+$/.test(number)); //true

//하나 이상의 공백으로 시작하는지 검사
// \s 는 여러가지 공백문자(스페이스, 탭 등)을 의미함. 즉 \s는 [\t\r\n\v\f]와 동일함
const text = '    Hello World';
// 하나 이상의 공백으로 시작하는지 검사
console.log(/^\s+/.test(text)); //true
console.log(/^[\s]+/.test(text)); //true

//아이디로 사용 가능한지 검사
// 검색 대상 문자열이 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사
// {4,10}은 앞선 패턴(알파벳 대소문자 또는 숫자)이 최소 4번, 최대 10번 반복되는 문자열을 의미함. 즉 4~10자리로 이루어진 알파벳 대소문자 또는 숫자를 의미함

const id = 'abc123';
console.log(/^[A-Za-z0-9]{4,10}$/.test(id)); //true


//메일 주소 형식에 맞는지 검사
const email = 'sample@test.com';
console.log(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(email)); //true

//핸드폰 번호 형식에 맞는지 검사
const phone = '010-1234-5678';
console.log(/^\d{3}-\d{3,4}-\d{4}$/.test(phone)); //true

//특수 문자 포함 여부 검사
//특수 문자는 a-zA-Z0-9가 아닌 문자를 의미함
const text2 = 'abc#123';
console.log(/[^A-Za-z0-9]/.test(text2)); //true
console.log(/[A-Za-z0-9]/.test(text2)); //true

//특수문자 선택적 검사
console.log(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi.test(text2)); //true
//특수문자를 제거함
console.log(text2.replace(/[^A-Za-z0-9]/gi, '')); //abc123
console.log(text2);





//--------------------------------------------------
//String
//원시타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공함
const strObj_1 = new String();
console.log(typeof strObj_1); //object
console.log(strObj_1); //[String: '']

const strObj_2 = new String('abc');
console.log(strObj_2); //[String: 'abc']
console.log(strObj_2.toString()); //abc
console.log(strObj_2.valueOf()); //abc
console.log(strObj_2[0]); //a

//문자열은 원시 값이므로 변경할 수 없음. 하지만 에러가 발생하지는 않음
strObj_2[0] = 'A';
console.log(strObj_2); //[String: 'abc']

let strObj = new String(123);
console.log(strObj); //[String: '123']
strObj = strObj + 456;
console.log(strObj);
strObj = new String(null);
console.log(strObj); //[String: 'null']

//new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 인스턴스가 아닌 문자열을 반환함. 이를 이용하여 명시적으로 타입을 변환하기도 함
// 숫자 타입 => 문자 타입
let temp = String(1);
console.log(temp); //1
console.log(typeof temp); //string

temp = String(1 + 2);
console.log(temp); //3
console.log(typeof temp); //string

temp = String(NaN);
console.log(temp); //NaN
console.log(typeof temp); //string

temp = String(Infinity);
console.log(temp); //Infinity
console.log(typeof temp); //string

// 불리언 타입 => 문자 타입
temp = String(true);
console.log(temp); //true
console.log(typeof temp); //string

temp = String(false);
console.log(temp); //false
console.log(typeof temp); //string

//length 프로퍼티
//문자열의 문자 개수를 반환함
temp = 'Hello';
console.log(temp.length); //5
temp = '안녕하세요';
console.log(temp.length); //5


//String 메서드
/*
배열에는 원본 배열을 직접 변경하는 메서드(mutatoor method)와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드(accessor method)가 있음
String 객체에는 원본 String 래퍼 객체를 직접 변경하는 메서드는 존재하지 않음. 즉 String 객체의 메서드는 언제나 새로운 문자열을 반환함.
문자열은 변경 불가능(immutable)한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용(read only)객체로 제공됨
 */
strObj = new String('Kim');
console.log(Object.getOwnPropertyDescriptors(strObj));
//{ '0': { value: 'K', writable: false, enumerable: true, configurable: false },
//  '1': { value: 'i', writable: false, enumerable: true, configurable: false },
//  '2': { value: 'm', writable: false, enumerable: true, configurable: false },
//  length: { value: 3, writable: false, enumerable: false, configurable: false } }


//String.prototype.indexOf
//인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환함. 검색에 실패하면 -1을 반환함
temp = 'Hello World';
console.log(temp.indexOf('o')); //4
console.log(temp.indexOf('ll')); //2
console.log(temp.indexOf('x')); //-1

// 문자열 temp의 인덱스 3부터 'l'을 검색하여 첫 번째 인덱스를 반환 함
console.log(temp.indexOf('l', 3)); //3

console.log(temp.indexOf('l')); //2
console.log(temp.indexOf('l', temp.indexOf('l') + 1)); //3

// 특정 문자열이 존재하는지 확인할 때 유용하게 사용할 수 있음
if(temp.indexOf('l') !== -1) {
  console.log('l이 존재합니다.');
}

//ES6에서 도입된 String.prototype.includes 메서드를 사용할 수도 있음
if(temp.includes('l')) {
  console.log('l이 존재합니다.');
}


//String.prototype.search
//인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환함. 검색에 실패하면 -1을 반환함
temp = 'Hello World';
// 문자열 temp에서 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환함
console.log(temp.search(/o/)); //4
console.log(temp.search(/x/)); //-1

//String.prototype.includes
temp = 'Hello World';
console.log(temp.includes('o')); //true
console.log(temp.includes('')); //true
console.log(temp.includes('x')); //false
console.log(temp.includes()); //false

// 문자열 temp의 인덱스3부터 'l'을 검색하여 일치하는 문자열이 있는지 확인함
console.log(temp.includes('l', 3)); //true
console.log(temp.includes('l', temp.indexOf('l') + 1)); //true

for(let i = 0; i < temp.length; i++) {
    console.log(temp[i]);
}

[...temp].forEach(e => console.log(e));


//String.prototype.startsWith
//문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true, false로 변환함
temp = 'Hello World';

// 문자열 temp가 'He'로 시작하는지 확인함
console.log(temp.startsWith('He')); //true
console.log(temp.startsWith('he')); //false

// 문자열 temp의 인덱스 5부터 시작하는 문자열이 ' ' 로 시작하는지 확인
console.log(temp.startsWith(' ', 5)); //true

//String.prototype.endsWith
//문자열이 인수로 전달받은 문자열로 끝나는지 확인하여 그 결과를 true, false로 변환함
temp = 'Hello World';

// 문자열 temp가 'ld'로 끝나는지 확인함
console.log(temp.endsWith('ld')); //true
console.log(temp.endsWith('d')); //true
console.log(temp.endsWith('x')); //false

// endsWith 메서드의 2번째 인수로 검색할 문자열의 길이를 전달할 수 있음
// 문자열 temp의 처음
console.log(temp.endsWith('lo', 5)); //true