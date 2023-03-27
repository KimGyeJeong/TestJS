//symbol
//7번째 데이터 타입. ES6에서 도입된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값
//다른 값과 절대 중복되지 않는 유일무이한 값

// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성함
const mySymbol_1 = Symbol();
console.log(typeof mySymbol_1); // symbol

// 심벌 값은 외부로 노출되지 않아 확인할 수 없음
console.log(mySymbol_1); // Symbol()

//Symbol 함수는 String, Number, Boolean 생성자 함수와는 달리 new 연산자와 함께 호출하지 않음
// console.log(new Symbol()); // TypeError: Symbol is not a constructor
// new Symbol(); // TypeError: Symbol is not a constructor

// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성함
const mySymbol_2 = Symbol("mySymbol");
const mySymbol_3 = Symbol("mySymbol");

console.log(mySymbol_2 === mySymbol_3); // false

// 심벌 값도 문자열, 숫자, 불리안과 같이 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성함
const mySymbol_4 = Symbol("mySymbol");
// 심벌도 래퍼 객체를 생성함
console.log(mySymbol_4.toString()); // Symbol(mySymbol)
console.log(mySymbol_4.description); // mySymbol
const mySymbol_4_1 = Symbol("hello");
console.log(mySymbol_4_1.toString()); // Symbol(hello)
console.log(mySymbol_4_1.description); // hello


//심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않음
const mySymbol_5 = Symbol();
// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않음
// console.log(mySymbol_5 + ""); // TypeError: Cannot convert a Symbol value to a string
// console.log(+mySymbol_5); // TypeError: Cannot convert a Symbol value to a number

//불리안 타입으로는 암묵적으로 타입 변환됨. 이를 통해 if문 등에서 존재 확인이 가능함
const mySymbol_6 = Symbol();
// 불리안 타입으로는암묵적으로 타입 변환됨
console.log(Boolean(mySymbol_6)); // true
console.log(!!mySymbol_6); // true

if(mySymbol_6){
    console.log("mySymbol_6은 존재합니다.");
} // mySymbol_6은 존재합니다.

//Symbol.for / Symbol.keyFor
//Symbol.for 메서드는 인수로 전달받은 문자열을 키로 사용하여 키와 심벌 값의 쌍들이 저장되어 있는 전역 심벌 레지스트리(global symbol registry)에서 해당 키와 일치하는 심벌 값을 검색함
// - 검색에 성공하면 새로운 심벌 값을 생성하지 않고 검색된 심벌 값을 반환함
// - 검색에 실패하면 새로운 심벌 값을 생성하여 Symbol.for 메서드의 인수로 전달된 키로 전역 심벌 레지스트레이 저장한 후, 생성된 심벌 값을 반환함

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for("mySymbol");
console.log(s1); // Symbol(mySymbol)
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s2 = Symbol.for("mySymbol");
console.log(s2); // Symbol(mySymbol)

console.log(s1 === s2); // true
console.log(Symbol.keyFor(s1)); // mySymbol
console.log(s1.toString()); // Symbol(mySymbol)
console.log(s1.description); // mySymbol

//Symbol.keyFor 메서드를 사용하면 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있음
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s3 = Symbol.for("mySymbol");
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s3); // mySymbol
console.log('-------------------------');
console.log(Symbol.keyFor(s3)); // mySymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않음
const s4 = Symbol('foo');
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
console.log(Symbol.keyFor(s4)); // undefined
Symbol.keyFor(s4); // undefined

//심벌과 상수
const Direction_1 = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

// 변수에 상수를 할당
const myDirection_1 = Direction_1.UP;
console.log(myDirection_1); // 1
if(myDirection_1 === Direction_1.UP){
    console.log("UP");
} // UP

const Direction_2 = {
    UP: Symbol("UP"),
    DOWN: Symbol("DOWN"),
    LEFT: Symbol("LEFT"),
    RIGHT: Symbol("RIGHT")
};
console.log(Direction_2.UP); // Symbol(UP)
const myDirection_2 = Direction_2.UP;
console.log(myDirection_2); // Symbol(UP)
if(myDirection_2 === Direction_2.UP){
    console.log("UP");
} // UP

//심벌과 프로퍼티 키
const obj_1 = {
    // 심벌 값으로 프로퍼티 키를 생성
    [Symbol.for('mySymbol')]: 1,
    [Symbol.for('mySymbol2')]: 2
};
console.log(obj_1[Symbol.for('mySymbol')]); // 1
console.log(obj_1[Symbol.for('mySymbol2')]); // 2

//심벌 값은 유일무이한 값이므로 심벌 값으로 프로퍼티 키를 만들면 다른 프로퍼티 키와 절대 충돌하지 않는다.


