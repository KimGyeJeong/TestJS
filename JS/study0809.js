//#1

// const x = 1;

// function outer() {
//     const x = 10;
//     const inner = function () { console.log(x); };
//     return inner;
// }

// const innerFunc = outer();
// innerFunc();

/*
outer함수를 호출(11번째줄) 하면 outer 함수는 중첩 함수 inner를 반환하고 생명 주기(life cycle)를 마감.
outer 함수의 실행이 종료되면 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거(pop) 됨.
이때 outer 함수의 지역 변수 x 와 변수 값10을 저장하고 있던 outer 함수의 실행 컨텍스트가 제거되었으므로 
outer 함수의 지역 변수 x 또한 생명주기를 마감함. 그래서 outer 함수의 지역 변수 x는 유효해 보이지 않지만
실제로 innerFunc를 실행(12번째줄)하면 실행 결과는 outer 함수의 지역 변수 x의 값인 10이 나옴.

외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종요한 외부 함수의 변수를 참조 할수 있는데
 이러한 중첩 함수를 클로저(closure)라 부른다.
*/

/*
자바스크립트의 모든 함수는 자신의 상위 스코프를 기억하는데, 모든 함수가 기억하는 상위 스코프는 함수를 어디서 호출하든 
상관없이 유지됨. 따라서 함수를 어디서 호출하든 상관없이 함수는 언제나 자신이 기억하는 상위 스코프의 식별자를 참조 할 수 있으며
 식별자에 바인딩된 값을 변경할 수도 있음.
*/

/*
상위 스코프의 어떤 식별자도 참조하지 않는 함수는 클로저가 아님.
클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적.
*/

//#2
/*
클로저는 상태(state)를 안전하게 변경하고 유지하기 위해 사용함.
상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉(information hiding)하고 특정 함수에게만 상태 변경을 허용하기 위해 사용
*/

//잘 동작하지만 오류를 발생시킬 가능성을 내포하고있는 좋지 않은 코드
// let num = 0;

// const increase = function () {
//     return ++num;
// };

// console.log(increase());    //1
// console.log(increase());    //2
// console.log(increase());    //3

/*
다음의 전제 조건이 지켜져야 바르게 동작함
    1. 카운트 상태(num변수의 값)는 increase 함수가 호출되기 전까지 변경되지않고 유지되어야 함.
    2. 이를 위해 카운트 상태(num변수의ㅣ 값)는 increase 함수만이 변경할 수 있어야 함.

카운트 상태는 전역 변수를 통해 관리되고 있기 때문에 언제든지 누구나 접근할 수 있고, 변경할수 있다.
의도치 않게 상태가 변경될 수 있는데, 만약 누군가에 의해 의도치 않게 카운트 상태,
즉 전역 변수 num 값이 변경되면 이는 오류로 이어짐.
*/

//#3
// const increase = function () {
//     let num = 0;
//     return ++num;
// };

// console.log(increase());    //1
// console.log(increase());    //1
// console.log(increase());    //1

/*
카운트 상태를 안전하게 변경하고 유지하기 위한 전역 변수 num을 increase 함수의 지역 변수로 변경하여 의도치 않은 상태 변경은 방지했지만,
increase 함수가 호출될 때마다 지역 변수 num은 다시 선언되고 0으로 초기화되기 때문에 항상 출력결과는 1이다.
상태가 변경되기 이전 상태를 유지하지 못함.
*/

//#4
// const increase = (function () {

//     let num = 0;

//     //클로저
//     return function () {
//         return ++num;
//     };
// }());

// console.log(increase());    //1
// console.log(increase());    //2
// console.log(increase());    //3

/*
즉시 실행 함수가 호출되고 즉시 실행 함수가 반환한 함수가 increase 변수에 할당 됨.
increase 변수에 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저

즉시 실행 함수는 호출된 이후 소멸되지만 즉시 실행 함수가 반환한 클로저는 increase 변수에 할당되어 호출 됨.
즉시 실행 함수가 반환한 클로저는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하고 있음.
따라서 즉시 실행 함수가 반환한 클로저는 카운트 상태를 유지하기 위한 자유 변수 num을 언제 어디서 호출하든지 참조하고 변경할 수 있음.

즉시 실행 함수는 한 번만 실행되므로 increase가 호출될때마다 num 변수가 재차 초기화될 일은 없으며,
 num 변수는 외부에서 직접 접근할 수 없는 은닉된 pricate 변수이므로 전역 변수를 사용했을 때와 같이 의도되지 않은 변경을 걱정할
필요도 없기 때문에 더 안정적인 프로그래밍이 가능함
*/

// //Test
// const increase2 = function () {
//     let num3 = 0;
//     return function () {
//         return ++num3;
//     };
// };

// console.log(increase2());
// // ƒ () {
// //     return ++num3;
// // }
// console.log(increase2());
// // ƒ () {
// //     return ++num3;
// // }
// console.log(increase2());
// // ƒ () {
// //     return ++num3;
// // }

//#5
// const counter = (function () {
//     let num = 0;
//     return {
//         increase() {
//             return ++num;
//         },
//         decrease() {
//             return --num;
//         }
//     };
// }());

// console.log(counter.increase());    //1
// console.log(counter.decrease());    //0
// console.log(counter.decrease());    //-1
// console.log(counter.decrease);
// // ƒ decrease() {
// //     return --num;
// // }

/*
위의 코드에서 즉시 실행 함수가 반환하는 객체 리터럴은 즉시 실행 함수의 실행 단계에서 평가되어 객체가 된다.
이때 객체의 메서드도 함수 객체로 생성된다. 객체 리터럴의 중괄호는 코드 블록이 아니므로 별도의 스코프를 생성하지 않는다.

변수 값은 누군가에게 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있다. 외부 상태 변경이나 가변(mutable) 데이터를 피하고
 불변성(immutability)을 지향하는 함수형 프로그래밍에서 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이기 위해
 클로저는 적극적으로 사용 됨.
*/

//#6

//함수를 인수로 전달받고 함수를 반환하는 고차 함수
//이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환함
// function makeCounter(aux) {
//     let counter = 0;

//     return function () {
//         counter = aux(counter);
//         return counter;
//     };
// }

// //보조 함수
// function increase(n) {
//     return ++n;
// }
// //보조 함수
// function decrease(n) {
//     return --n;
// }

// //함수로 함수를 생성함
// // makeCouneter 함수는 보조 함수를 인수로 전달받아 함수를 반환 함.
// const increaser = makeCounter(increase);
// console.log(increaser());   //1
// console.log(increaser);
// // ƒ () {
// //     counter = aux(counter);
// //     return counter;
// // }
// console.log(increaser());   //2

// //increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않음
// const decreaser = makeCounter(decrease);
// console.log(decreaser());   //-1
// console.log(decreaser());   //-2
// console.log(decreaser);
// // ƒ () {
// //     counter = aux(counter);
// //     return counter;
// // }

/*
makeCounter 함수는 보조 함수를 인자로 전달받고 함수를 반환하는 고차 함수이다.
makeCounter 함수가 반환하는 함수는 자신이 생성됐을 때의 렉시컬 환경인 makeCounter 함수의 스코프에 속한
counter 변수를 기억하는 클로저임.

makeCounter 함수는 인자로 전달받은 보조 함수를 합성하여 자신이 반환하는 함수의 동작을 변경할수 있는데,
이때 주의해야 할 것은 makeCounber 함수를 호출해 함수를 반환할 때 반환된 함수는 자신만의 독립된 렉시컬 환경을 갖음.

위의 코드에서 전역 변수 increaser 와 decreaser에 할당된 함수는 각각 자신만의 독립된 렉시컬 환경을 갖기 때문에 카운트를
유지하기 위한 자유 변수 counter 를 공유하지 않아 카운터의 증감이 연동되지 않음. 따라서 독립된 카운터가 아니라 연동하여 증감이
가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 하는데, 이를 위해서는 makeCounter 함수를 두번 호출하지 말아야 함.
*/

//#7

// const counter = (function () {
//     let counter = 0;
//     return function (temp) {
//         counter = temp(counter);
//         return counter;
//     };
// }());

// function increase(n) {
//     return ++n;
// }
// function decrease(n) {
//     return --n;
// }

// console.log(counter(increase)); //1
// console.log(counter(decrease)); //0
// //console.log(counter(decrease())); //에러. decrease()를 던지는게 아닌 decrease 를 던져야 함

//#8

/*
캡슐화(encapsulation)는 객체의 상태(state)를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작(behavior)인
메서드를 하나로 묶는 것을 말함. 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데
이를 정보 은닉(information hiding)이라 함.

정보 은닉은 외부에 공개 할 필요가 없는 구현의 일부를 외부에 공개되지 않도록 감추어 적절치 못한 접근으로부터 객체의 상태가 변경되는 것을
방지해 정보를 보호하고, 객체 간의 상호 의존성, 즉 결합도(coupling)를 낮추는 효과가 있음.
자바스크립트는 public, private, protected 같은 접근 제한자를 제공하지 않기 때문에 객체의 모든 프로퍼티와 메서드는 기본적으로
외부에 공개되어 있음. 기본적으로 public 상태임.
*/

// function Person(name, age) {
//     this.name = name;
//     let _age = age;

//     this.sayHi = function () {
//         console.log(`Hi, My name is ${this.name}. i am ${_age}`);
//     };
// }

// const me = new Person('Lee', 20);
// me.sayHi(); //Hi, My name is Lee. i am 20
// console.log(me.name);   //Lee
// console.log(me._age);   //undefined

// const you = new Person(`Kim`, 30);
// you.sayHi();    //Hi, My name is Kim. i am 30
// console.log(you.name);  //Kim
// console.log(you._age);  //undefined

/*
위의 코드에서 name 프로퍼티는 현재 외부로 공개되어 있어서 자유롭게 참조하거나 변경할 수 있음. --> name프로퍼티는 public
하지만 _age 변수는 Person 생성자 함수의 지역 변수이므로 Person 생성자 함수 외부에서 참조하거나 변경할 수 없음
--> _age 변수는 private

위의 코드에서 sayHi 메서드는 인스턴스 메서드이므로 Person 객체가 생성될 때마다 중복 생성됨

아래코드로 sayHi 메서드를 프로토타입 메서드로 변경하여 sayHi 메서드의 중복 생성을 방지해보기.
*/

// #9

// function Person(name, age) {
//     this.name = name;
//     let _age = age;
// }

// Person.prototype.sayHi = (function () {
//     console.log(`my name is ${this.name} and i'm ${_age} years old`);
// }());

// const me = new Person('lee', 20);
// me.sayHi();

/*
위의 코드에서는 Person 생성자 함수의 지역변수 _age 를 참조할 수 없는 문제가 발생함..
*/

// #10

// const Person = (function () {
//     let _age = 0;

//     function Person(name, age) {
//         this.name = name;
//         _age = age;
//     }

//     Person.prototype.sayHi = function () {
//         console.log(`my name is ${this.name} and i'm ${_age} years old.`);
//     };

//     return Person;
// }());

// const me = new Person('lee', 20);
// me.sayHi(); //my name is lee and i'm 20 years old.
// console.log(me.name);   //lee
// console.log(me._age);   //undefined

// const you = new Person('kim', 30);
// you.sayHi();    //my name is kim and i'm 30 years old.
// console.log(you.name);  //kim
// console.log(you._age);  //undefined

/*
위의 코드처럼 이용하면 자바스크립트에서도 정보 은닉이 가능한 것 처럼 보임. 즉시 실행 함수가 반환하는 Person 생성자 함수와 Person 생성자 함수의
인스턴스가 상속받아 호출할 Person.prototype.sayHi 메서드는 즉시 실행 함수가 종료된 이후 호출됨.
하지만 Person생성자 함수와 sayHi 메서드는 이미 종료되어 소멸한 즉시 실행 함수의 지역 변수 _age 를 참조 할 수 있는 클로저임.

위의 코드도 문제가 있는데 Person 생성자 함수가 여러 개의 인스턴스를 생성할 경우 아래코드에서 확인할수있듯이 _age 변수의 상태가 변경이됨.
*/

const Person = (function () {
    let _age = 0;

    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function () {
        console.log(`my name is ${this.name} and i'm ${_age} years old.`);
    };

    return Person;
}());

const me = new Person('lee', 20);
me.sayHi();     //my name is lee and i'm 20 years old.

const you = new Person('kim', 30);
you.sayHi();    //my name is kim and i'm 30 years old.

me.sayHi();     //my name is lee and i'm 30 years old.

/*
이와 같은 현상은 Person.prototype.sayHi 메서드가 단 한번 생성되는 클로저이기 때문에 발생하는 현상이다.
Person.prototype.sayHi 메서드는 즉시 실행 함수가 호출될 때 생성되는데 이때 자신의 상위 스코프인 즉시 실행 함수의
실행 컨텍스트의 렉시컬 환경의 참조를 [[Environment]]에 저장하여 기억한다. 따라서 Person 생성자 함수의 모든 인스턴스가
상속을 통해 호출할 수 있는 Person.prototype.sayHi 메서드의 상위 스코프는 어떤 인스턴스로 호출하더라도 하나의 동일한 
상위 스코프를 사용하게 됨. 이러한 이유때문에 Person 생성자 함수가 여러 개의 인스턴스를 생성할 경우 위의 코드처럼 _age 변수의 상태가
유지되지 않음.

자바스크립트는 정보 은닉을 완전하게 지원하지 않음. 인스턴스 메서드를 사용한다면 자유 변수를 통해 private를 흉내낼수 는 있지만
프로토타입 메서드를 사용하면 이마저도 불가능함.
*/