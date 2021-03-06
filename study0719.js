// 실행 컨텍스트

// 실행 컨텍스트 execution context 는 자바스크립트의 동작 원리를 담고 있는 핵심 개념

//소스코드는 4가지 타입으로 구분. 4가지 타입의 소스코드는 실행 컨텍스트를 생성

/*
1. 전역 코드 global code
- 전역에 존재하는 소스코드를 말한다. 전역에 정의된 함수, 클래스 등의 내부 코드는 포함되지 않음

전역 코드는 전역 변수를 관리하기 위해 최상위 스코프인 전역 스코프를 생성해야 한다.
var 키워드로 선언된 전역 변수와 함수 선언문으로 정의된 전역 함수를 전역 객체의 프로퍼티와 메서드로 바인딩하고 참조하기 위해 전역 객체와 연결되어야 한다.
이를 위해 전역 코드가 평가되면 전역 실행 컨텍스트가 생성 됨.

2. 함수 코드 function code
- 함수 내부에 존재하는 소스코드를 말한다. 함수 내부에 중첩된 함수, 클래스 등의 
내부 코드는 포함되지 않음

함수 코드는 지역 스코프를 생성하고 지역 변수, 매개변수, arguments객체를 관리해야 한다.
생성한 지역 스코프를 전역 스코프에서 시작하는 스코프 체인의 일원으로 연결해야 한다.
이를 위해 함수 코드가 평가되면 함수 실행 컨텍스트가 생성 됨.

3. eval 코드 eval code
- 빌트인 전역 함수인 eval 함수에 인수로 전달되어 실행되는 소스코드를 말한다

eval 코드는 strict mode(엄격 모드)에서 자신만의 독자적인 스코프를 생성한다.
이를 위해 eval 코드가 평가 되면 eval 실행 컨텍스트가 생성됨.

4. 모듈 코드 module code
- 모듈 내부에 존재하는 소스코드를 말한다. 모듈 내부의 함수, 클래스 등의 내부 코드는 포함되지 않음

모듈 코드는 모듈별로 독립적인 모듈 스코프를 생성 한다.
이를 위해 모듈 코드가 평가되면 모듈 실행 컨텍스트가 생성 된다.


여기서 평가란?
- 코드가 계산(Evaluation) 되어 값을 만드는 것

예...
const log = console.log;
log(1); // 1로 평가

log(1 + 2); //3으로 평가

log([1, 2]);    //[1, 2] 으로 평가

log([1, 2 + 3]);    //[1, 5] 으로 평가
*/

//소스코드의 평가와 실행

/*

자바스크립트엔진은 소스코드를 2개의 과정. '소스코드의 평가' 와 '소스코드의 실행' 과정으로 나누어 처리

소스코드 평가 과정에서는 실행 컨텍스트를 생성하고 변수, 함수 등의 선언문만 먼저 실행하여
 생성된 변수나 함수 식별자를 키로 실행 컨텍스트가 관리하는 스코프(렉시컬 환경의 환경 레코드)에 등록

소스코드 평가 과정이 끝나면 비로소 선언문을 제외한 소스코드가 순차적으로 실행되기 시작.
 즉 런타임이 시작된다. 이때 소스코드 실행에 필요한 정보, 변수나 함수의 참조를 실행 컨텍스트가 관리하는
스코프에서 검색해서 취득한다. 그리고 변수 값의 변경 등 소스코드의 실행 결과는 다시 실행 컨텍스트가 관리하는 스코프에 등록 됨.

예.
var x;
x=1;
코드에서 자바스크립트 엔진은 2개의 과정으로 나누어 처리.
1. 소스코드 평가 과정에서 변수 선언문 var x; 를 먼저 실행한다.
    이때 생성된 변수 식별자 x는 실행 컨텍스트가 관리하는 스코프에 등록되고 undefined 로 초기화됨.
    - 실행 컨텍스트 x : undefined
    
소스코드 평가 과정이 끝나면 소스코드 실행 과정이 시작됨.
2. 변수 선언문 var x; 는 소스코드 평가 과정에서 이미 실행이 완료되었다.
    따라서 소스코드 실행 과정에서는 변수 할당문 x=1; 만 실행된다.
    이때 x변수에 값을 할당하려면 먼저 x 변수가 선언된 변수인지 확인해야 한다.
    실행 컨텍스트가 관리하는 스코프에 x 변수가 등록되어 있는지 확인한다. 
    x 변수가 선언된 변수라면 값을 할당하고 할당 결과를 실행 컨텍스트에 등록하여 관리한다.
    - 실행 컨택스트 x : 1

*/

//전역 코드와 함수 코드로 구성된 예제

//전역 변수 선언
const x = 1;
const y = 2;

//함수 선언
function foo(a) {
    //지역 변수 선언
    const x = 10;
    const y = 20;

    //메서드 호출
    console.log(a + x + y); //130
}

foo(100);

console.log(x + y); //3

/*
순서
1. 전역 코드 평가
2. 전역 코드 실행
3. 함수 코드 평가
4. 함수 코드 실행

코드가 실행되려면 스코프, 식별자, 코드 실행 순서 등의 관리가 필요.
1. 선언에 의해 생성된 모든 식별자(변수, 함수, 클래스 등)를 스코프를 구분하여 등록하고
    상태 변화(식별자에 바인딩된 값의 변화)를 지속적으로 관리할 수 있어야 한다.
2. 스코프는 중첨 관계에 의해 스코프 체인을 형성해야 한다.
    스코프 체인을 통해 상위 스코프로 이동하여 식별자를 검색할 수 있어야 한다.
3. 현재 실행 중인 코드의 실행 순서를 변경(예를 들어, 함수 호출에 의한 실행 순서 변경) 할 수 있어야 하며
    다시 되돌아갈 수도 있어야 한다.

이 모든 것을 관리하는 것은 바로 실행 컨텍스트.
실행 컨텍스트는 소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역.
 실행 컨텍스트는 식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로,
모든 코드는 실행 컨텍스트를 통해 실행되고 관리됨.

식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고
 코드 실행 순서는 실행 컨텍스트 스택으로 관리함.
*/