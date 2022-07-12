// console.log('test git');

// console.log('test git2');

// window.parseInt('F', 16);

// console.log(window.parseInt('F', 16));  //15
// console.log(parseInt('F', 16));         //15

var foo = 1;
console.log(foo);           //1
console.log(window.foo);    //1

let foolet = 2;
console.log(foolet);        //2
console.log(window.foolet); //undefined

const fooconst = 3;
console.log(fooconst);          //3
console.log(window.fooconst);   //undefined

//let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아님
// -> window.foo 같이 접근을 할 수가 없음.

//브라우저 환경의 모든 js코드는 하나의 전역 객체 window를 공유함.
//여러개의 script 태그를 통해 js코드를 분리해도 하나의 전역 객체 window를 공유하는것은 변함이 없음
//이는 분리되어 있는 js 코드가 하나의 전역을 공유함

//전역 프로퍼티는 전역 객체의 프로퍼티를 의미. window를 생략하고 참조할 수 있음

//빌트인 전역 함수
// #1.eval

eval('1+2;');       // --> 3
console.log(eval('1+2;'));  //3출력
eval('var x = 5;'); // --> undefined
console.log(eval('var x = 5;'));    //undefined출력
console.log(x); // 5출력

//객체, 함수 리터럴은 반드시 괄호로 둘러싸야함.
const o = eval('({a:1})');
console.log(o); //{a:1} 출력

const f = eval('(function(){return 3;})');
console.log(f); //ƒ (){return 3;} 출력
console.log(f());   //3 출력

console.log(eval('1+1;2+2;'));  //4출력. 마지막 식이 출력.