/*
정적 메서드와 프로토타입 메서드의 차이
- 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
- 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로호출한다.
- 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있음.
 */

class Square_static{
    //정적 메서드
    static area(width, height){
        return width * height;
    }
}

console.log(Square_static.area(10,10)); //100
// 정적 메서드 area는 인스턴스 프로퍼티를 참조하지 않음.
// 만약 인스턴스 프로퍼티를 참조해야 한다면 정적 메서드는 대신 프로토타입 메서드를 사용해야 함.

class Square_prototype{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    //프로토타입 메서드
    area(){
        return this.width * this.height;
    }
}

const square_prototype = new Square_prototype(10, 10);
console.log(square_prototype.area()); //100


// 표준 빌트인 객체의 정적 메서드
console.log(Math.max(1,2,3));   //3
console.log(Number.isNaN(NaN));     //true
console.log(JSON.stringify({a:1, b:2}));  //{"a":1,"b":2}
console.log(Object.is({},{}));  //false
console.log(Reflect.has({a:1}, 'a')); //true
// 이처럼 클래스 또는 생성자 함수를 하나의 네임스페이스(namespace)로 사용하여 정적 메서드를 모아 놓으면 이름 충돌 가능성을 줄여 주고 관련 함수들을 구조화할 수 있는 효과가 있음.
// 정적 메서드는 애플리케이션 전역에서 사용할 유틸리티 함수를 전역 함수로 정의하지 않고 메서드로 구조화할 때 유용함.

class Person_instance{
    //생성자
    constructor(name){
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨.
        console.log("this : ", this);   //this :  Person_instance {}
        console.log("this.constructor : ", this.constructor);   //this.constructor :  [class Person_instance]
        console.log(Object.getPrototypeOf(this) === Person_instance.prototype); //true

        // 2. this에 바인딩되어 있는 인스턴스를 초기화 함.
        this.name = name;

        // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됨.
    }
}

const person_instance = new Person_instance('kim');
console.log(person_instance);   // Person_instance { name: 'kim' }


// 프로퍼티

// 인스턴트 프로퍼티는 constructor 내부세어 정의해야 함
class Person_instance_property{
    constructor(name){
        this.name = name;
    }
}

const me_instance_property = new Person_instance_property('kim');
console.log(me_instance_property);  //Person_instance_property { name: 'kim' }

// name 은 public 함
console.log(me_instance_property.name); //kim

/*
constructor 내부에서 this 에 추가한 프로퍼티는 언제나 클래스가 생성한 인스턴스의 프로퍼티가 됨.
ES6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근 제한자(access modifier)를 지원하지 않음.
따라서 인스턴스 프로퍼티는 언제나 public 함.
 */


// 접근자 프로퍼티
// 접근자 프로퍼티(accessor property)는 차제적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.

const person_accessor = {
    //데이터 프로퍼티
    firstName : 'GyeJeong',
    lastName : 'Kim',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.

    //getter 함수
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    //setter 함수
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(`name : ${person_accessor.firstName} ${person_accessor.lastName}`); //name : GyeJeong Kim

console.log(`fullName : ${person_accessor.fullName}`); //fullName : GyeJeong Kim

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 할당하면 setter 함수가 호출됨.
person_accessor.fullName = 'change Name';
console.log(`change Name : ${person_accessor.fullName}`); //change Name : change Name

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨.
console.log(person_accessor.fullName); //change Name

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 특성을 갖는다.
console.log(Object.getOwnPropertyDescriptor(person_accessor, 'fullName')); // { get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true }

// 접근자 프로퍼티는 클래스에서도 사용할 수 있음
class Person_accessor{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // fullName은 접근자 프로퍼티다.
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me_accessor = new Person_accessor('GyeJeong', 'Kim');
console.log(me_accessor.fullName); //GyeJeong Kim

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${me_accessor.firstName} ${me_accessor.lastName}`); //GyeJeong Kim

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출됨
me_accessor.fullName = 'change Name';
console.log(me_accessor);

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
//접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
console.log(me_accessor.fullName); //change Name

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖음
console.log(Object.getOwnPropertyDescriptor(Person_accessor.prototype, 'fullName')); // { get: [Function: get fullName], set: [Function: set fullName], enumerable: false, configurable: true }

// 클래스의 메서드는 기본적으로 프로토타입 메서드가 됨.
// 따라서 클래스의 접근자 ㅡ로퍼티 또한 인스턴스프로퍼티가 아닌 프로토타입의 프로퍼티가 됨.

//Object.getOwnPropertyNames는 비열거형(non-enumerable)을 포함한 모든 프로퍼티의 이름을 반환함 (상속제외)
let test1 = Object.getOwnPropertyNames(me_accessor); // ['firstName', 'lastName']
console.log(test1);
let test2 = Object.getOwnPropertyNames(Object.getPrototypeOf(me_accessor)); // ['constructor', 'fullName']
console.log(test2);