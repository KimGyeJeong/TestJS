// Rest 파라미터와 arguments 객체
//ES5 에서는 함수를 정의할 때 매개변수의 개수를 확정할 수 없는 가변 인자 함수의 경우 매개변수를 통해 인수를 전달받는 것이 불가능 하므로 arguments 객체를 활용하여 인수를 전달받았음
//arguments 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회 가능한 유사 배열 객체(arrat-like object)이며, 함수 내부에서 지역 변수처럼 사용할 수 있음

// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
function sum_1(){
    // 가변 인자 함수는 arguments 객체를 통해 인수를 전달 받음
    console.log(arguments);
}

sum_1(1,2); // [Arguments] { '0': 1, '1': 2 }


//하지만 arguments 객체는 배열이 아닌 유사 배열 객체이므로 배열 메서드를 사용하려면 Function.prototype.call 이나 Function.prototype.apply 메서드를 사용해 arguments 객체를 배열로 변환해야 하는 번거로움이 있음
function sum_2(){
    // 유사 배열 객체인 arguments 객체를 배열로 변환 함
    var array = Array.prototype.slice.call(arguments);

    return array.reduce(function(pre, cur){
        return pre + cur;
    }, 0);
}

console.log(sum_2(1,2,3,4,5)); // 15


//ES6 에서는 rest 파라미터를 사용하여 가변 인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다.
//이를통해 유사 배열 객체인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있음
function sum_3(...args){
    // Rest 파라미터 args 에는 배열 [1, 2, 3, 4, 5] 가 할당됨
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum_3(1,2,3,4,5,6)); // 21

/*
함수와 ES6 메서드는 Rest 파라미터와 arguments 객체를 모두 사용할 수 있음
하지만 화살표 함수는 함수 자체의 arguments 객체를 갖지 않음.
따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 Rest 파라미터를 사용해야 함
 */

// 매개변수 기본 값
/*
함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 바람직 하지만 그렇지 않은 경우에도 에러가 발생하지 않음.
이는 자바스크립트 엔진이 매개변수의 개수와 인수의 개수를 체크하지 않기 때문
 */

//인수가 전달되지 않은 매개변수의 값은 undefined 이다.
//이를 방치하면 아래 예제와 같이 의도치 않은 결과가 나올 수 있음
function sum_4(x, y){
    return x + y;
}

console.log(sum_4(1)); // NaN

//따라서 아래 예제와 같이 매개변수에 인수가 전달되었는지 확인하여 인수가 전달되지 않은 경우 매개변수에 기본값을 할당할 필요가 있음.
//즉 방어코드가 필요함
function sum_5(x,y){
    // 인수가 전달되지 않은 매개변수의 값은 undefined 이므로 기본값을 할당해야 함
    x = x || 0;
    y = y || 0;

    return x + y;
}

console.log(sum_5(1)); // 1
console.log(sum_5(1,2)); // 3

console.log('------------------');

//ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있음
function sum_6(x = 0, y = 0){
    return x + y;
}

console.log(sum_6(1)); // 1
console.log(sum_6(1,2)); // 3

console.log('------------------');

//매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효함
function longName(name='kim'){
    console.log(name);
}

longName(); // kim
longName(undefined); // kim
longName(null); // null

//앞에 살펴본 Rest 파라미터에는 기본값을 지정할 수 없음
// function foo_1(...rest = []) {
//     console.log(rest);  //SyntaxError: Rest parameter may not have a default initializer
// }

//매개변수 기본값은 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않음
function sum_7(x, y = 0){
    console.log(arguments);
}

console.log(sum_7.length); // 1

sum_7(1); // Arguments(1) [1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
sum_7(1,2); // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]


console.log('------------------');

