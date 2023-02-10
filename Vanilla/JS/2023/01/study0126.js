//클래스 필드 정의 제안을 사용하여 클래스 필드에 화살표 함수를 할등할 수도 있다.

// 나쁜예
class Person_1 {
    // 클래스 필드 정의 제안
    name = 'Kim';
    sayHi = () => {
        console.log(`Hi ${this.name}`);
    }
}

// console.log(Person_1.prototype.sayHi());    // TypeError: Person_1.prototype.sayHi is not a function

const person_1 = new Person_1();
console.log(person_1.sayHi());

//이제 sayHi 클래스 필드에 할당한 화살표 함수 내부에서 this를 참조하면 사우이 스코프의 this 바인딩을 참조한다.
class Person_2{
    constructor() {
        this.name = 'Kim';
        // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당함.
        // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티임
        this.sayHi = () => {
            console.log(`Hi ${this.name}`);
        }
    }
}

console.log('=------------------=');
console.log(Person_2.prototype.sayHi);    // undefined
console.log('=------------------=');
const person_2 = new Person_2();
console.log(person_2.sayHi());  // Hi Kim   undefined 출력

person_2.sayHi();