//encodeURI decodeURI

//encodeURI 함수는 완전한 URI를 문자열로 전달받아 이스케이프 처리를 위해 인코딩 함
// 이때 이스케이프 처리는 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도
// 읽을 수 있는 아스키 문자 셋으로 변환하는 것

const uri = 'https://www.naver.com/name=와우';

const enc = encodeURI(uri);

console.log(enc);   //https://www.naver.com/name=%EC%99%80%EC%9A%B0

const dec = decodeURI(enc);

console.log(dec);   //https://www.naver.com/name=와우

//암묵적 전역

//#1
// var x = 10;
// function foo() {
//     y = 20;     //y는 window.y = 20; 으로 저장
// }

// foo();

//#2
// console.log(x); //undefined --> 호이스팅 발생
// // console.log(y); //ReferenceError: y is not defined

// var x = 100;    //전역변수
// function foo() {
//     y = 200;    // window.y = 200;
// }
// foo();
// console.log(x + y); //300

//#3
// var x = 1;

// function foo() {
//     y = 2;
//     console.log(x + y);
// }
// foo();  //3

// console.log(window.x);  //1
// console.log(window.y);  //2

// delete x;       //전역 변수는 삭제되지 않음
// delete y;       //프로퍼티는 삭제됨

// console.log(window.x);  //1
// console.log(window.y);  //undefined

//this
//자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self referencing variable)
//this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있음

const circle = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;     //this.radius 는 10
    }
};

console.log(circle.getDiameter());  //10

//this는 어디서든지 참조 가능
//전역에서 this는 전역 객체 window 를 가리킴

console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function square(number) {
    //일반 함수 내부에서 this는 전역 객체 window를 가리킴
    console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    return number * number;
}
let number = square(2);
console.log(number);    //4

const person = {
    name: 'Lee',
    getName() {
        //메소드 내부에서 this는 메서드를 호출한 객체를 가리킴
        console.log(this);  //{name: 'Lee', getName: ƒ}
        return this.name;
    }
};
console.log(person.getName());  //Lee

function Person(name) {
    this.name = name;
    //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킴
    console.log(this);  //Person {name: 'lee'}
}
const me = new Person('lee');
console.log(me);    //Person {name: 'lee'}
console.log(me.name);   //lee