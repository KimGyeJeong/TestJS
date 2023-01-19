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
console.log(bird_1 instanceof Bird_1); // true
console.log(bird_1 instanceof Animal_1); // true

console.log(bird_1.eat()); // eat
console.log(bird_1.move()); // move
console.log(bird_1.fly()); // fly


console.log('--------------------------');

//참고용 의사 클래스 상속패턴.. 사용하지 않음
// 의사 클래스 상소갸(pseudo classical inheritance) 패턴
var Animal = (function () {
    function Animal(age, weight) {
        this.age = age;
        this.weight = weight;
    }

    Animal.prototype.eat = function () {
        return 'eat';
    };
    Animal.prototype.move = function () {
        return 'move';
    };

    return Animal;
}());

// Animal 생성자 함수를 상속하여 확장한 Bird 생성자 함수
var Bird = (function () {
    function Bird() {
        // Animal 생성자 함수에게 this 와 인수를 전달하면서 호출
        Animal.apply(this.arguments);
    }

    //Bird.prototype을 Animal.prototype을 프로토타입으로 갖는 객체로 교체
    Bird.prototype = Object.create(Animal.prototype);
    //Bird.prototype.constructor을 Animal 에서 Bird로 교체
    Bird.prototype.constructor = Bird;

    Bird.prototype.fly = function () {
        return 'fly';
    };

    return Bird;
}());

var bird = new Bird(1, 5);

console.log(bird); // Bird { age: 1, weight: 5 }
console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly
///////
console.log('--------------------------');
///////

//extends 키워드
// 상속을 통해 클래스를 확장하려면 extends 키워드를 사용하여 상속받을 클래스를 정의함.

//수퍼(베이스, 부모)클래스
class Base {
    testNum = 2;

    constructor() {
        console.log('Base 생성자 호출');
    }

    getTestNum() {
        return this.testNum;
    }

    setTestNum(num) {
        this.testNum = num;
    }
}

//서브(파생, 자식)클래스
class Derived extends Base {

}

const derived = new Derived();
console.log(derived.getTestNum())
derived.setTestNum(333);
console.log(derived.getTestNum())


// 동적 상속
// extends 키워드는 클래스 뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수도 있다.
// 단, extends 키워드 앞에는 반드시 클래슥 와야 한다.

//생성자 함수
function Base_1(a) {
    this.a = a;
}

//생성자 함수를 상속받는 서브 클래스
class Derived_1 extends Base_1 {
}

const derived_1 = new Derived_1(1);
console.log(derived_1); // Derived_1 { a: 1 }

function Base1() {
}

class Base2 {
}

let condition = true;

//조건에 따라 동적으로 상속 대상을 결정하는 서브 클래스
class Derived1 extends (condition ? Base1 : Base2) {
}

const derived1 = new Derived1();
console.log(derived1); // Derived1 {}

console.log(derived1 instanceof Derived1); // true
console.log(derived1 instanceof Base1); // true
console.log(derived1 instanceof Base2); // false


// 서브 클래스의 constructor
// 클래스에서 constructor를 생략하면 클래스에 비어있는 constructor가 암묵적으로 정의됨.

//부모클래스와 자식클래스 모두 constructor를 생략한 경우
class Base_parent {
}

class Derived_child extends Base_parent {
}

//위와 같은 경우 암묵적으로 아래와 같이 constructor가 정의됨
class Base_parent1 {
    constructor() {
    }
}

class Derived_child1 extends Base_parent1 {
    constructor(...args) {
        super(...args);
    }
}

const derived_child1 = new Derived_child1();
console.log(derived_child1); // Derived_child1 {}
// 위와 같이 부모, 자식 클래스 모두 constructor를 생략하면 빈 객체가 생성됨.
// 프로퍼티를 소유하는 인스턴스를 생성하려면 constructor 내부에서 인스턴스에 프로퍼티를 추가해야 함.


//super 키워드
// super 키워드는 함수처럼 호출할 수도 있고, this와 같이 식별자처럼 참조할 수 있는 특수한 키워드.
// - super를 호출하면 수퍼클래스의 constructor(super-constructor)를 ㅗ출함
// - super를 참조하면 수퍼클래스의 메서드를 호출 할 수 있음.

//수퍼클래스
class Base_super1 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

//서브클래스
class Derived_super1 extends Base_super1 {
    //암묵적으로 다음과같이 constructor가 정의됨
    //constructor( ...args){
    //     super( ...args);
    // }
}

const derived_super1 = new Derived_super1(1, 2);
console.log(derived_super1); // Derived_super1 { a: 1, b: 2 }

//수퍼클래스
class Base_super2 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

//서브클래스
class Derived_super2 extends Base_super2 {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const derived_super2 = new Derived_super2(1, 2, 3);
console.log(derived_super2); // Derived_super2 { a: 1, b: 2, c: 3 }

// 주의사항
// 1. 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서는 반드시 super를 호출해야 함.
class Base_s1 {
}

class Derived_s1 extends Base_s1 {
    constructor() {
        //super()없을시 에러발생.
        super();
        console.log('constructor call');
    }
}

const derived_s1 = new Derived_s1();

// 2. 서브클래스의 constructor 에서 super를 호출하기 전에는 this를 참조할 수 없음.
class Base_s2 {
}

class Derived_s2 extends Base_s2 {
    constructor() {

        //super가 가장 먼저 위에 있어야 함.
        // this.a=1;
        super();
    }
}

const derived_s2 = new Derived_s2(1); // 에러발생
console.log(derived_s2); // Derived_s2 {}

// 3. super는 반드시 서브클래스의 constructor에서만 호출한다. 서브클래스가 아닌 클래스의 constructor나 함수에서 super를 호출하면 에러가 발생
class Base_s3 {
    constructor(){
        // super();    //SyntaxError: 'super' keyword unexpected here
    }
}
function Foo_s3(){
    // super();    //SyntaxError: 'super' keyword unexpected here
}


//super참조
// 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를 호출할 수 있음

//1. 서브클래스의 프로토타입 메서드 내에서 super.sayHi는 수퍼클래스의 프로토타입 메서드 sayHi를 가리킴
class Base_super3{
    constructor(name) {
        this.name = name;
    }
    sayHi(){
        return `Hi! My name is ${this.name}`;
    }
}
