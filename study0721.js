//foo 함수 코드 평가

// var x = 1;
// const y = 2;

// function foo(a) {
//     var x = 3;
//     const y = 4;

//     function bar(b) {
//         const z = 5;
//         console.log(a + b + x + y + z);
//     }
//     bar(10);
// }
// foo(20);    // 호출 직전

/*
foo 함수가 호출되면 전역 코드의 실행을 일시 중단하고 foo 함수 내부로 코드의 제어권이 이동.
그리고 함수 코드를 평가하기 시작.

1. 함수 실행 컨텍스트 생성
    - 먼저 foo함수 실행 컨텍스트를 생성. 생성된 함수 실행 컨텍스트는 함수 렉시컬 환경이 완성된 다음
    실행 컨텍스트 스택에 푸시. 이때 foo 함수 실행 컨텍스트는 실행 컨텍스트 스택의 최상위,
    즉 실행 중인 실행 컨텍스트(running execution context)가 됨.
2. 함수 렉시컬 환경 생성
    - foo 함수 렉시컬 환경(Function Lexical Environment)을 생성하고 foo 함수 실행 컨텍스트에 바인딩 함
    2-1. 함수 환경 레코드 생성
        - 함수 렉시컬 환경을 구성하는 컴포넌트 중 하나인 함수 환경 레코드(Function Environment Record)는
        매개변수, arguments 객체, 함수 내부에서 선언한 지역 변수와 중첩 함수를 등록하고 관리
    2-2. this바인딩
        - 함수 환경 레코드의 [[ThisValue]] 내부 슬롯에 this가 바인딩 됨.
        foo 함수는 일반 함수로 호출되었으므로 this는 전역 객체를 가리킨다. 따라서 함수 환경 레코드의
        [[ThisValue]] 내부 슬롯에는 전역 객체가 바인딩 됨. foo 함수 내부에서 this를 참조하면 함수 환경
        레코드의 [[ThisValue]] 내부 슬롯에 바인딩되어 있는 객체가 반환됨.
    2-3. 외부 렉시컬 환경에 대한 참조 결정
        - 외부 렉시컬 환경에 대한 참조에 foo 함수 정의가 평가된 시점에 실행 중인 실행 컨텍스트의 렉시컬 환경의
        참조가 할당.
        자바스크립트는 함수를 어디서 호출했는지가 아닌 어디에 정의했는지에 따라 상위 스코프를 결정 함.
*/

//foo 함수 코드 실행

/*
런타임이 시작되어 foo 함수의 소스코드가 순차적으로 실행되기 시작함. 매개변수에 인수가 할당되고,
변수 할당문이 실행되어 지역변수 x,y에 값이 할당 됨. 그리고 함수 bar 가 호출됨.

이때 식별자 결정을 위해 실행 중인 실행 컨텍스트의 렉시컬 환경에서 식별자를 검색하기 시작함.
*/

//bar 함수 코드 평가

/*
현재 foo 함수 코드 평가를 통해 foo 함수 실행 컨텍스트가 생성 되었고 foo 함수 코드를 실행하고 있음
현재 진행 상황은 bar 함수를 호출하기 직전,
var x = 1;
const y = 2;

function foo(a) {
    var x = 3;
    const y = 4;

    function bar(b) {
        const z = 5;
        console.log(a + b + x + y + z);
    }
    bar(10);    // 호출 직전
}
foo(20);    

bar 함수가 호출되면 bar 함수 내부로 코드의 제어권이 이동함. 그리고 bar 함수 코드를 평가하기 시작.
*/
