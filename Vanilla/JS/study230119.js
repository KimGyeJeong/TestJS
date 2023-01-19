// 자바스크립트는 캡슐화를 완전하게 지원하지 않음

class Person_1 {
    constructor(name) {
        this.name = name;   // 인스턴스 프로퍼티는 기본적으로 public함
    }
}

const me_1 = new Person_1('Kim');
console.log(me_1.name); // Kim


//클래스 필드 정의 제안을 사용하더라도 클래스 필드는 기본적으로 public하기 때문에 외부에 그대로 노출됨

class Person_2 {
    name = 'KIM';   // 클래스 필드도 기본적으로 public함
}

const me_2 = new Person_2();
console.log(me_2.name); // KIM


//private 필드의 선수에는 #을 붙여줌.
//private 필드를 참조할 때도 #을 붙어주어야 함
class Person_3 {
    //private 필드 정의
    #name = '';

    constructor(name) {
        //private 필드 참조
        this.#name = name;
    }
}

const me_3 = new Person_3('Private Kim');
//private 필드 #name은 클래스 외부에서 참조할 수 없음.
console.log(me_3.name); // undefined

// private 필드는 클래스 내부에서만 참조할 수 있음
// 클래스 외부에서 private 필드에 직접 접근할수 있는 방법은 없지만
// 접근자 프로퍼티를 통해 간접적으로 접근하는 방법은 유효
class Person_4 {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    // private 필드 #name을 반환하는 접근자 프로퍼티
    get name() {
        return this.#name;
    }
}

const me_4 = new Person_4(' Private KIM');
console.log(me_4.name); // Private KIM

//private 필드는 반드시 클래스 몸체에 정의해야 한다.
// private 필드를 직접 constructor에 정의하면 에러가 발생함
// class Person_5{
//     constructor(name){
//         //constructor에서 private 필드를 정의하면 에러가 발생함
//         this.#name = name;
//     }
// }


//static 필드 정의
class MyMath {
    //static 필드 정의
    static PI = 22 / 7;

    //static private 필드 정의
    static #num = 10;

    //static 메서드
    static increment() {
        return ++MyMath.#num;
    }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 11


// 상속에 의한 클래스 확장
//상속에 의한 클래스 확장은기존 클래스를 상속받아 새로운 클래스를 확장(extends)하여 정의

class Animal_1 {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }

    eat() {
        return 'eat';
    }

    move() {
        return 'move';
    }
}

// 상속을 통해 Animal 클래스를 확장한 Bird클래스
class Bird_1 extends Animal_1 {
    fly() {
        return 'fly';
    }
}
const bird_1 = new Bird_1(1, 2);
console.log(bird_1); // Bird { age: 1, weight: 2 }
console.log(bird_1 instanceof  Bird_1); // true
console.log(bird_1 instanceof  Animal_1); // true

console.log(bird_1.eat()); // eat
console.log(bird_1.move()); // move
console.log(bird_1.fly()); // fly