// this
//화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 this다.
// 그리고 화살표 함수는 다른 함수의 인수로 전달되어 콜백 함수로 사용되는 경우가 많음

class Prefixer{
    constructor(prefix){
        this.prefix = prefix;
    }
    add(arr){
        //add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가함
        // 프로토타입 메서드 내부에서 this는 메서드를 호출한 객체(여기에서는 prefixer객체)를 가리킴
        return arr.map(function(item){
            //Array.prototype.map의 인수로 전달한 콜백함수 내부에서의 this는 undefined를 가리킴
            return this.prefix + item;  // TypeError: Cannot read properties of undefined (reading 'prefix')
        });
    }
}

const prefixer = new Prefixer('-webkit-');
// console.log(prefixer.add(['transition','user-select']));

//ES6 이전에는 콜백 함수 내부의 this 문제를 해결하기 위해 사용한 방법
// 1. add 메서드를 호출한 prefixer 객체를 가리키는 this를 일단 회피시킨 후에 콜백 함수 내부에서 사용
/*
...
add(arr){
    const that = this;      // this를 일단 회피시킴
        return arr.map(function(item){
            return that.prefix + item;      // this 대신 that을 사용
        });
    }
...
 */

// 2. Array.prototype.map의 두 번째 인수로 add 메서드를 호출한 prefixer 객체를 가리키는 this를 전달함
// ES5에서 도입된 Array.prototype.map은 "콜백 함수 내부의 this 문제"를 해결하기 위해 두 번째 인수로 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있음
/*
...
add(arr){
        return arr.map(function(item){
            return this.prefix + item;
        }, this);  // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩 됨
    }
...
 */

// 3. Function.prototype.bind 메서드를 사용하여 add 메서드를 호출한 prefixer 객체를 가리키는 this를 바인딩 함
/*
...
add(arr){
        return arr.map(function(item){
            return this.prefix + item;
        }.bind(this));  // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩 됨
    }
...
 */

/////////////
//ES6에서는 화살표 함수를 사용하여 "콜백 함수 내부의 this문제"를 해결할 수 있음
class Prefixer_{
    constructor(prefix){
        this.prefix = prefix;
    }
    add(arr){
        return arr.map((item) => this.prefix + item);  // 화살표 함수는 자신의 this, arguments, super, new.target 바인딩을 갖지 않음
    }
}

const prefixer_ = new Prefixer_('-webkit-');
console.log(prefixer_.add(['transition','user-select']));   // ['-webkit-transition', '-webkit-user-select']
// 화상표 함수는 함수 자체의 this 바인딩을 갖지 않음. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조함. 이를 lexical this라 함.


//화살표 함수를 Function.prototype.bind를 사용하여 표현하면 다음과 같음
// 화살표 함수는 상위 스코프의 this를 참조함
console.log(() => this.x);  //[Function (anonymous)]

// 익명 함수에 상위 스코프의 this를 주입함. 위 화살표 함수와 동일하게 동작
console.log(function(){ return this.x }.bind(this));  //[Function : bound]


//만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this 바인딩이 없으므로 스코프체인 상에서 가장 가까운 상위 함수중에서 화살표 함수가 아닌 함수의 this를 참조함
// 중첩 함수 foo의 상위 스코프는 즉시 실행 함수다. 따라서 화살표 함수 foo의 this는 상위스코프인 즉시 실행 함수의 this를 가리킴
(function () {
    const foo = () => console.log(this);
    foo();
}).call({ x: 1 });  // { x: 1 }

// bar 함수는 화살표 함수를 반환함.
// bar 함수가 반환한 화살표 함수의 상위 스코프는 화살표 함수 bar다
// 하지만 화살표 함수는 함수 자체의 this 바인딩을 갖지않으므로 bar 함수가 반환한 화살표 함수 내부에서 참조하는 this는 화살표 함수가 아닌 즉시 실행 함수의 this를 가리킴
(function (){
    const bar = () => () => console.log(this);
    bar()();
}).call({ x: 1 });  // { x: 1 }

//만약 화살표 함수가 전역 함수라면 화살표 함수의 this는 전역 객체를 가리킴. 전역 함수의 상위 스코프는 전역이고 전역에서 this는 전역 객체를 가리키기 때문
// 전역 함수 foo의 상위 스코프는 전역이므로 화살표 함수 foo의 this는 전역 객체를 가리킴
const foo = () => console.log(this);
foo();  // window   실제 출력 : {}

//프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this 를 참조함
// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역임
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킴
const counter = {
    num : 1,
    increase : () => ++this.num,
};
console.log(counter.increase());  // NaN

//화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에 Function.prototype.call, Function.prototype.apply, Function.prototype.bind 메서드를 사용해도 화살표 함수 내부의 this를 교체할 수 없다.
// window.x = 1;   // ReferenceError: window is not defined ???????
x = 1;
const normal = function(){return this.x;};
const arrow = () => this.x;

console.log(normal.call({ x: 10 }));  // 10
console.log(arrow.call({ x: 10 }));  // 1

//화살표 함수가 Function.prototype.call, Function.prototype.apply, Function.prototype.bind 메서드를 호출할 수 없다는 의미는 아니다.
//화살표 함수는 함수 자체의 this 바인딩을 갖지 않기 때문에 this를 교체할 수 없고 언제나 상위 스코프의 this 바인딩을 참조함
const add = (a,b) => a+b;
console.log(add.call(null, 1, 2));  // 3
console.log(add.apply(null, [1, 2]));  // 3
console.log(add.bind(null, 1, 2)());  // 3

console.log(add(1,2));  // 3

//메서드를 화살표 함수로 정의하는 것은 피해야 한다.
// 좋지 않은 예.
const person_1 = {
    name : 'Kim',
    sayHi : () => console.log(`Hi ${this.name}`),
};
/*
sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는 전역 객체를 가리키므로 이 예제를 브라우저에서 실행하면 this.name은
빈 문자열을 갖는 window.name과 같다. 전역 객체 window에는 빌트인 프로퍼티 name이 존재함
 */
person_1.sayHi();  // Hi undefined