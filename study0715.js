// function a() {
//     let temp = 2;
//     return temp + 3;
// }
// console.log(a() + 4);   //9

// console.dir(document);
// document.body.innerHTML = "Hello, World";

//0715 start

//#1

/*
//this 바인딩은 함수 호출 방식에 따라 동적으로 결정됨
const foo = function () {
    console.dir(this);
};

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킴

foo();  //window
console.log(foo()); //window + undefined 


// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킴                    

const obj = { foo };
obj.foo();  //Object --> foo: ƒ ()
console.log(obj.foo()); //object --> foo: ƒ () + undefined

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this 는 생성자 함수가 생성한 인스턴스를 가리킴
new foo();  //foo

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정됨
const bar = { name: 'bar' };
foo.call(bar);      //object
foo.apply(bar);     //object
foo.bind(bar)();    //object
*/

//#2
/*
//일반 함수 호출
var y = 3;
function foo() {
    let x = 1;
    console.log("foo's this : ", this);         //window
    console.log(this.x);                        //undefined
    console.log(y);         //3
    console.log(this.y);    //3

    function bar() {
        console.log("bar's this : ", this);     //window
        console.log(this.x);                    //undefined
    }
    bar();
}
foo();

//일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 됨
*/

//#2.1
/*
// this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로
// 객체를 생성하지 않는 일반 함수에서 this는 의미가 없음.
// 따라서 strict mode 가 적용된 일반 함수 내부의 this에는 undefined가 바인딩됨
function foo() {
    'use strict';

    console.log("foo's this : ", this);         //undefined

    function bar() {
        console.log("bar's this : ", this);     //undefined
    }
    bar();
}
foo();
*/

//#2.2
/*
//메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩됨

var value = 1; //var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티
//const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아님
//const value = 1;
const value2 = 2;

const obj = {
    value: 100,
    value2: 10,
    foo() {
        console.log("foo's this ", this);                       //{value: 100, value2: 10, foo: ƒ}
        console.log("foo's this.value : ", this.value);         //100
        console.log("foo's this.value2 : ", this.value2);       //10

        function bar() {
            console.log("bar's this ", this);                   //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
            console.log("bar's this.value : ", this.value);     //1
            console.log("bar's this.value2 : ", this.value2);   //undefined
        }

        //메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 됨
        bar();
    }
};

obj.foo();

*/

//#2.3
/*
//콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩 됨
// 어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩 됨

var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this : ", this);     //{value: 100, foo: ƒ}
        //콜백 함수 내부의 this 에는 전역 객체가 바인딩 됨
        setTimeout(function () {
            console.log("callback's this : ", this);    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
            console.log("callback's this.value", this.value);   //1
        }, 100)
    }
};

obj.foo();

//일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this 에는 전역 객체(window)가 바인딩 됨
*/

// function test() {
//     console.log(this.a);
// }

// test(); //undefined --> a에 값이 선언되지 않았음...?

// var obj = {
//     a: 20,
//     func1: test,
//     func2: function () {
//         console.log(this.a);
//     }
// };

// obj.func1();    //20
// obj.func2();    //20

//-------------------------------------
// const test = {
//     prop: 42,
//     func: function () {
//         return this.prop;
//     },
// };

// console.log(test.func());   //42
//-------------------------------------
// var value = 1;

// const obj = {
//     value: 1000,
//     foo() {
//         const that = this;
//         console.log(this);          //{value: 1000, foo: ƒ}
//         console.log(this.value);    //1000

//         setTimeout(function () {
//             console.log(that.value);    //1000
//             console.log(that);      //{value: 1000, foo: ƒ}
//         }, 100);
//     }
// };

// obj.foo();
//-------------------------------------
//메서드 호출
// 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩 됨.
// 주의할 것은 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩 되는 것.
// const person = {
//     name: 'kim',
//     getname() {
//         return this.name;
//     }
// };

// console.log(person.getname());  //kim
// console.log(person.name);       //kim

//getname 메서드는 person 객체의 메서드로 정의 됨. 메서드는 프로퍼티에 바인딩 된 함수
// --> person 객체의 getname 프로퍼티가 가리키는 함수 객체는 person객체에 포함된 것이 아니라
// 독립적으로 존재하는 별도의 객체. getname 프로퍼티가 함수 객체를 가리키고 있을 뿐임
// 따라서 getname 프로퍼티가 가리키는 함수 객체, 즉 getname 메서드는 다른 객체의
// 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있고 일반 변수에 할당하여
// 일반 함수로 호출 될 수 있음

// const anotherperson = {
//     name: 'lee'
// };

// //getname메서드를 anotherperson객체의 메서드로 할당
// anotherperson.getname = person.getname;

// console.log(anotherperson.name);    //lee
// //getname 메서드를 호출한 객체는 anotherperson 임
// console.log(anotherperson.getname());   //lee

// //getname 메서드를 변수에 할당
// const getname = person.getname;

// //getname 메서드를 일반 함수로 호출 --> window 객체 값 들고옴
// console.log(getname()); // ''

// //위에 실행후 var,let name 추가해서 실행하면
// var name = 'park';  //let name = 'park'
// console.log(getname()); // park 출력

//-------------------------------------

// function person(name) {
//     this.name = name;
// }
// person.prototype.getname = function () {
//     return this.name;
// };

// const me = new person('lee');

// console.log(me.getname());  // 1. lee

// person.prototype.name = 'kim';
// console.log(me.getname());  // lee

// console.log(person.prototype.getname());    // 2. kim
// console.log(me.prototype);  //undefined
// console.log(me.prototype.getname());  //Uncaught TypeError: Cannot read properties of undefined (reading 'getname')

//-------------------------------------

//생성자 함수
// 생성자 함수 내부의 this에는 생성자 함수가 (미래에)생성할 인스턴스가 바인딩 됨
function circle(radius) {
    this.radius = radius;
    this.getdiameter = function () {
        return 2 * this.radius;
    };
}

const c1 = new circle(5);
const c2 = new circle(10);

console.log(c1.getdiameter());  //10
console.log(c2.getdiameter());  //20

//생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수
//일반 함수와 동일한 방법으로 생성자 함수를 정의하고
//new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작
// 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라
// 일반 함수로 동작함

//new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않음
// --> 일반적인 함수의 호출
const c3 = circle(15);

//일반 함수로 호출된 circle 에는 반환문이 없으므로 암묵적으로 undefined를 반환
console.log(c3);    //undefined

//일반 함수로 호출된 circle 내부의 this 는 전역 객체를 가리킴
console.log(radius);    //15