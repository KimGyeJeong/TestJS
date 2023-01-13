//클래스
class Person {
    //생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
        }

}

const testPerson = new Person('Kim');

console.log(testPerson);    //Person { name: 'Kim' }
console.log(testPerson.name);   //Kim

//생성자함수
function Person_f(name) {
    this.name = name;
    console.log('hello',name)
}

console.log(Person_f('function_name')); // undefined

console.log('------------------');

//클래스 명시적으로 원시값을 반환
class Person_return{
    constructor(name){
        this.name = name;

        // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시됨
        return{};
    }

}

const me_return = new Person_return('Kim');
console.log(me_return); //{}

console.log('------------------');

class Person_return2{
    constructor(name){
        this.name = name;

        // 명시적으로 원시값을 반환하면 암묵적인 this 반환이 무시됨
        return 100;
    }
}

const me_return2 = new Person_return2('Kim');
console.log(me_return2);    //Person { name: 'Kim' }

//  이처럼 constructor 내부에서 명시적으로 this가 아닌 다른값을 반환하는 것은 클래스의 기본 동작을 훼손함.
//  따라서 constructor 내부에서는 this를 반환하거나 아무것도 반환하지 않아야 함.

console.log('------------------');
/////////////////////////////////////////
//프로토타입 메서드

// 생성자 함수
function Person_proto(name){
    this.name = name;
}

// 프로토타입 메서드
Person_proto.prototype.sayHi = function(){
    console.log(`Hi! My name is ${this.name}`);
};

const me_proto = new Person_proto('Kim');
me_proto.sayHi();   // Hi! My name is Kim

// 클래스 몸체에서 정의한 메서드는 생성한 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로파티에
// 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 됨

class Person_proto2 {
    constructor(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

const me_proto2 = new Person_proto2('Kim2');
me_proto2.sayHi();  // Hi! My name is Kim2

// 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 됨.

///////////////////////////////////
console.log('------------------');
//////////////////////////////////

// 정적 메서드
//  정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드를 말함

//  생성자 함수의 경우 정적 메서드를 생성하기 위해서는 다음과 같이 명시적으로 생성자 함수에 메서드를 추가해야 함
// 생성자 함수
function Person_static(name) {
    this.name = name;
}
// 정적 메서드
Person_static.sayHi = function () {
    console.log('Hi!');
}

Person_static.sayHi();  // Hi!

// 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스 메서드)가 됨
class Person_static2 {
    // 생성자
    constructor(name) {
        this.name = name;
    }

    static sayHi() {
        console.log('Hi!');
    }
}