//String.prototype.charAt
// 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환참

const str_1 = "Hello";

for (let i = 0; i < str_1.length; i++) {
    console.log(str_1.charAt(i));   // H e l l o
}

//인덱스가 문자열의 범위를 벗어난 정수인 경우 빈 문자열을 반환 함
console.log(str_1.charAt(str_1.length)); // ""

//charAt 메서드와 유사한 문자열 메서드는 String.prototype.charCodeAt 과 String.prototype.codePointAt 이 있음


//String.prototype.substring
// 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환함
const str_2 = "Hello World";

// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환함
console.log(str_2.substring(1, 4)); // ell

//두 번째 인수는 생략할 수 있음. 첫 번째 인수로 전달한 인덱스에 위치하는 문자부터 마지막 문자까지 부분 문자열을 반환함
console.log(str_2.substring(1)); // ello World

// 첫 번째 인수가 두 번째 인수보다 큰 경우 두 인수의 값을 교환한 후 부분 문자열을 반환함
console.log(str_2.substring(4, 1)); // ell

// 인수가 0보다 작거나 NaN인 경우 0으로 간주함
console.log(str_2.substring(-1)); // Hello World
console.log(str_2.substring(NaN)); // Hello World

// 인수 > 문자열의 길이(str.length)인 경우 인수는 문자열의 길이(str.length)로 취급됨
console.log(str_2.substring(1, 100)); // ello World
console.log(str_2.substring(100)); // ""

//String.prototype.indexOf 메서드와 함께 사용하면 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열을 취득할 수 있음
// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
console.log(str_2.substring(0, str_2.indexOf(" "))); // Hello
console.log(str_2.substring(0, str_2.indexOf(' '))); // Hello

// 스페이스를 기준으로 뒤에 있는 부분 문자열 취득
console.log(str_2.substring(str_2.indexOf(' ') + 1, str_2.length)); // World
console.log(str_2.substring(str_2.indexOf(' ') + 1)); // World


//String.prototype.slice
//substring과 동일하게 동작. 단, 음수인 인수를 전달할 수 있으며, 음수인 인수를 전달하면 대상 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환함

// substring동작. 0번째부터 5번째 이전 문자까지 잘라내어 반환
console.log(str_2.substring(0, 5)); // Hello
console.log(str_2.slice(0, 5)); // Hello

// 인덱스가 2인 문자부터 마지막 문자까지 잘라내어 반환
console.log(str_2.substring(2)); // llo World
console.log(str_2.slice(2)); // llo World

// slice는 음수 인수를 전달할 수 있음
console.log(str_2.slice(-3)); // rld


//String.prototype.toUpperCase
// 대상 문자열을 모두 대문자로 변환하여 반환함
console.log(str_2.toUpperCase()); // HELLO WORLD

//String.prototype.toLowerCase
// 대상 문자열을 모두 소문자로 변환하여 반환함
console.log(str_2.toLowerCase()); // hello world

//String.prototype.trim
// 대상 문자열의 앞뒤 공백을 제거하여 반환함
const str_3 = " Hello World ";
console.log(str_3); // Hello World
console.log(str_3.trim()); // Hello World

console.log(str_3.trimStart()); // Hello World
console.log(str_3.trimEnd()); // Hello World

//String.prototype.repeat
//인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환함.
//인수로 전달받은 정수가 0이면 빈 문자열을 반환하고, 음수이면 RangeError를 발생시킴. default 0
console.log(str_2.repeat()); // ""
console.log(str_2.repeat(0)); // ""
console.log(str_2.repeat(1)); // Hello World
console.log(str_2.repeat(2)); // Hello WorldHello World
console.log(str_2.repeat(2.5)); // Hello WorldHello World      2.5는 자동으로 2로 변환됨
// console.log(str_2.repeat(-1)); // RangeError: Invalid count value


//String.prototype.replace
//첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환함

// str_2의 문자열 중 'World'를 'Lee'로 치환
console.log(str_2.replace("World", "Lee")); // Hello Lee
console.log(str_2); // Hello World

// 특수한 교체 패턴을 사용할 수 있음. 예를 들어 $&는 검색된 문자열을 의미함.
console.log(str_2.replace("world", "<strong>$&</strong>")); // Hello World

const str_4 = "Hello World World";
// 대소문자를 구별하지 않고 전역 검색
console.log(str_4.replace(/world/gi,"KIM")); // Hello KIM KIM


//String.prototype.split
//첫 번재 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자열을 구분 한 후 분리된 각 문자열로 이루어진 배열을 반환함
//인수로 빈 문자열을 전달하면 각 문자를 모두 분리하고, 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환함
const str_5 = "How are you doing today?";

// 공백으로 구분(단어로 구분)하여 배열로 반환함
console.log(str_5.split(" ")); // ["How", "are", "you", "doing", "today?"]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)를 의미함. 즉 [ \t\r\n\v\f]와 같은 의미임
console.log(str_5.split(/\s/)); // ["How", "are", "you", "doing", "today?"]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리함
console.log(str_5.split("")); // ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", " ", "t", "o", "d", "a", "y", "?"]

// 인수를 생략하면 대산 문자열 전체를 단일 요소로 하는 배열을 반환함
console.log(str_5.split()); // ["How are you doing today?"]

//두 번째 인수로 배열의 길이를 지정할 수 있음
console.log(str_5.split(" ", 3)); // ["How", "are", "you"]
console.log(str_5.split(" ",5)); // ["How", "are", "you", "doing", "today?"]

//split는 배열을 반환하는데, Array.prototype.reverse, Array.prototype.join 메서드와 함께 사용하면 문자열을 역순으로 뒤집을 수 있음
// 인수로 전달받은 문자열을 역순으로 뒤집음
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString(str_5));