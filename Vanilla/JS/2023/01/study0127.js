//super
/*
화살표 함수는 함수 자체의 super 바인딩을 갖지 않음. 따라서 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조함
 */
class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi ${this.name}`;
    }
}

class Derived extends Base {
    // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킴
    sayHi = () => `${super.sayHi()}. how are you doing?`;
}

const derived = new Derived('Kim');
console.log(derived.sayHi()); // Hi Kim. how are you doing?

/*
super는 내부 슬롯 [[HomeObject]]를 갖는 ES6 메서드 내에서만 사용할 수 있는 키워드다.
 sayHi 클래스 필드에 할당한 화살표 함수는 ES6 메서드는 아니지만 함수 자체의 super바인딩을 갖지 않으므로 super를 참조해도 에러가 발생하지않고 constructor의 super 바인딩을 참조함.
 this와 마찬가지로 클래스 필드에 할당한 화살표 함수 내부에서 super를 참조하면 constructor 내부의 super 바인딩을 참조함.
 위 예제의 경우 Derived 클래스의 constructor는 생략되었지만 암묵적으로 constructor가 생성된다.
 */

//arguments
/*
화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않음.
따라서 화살표 함수 내부에서 arguments를 참조하면 this와 마찬가지로 상위 스코프의 arguments를 참조함
 */
(function () {
    const foo = () => console.log('args : ', arguments); // args :  [Arguments] { '0': 1, '1': 2 }
    foo(3, 4);
}(1, 2));

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킴
// 하지만 전역에는 arguments 객체가 존재하지 않음. arguments 객체는 함수 내부에서만 유효함
// const foo = () => console.log(arguments);
// foo(1,2); // ReferenceError: arguments is not defined


//Rest 파라미터
/*
Rest 파라미터(나머지 매개변수)는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다.
Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달 받음
 */
function foo_1(...rest) {
    // 매개변수 rest 는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
    console.log(rest); // [1,2,3,4,5]
}

foo_1(1, 2, 3, 4, 5);

//일반 매개변수와 Rest 파라미터는 함께 사용할 수 있다, 이때 함수에 전달된 인수들은 매개변수와 Rest 파라미터에 순차적으로 할당됨
function foo_2(a, b, ...rest) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest);  // [3,4,5]
}

foo_2(1, 2, 3, 4, 5);

//Rest 파라미터는 이름 그대로 먼저 선언된 매개변수에 할당된 인수를 제외한 나머지 인수들로 구성된 배열이 할당 됨.
//따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 함.
// function foo_3(...rest, a, b){  // SyntaxError: Rest parameter must be last formal parameter
//     console.log(rest);
//     console.log(a);
//     console.log(b);
// }
//
// foo_3(1,2,3,4,5);

//Rest 파라미터는 단 하나만 선언할 수 있음
// function foo_4(...rest, ...rest2) {  // SyntaxError: Rest parameter must be last formal parameter
//     console.log(rest);
//     console.log(rest2);
// }
// foo_4(1,2,3,4,5);

//Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함구 객체의 length 프로퍼티에 영향을 주지 않음
function foo_5(...rest) {
}
console.log(foo_5.length); // 0

function foo_6(a, ...rest) {
}
console.log(foo_6.length); // 1

function foo_7(a, b, ...rest) {
}

console.log(foo_7.length); // 2