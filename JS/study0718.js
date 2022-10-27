// //예제

// function getThisBinding() {
//     return this;
// }

// //this 로 사용할 객체
// const thisArg = { a: 1 };

// console.log(getThisBinding());  //window

// //getThisBindign 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다
// console.log(getThisBinding.apply(thisArg)); //{a: 1}
// console.log(getThisBinding.call(thisArg));  //{a: 1}

// //apply 와 call메서드의 본질적인 기능은 함수를 호출하는 것
// //apply 와 call 메서드는 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩함

// //예제2

// const person = {
//     name: 'Lee',
//     foo(callback) {
//         setTimeout(callback.bind(this, 100));
//     }
// };

// person.foo(function () {
//     console.log(`my name is ${this.name}`); //my name is Lee
// });

//예제3

let fruit = 'apple';

function callbackFunc(callback) {
    let vegetable = 'tomato';
    callback(vegetable);
}
function eat(vegetable) {
    console.log(`fruit : ${fruit} / vegetable : ${vegetable}`);
}
callbackFunc(eat);  //fruit : apple / vegetable : tomato

//정리
//#1. 함수 호출 방식
// a. 일반 함수 호출
// b. 메서드 호출
// c. 생성자 함수 호출
// d. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

//#2. this 바인딩
// a. 전역 객체
// b. 메서드를 호출한 객체
// c. 생성자 함수가 (미래에) 생성할 인스턴스
// d. Function.prototype.apply/call/bind 메서드에 첫번째 인수로 전달한 객체