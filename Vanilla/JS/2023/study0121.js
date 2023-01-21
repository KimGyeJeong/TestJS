// ES6 이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있음.
//ES6이전의 함수는 동일한 함수라도 다양한 형태로 호출할 수 있음
var foo_1 = function(){
    return 1;
}
//일반적인 함수로서 호출
foo_1(); //1
console.log(foo_1()); //1

//생성자 함수로서 호출
new foo_1(); //foo_1{}
console.log(new foo_1()); //foo_1{}

//메서드로서 호출
var obj_1 = {foo_1 : foo_1};
obj_1.foo_1(); //1
console.log(obj_1.foo_1()); //1

var foo_2 = function(){
    console.log('foo_2');
}
//ES6 이전의 모든 함수는 callable이면서 constructor다
foo_2(); // -> undefined
new foo_2(); // -> foo_2{}

console.log(foo_2()); // -> undefined
console.log(new foo_2()); // -> foo_2{}


// 프로퍼티 f에 바인딩된 함수는 callabale 이며 constructor 다.
var obj_2 = {
    x:10,
    f:function(){
        return this.x;
    }
};
//프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(obj_2.f()); //10

//프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
var bar_1 = obj_2.f;
console.log(bar_1()); //undefined

//프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj_2.f()); //f {}