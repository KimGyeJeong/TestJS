//화살표 함수
// 화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다. 호출 방식은 기존 함수와 동일 함

//예시.
const multiply_1 = (x, y) => x * y;
console.log(multiply_1(4, 10));   //40

//매개변수 선언
// 1. 매개변수가 여러 개인 경우 소괄호()안에 매개변수를 선언함
const arrow_1 = (x, y) => x + y;
console.log(arrow_1(1, 5));  //6

// 2. 매개변수가 한 개인 경우 소괄호()를 생략할 수 있다
const arrow_2 = x => x + 5;
console.log(arrow_2(5));    //10

// 3. 매개변수가 없는 소괄호를 생략할 수 없다
const arrow_3 = () => {
    return 'arrow_3'
};
console.log(arrow_3());     //arrow_3

//함수 몸체 정의
// 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략할 수 있다.
//이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환 됨/
//concise body
const power_1 = x => x ** 2;
console.log(power_1(2)); // 4

//위 표현식은 다음과 동일함
// block body
const power_2 = x => {
    return x ** 2
};
console.log(power_2(2));    // 4

// 함수 몸체를 감싸는 중괄호{}를 생략한 경우 함수 몸체 내부의 문이 표현식이 아닌 문이라면 에러가 발생한다.
// 표현식이 아닌 문은 반환할 수 없기 때문
// const arrow_4 = () => const x = 1;  // SyntaxError: Unexpected token 'const'

const arrow_5 = () => {
    return
    const x = 1;
};
// 따라서 함수 몸체가 하나의 문으로 구성된다 해도 함수 몸체의 문이 표현식이 아닌 문이라면 중괄호를 생략 할 수 없다.
const arrow_6 = () => {
    const x = 1;
}
console.log(arrow_6());     //undefined

// 객체 리터럴을 바나환하는 경우 객체 리터럴을 소괄호 ()로 감싸 주어야 함
const create_1 = (id, content) => ({id, content});
console.log(create_1(1, 'javascript'));

//위의 표현은 다음과 동일함
const create_2 = (id, content) => {
    return {id, content}
};

//객체 리터럴을 소괄호 ()로 감싸지 않으면 객체 리터럴의 중괄호 {}를 함수 몸체를 감싸는 중괄호 {}로 잘못 해석함.
//{id, content}를 함수 몸체 내의 쉼표 연산자문으로 해석함
const create_3 = (id, content) => {
    id, content
};
console.log(create_3(1, 'javascript')); //undefined

// 함수 몸체가 여러 개의 문으로 구성된다면함수 몸체를 감싸는 중괄호 {}를 생략할 수 없다.
//이때 반환값이 있다면 명시적으로 반환해야 함
const sum_1 = (a, b) => {
    const result = a + b;
    return result;
};
console.log(sum_1(4, 5));    //9

// 화살표 함수도 즉시 실행 함수로 사용할 수 있음
const person_1 = (name => ({
    sayHi() {
        return `Hi, my Name is ${name}.`;
    }
}))('Kim');
console.log(person_1);  //{ sayHi: [Function: sayHi] }
console.log(person_1.sayHi());  //Hi, my Name is Kim.

// 화살표 함수도 일급 객체이므로 Array.prototype.map, Array.prototype.filter, Array.prototype.reduce 같은 고차 함수(Higher-Order Function, HOF)에 인수로 전달할 수 있다.
// 이 경우 일반적인 함수 표현식보다 표현이 간결하고 가독성이 좋음
//ES5
[1, 2, 3].map(function (v) {
    return v * 2;
});
//ES6
[1, 2, 3].map(v => v * 2);

//이처럼 화살표 함수는 콜백 함수로서 정의할때 유용함.
// 화살표 함수는 표현만 간략한 것만이 아니다. 화상표 함수는 일반 함수의 기능을 간략화 했으며 this도 편리하게 설계되었음.


//화살표 함수와 일반 함수의 차이
// 1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다
const Foo_1 = () => {
};
//화살표 함수는 생성자 함수로서 호출할 수 없음.
// new Foo_1();    // TypeError: Foo_1 is not a constructor

// - 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않음
const Foo_2 = () => {
};
//화살표 함수는 prototype 프로퍼티가 없음
Foo_2.hasOwnProperty('prototype');  // false
console.log(Foo_2.hasOwnProperty('prototype'));  // false

// 2. 중복된 매개변수 이름을 선언할 수 없음
// - 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않음
function normal_1(a, a) {
    return a + a;
}

console.log(normal_1(1, 2));

// - 단, strict mode에서 중복된 매개변수 이름을 선언하면 에러가 발생함
// 'use strict'
function normal_2(a, a){
    return a+a;
}

console.log(normal_2(2,4)); //ERR

// - 화살표 함수에서도 중복된 매개변수 이름을 선언하면 에러가 발생함
// const arrow_4 = (a,a) => a+a;   // SyntaxError: Duplicate parameter name not allowed in this context

// 3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않음
/*
따라서 화살표 함수 내부에서 this, arguments. super, new.target을 참조하면 스코프 체인을 통해 상위 스코프의 this, arguments, super, new.target을 참조함
만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this, arguments, super, new.target 바인딩이 없으므로 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this, arguments, super, new.target을 참조함
 */

