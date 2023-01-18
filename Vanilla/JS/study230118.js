// 클래스 몸체에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩해서는 안된다.
// this는 클래스의 constructor와 메서드 내에서만 유효하다.
class Person_1{
    // this 에 클래스 필드를 바인딩해서는 안됨

    //ERR
    // this.name = ' ';    //SyntaxError: Unexpected token '.'
}

// 클래스 필드를 참조하는 경우 자바와 같은 클래스 기반 객체지향 언어에서는 this 를 생략할 수 있으나 자바스크립트에서는 this를 반드시 사용해야 함.
class Person_2{
    //클래스 필드
    name = 'Kim';

    constructor() {

        //ERR
        // console.log(name);  //ReferenceError: name is not defined
        console.log(this.name); //Kim
    }
}

new Person_2();

//클래스 필드에 초기값을 할당하지 않으면 undefined 를 갖음
class Person_3{
    name;
}
const me = new Person_3();
console.log(me);    //Person_3 { name: undefined }

//인스턴스를 생성할때 외부의 초기값으로 클래스 필드를 초기화해야 할 필요가 있다면 constructor에서 클래스 필드를 초기화 해야 함
class Person_4{
    name;

    constructor(name) {
        this.name = name;
    }
}
const me_4 = new Person_4('Kim');
console.log(me_4);  //Person_4 { name: 'Kim' }

// 인스턴스를 생성할 때 클래스 필드를 초기화할 필요가 있다면 constructor 밖에서 클래스 필드를 정의할 필요가 없음
// 클래스 필드를 초기화할 필요가 있다면 어차피 constructor 내부에서 클래스 필드를 참조하여 초기값을 할당해야 함.
// 이때 this, 즉 클래스가 생성한 인스턴스에 클래스 필드에 해당하는 프로퍼티가 없다면 자동 추가되기 때문
class Person_5{
    constructor(name) {
        this.name = name;
    }
}

const me_5 = new Person_5('Kim');
console.log(me_5);  //Person_5 { name: 'Kim' }

//함수는 일급 객체이므로 함수를 클래스 필드에 할당할 수 있다. 따라서 클래스 필드를 통해 메서드를 정의할 수도 있다.
class Person_6{
    name = 'kim';

    // 클래스 필드에 함수를 할당
    // getName = function () {
    //     return this.name;
    // }
    //화살표 함수로 정의
    getName = () => this.name;
}
const me_6 = new Person_6();
console.log(me_6);  //Person_6 { name: 'kim', getName: [Function: getName] }
console.log(me_6.getName());   //kim
