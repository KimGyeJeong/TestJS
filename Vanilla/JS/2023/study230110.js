// class Person{}
//
// const me = new Person();
// console.log(me);        //Person {}
//

////////////////////////

//ERR
// class Person {
// }
// 정상
// const me = new Person();

//TypeError: Class constructor Person cannot be invoked without 'new'
// const me = Person();

///////////////////////
// const Person = class MyClass{};
//
// const me = new Person();
//
// // console.log(MyClass);   //ReferenceError: MyClass is not defined
//
// // const you = new MyClass();  //ReferenceError: MyClass is not defined
//
// console.log(me);    //MyClass {}

///////////////////////

//메서드
// 클래스 몸체에는 0개 이상의 메서드만 선언 할 수 있음.
// 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세가지가 있음.

//constructor
// constructor는 인스턴스를 생성하고 초기화 하기 위한 특수한 메서드. constructor는 이름을 변경할 수 없음
class Person{
    //생성자
    constructor(name){
        //인스턴스 초기화
        this.name = name;
    }
}
//
// //클래스는 함수임.
// console.log(typeof Person); //function
//
// console.dir(Person);    //[class Person]

const me = new Person('Kim');
console.log(me);    //Person { name: 'Kim' }