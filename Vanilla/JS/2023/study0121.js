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

//콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor이며 프로타입을 생성함
let map_test = [1,2,3].map(function(e){
    return e*2;
});
console.log(map_test); //[2,4,6]

let map_test2 = [100, 200, 300].map((e)=>e*2);
console.log(map_test2); //[200, 400, 600]


//메서드
//ES6 이전 사양에는 메서드에 대한 명확한 정의가 없었음.
//일반적으로 메서드는 객체에 바인딩된 함수를 일컫는 의미로 사용되었다. ES6 사양에서는 메서드에 대한 정의가 명확하게 규정되었다.
// ES6 사양에서 메서드는 메서드 축양 표현으로 정의된 함수만을 의미함
const obj_3 = {
    x:1,
    //foo는 메서드다
    foo(){
        return this.x;
    },
    //bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
    bar : function(){
        return this.x;
    }
};
console.log(obj_3.foo()); //1
console.log(obj_3.bar()); //1

//ES6 사양에서 정의한 메서드(이하 ES6 메서드)는 인스턴스를 생성할 수 없는 non-constructor다.
// 따라서 ES6메서드는 생성자 함수로서 호출할 수 없음
// new obj_3.foo(); //TypeError: obj_3.foo is not a constructor
new obj_3.bar(); //bar{}
console.log(new obj_3.bar()); //bar{}

//ES6 메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다

//obj_3.foo 는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다
console.log(obj_3.foo.hasOwnProperty('prototype')); //false

//obj_3.bar 는 constructor만 일반 함수이므로 prototype 프로퍼티가 있다
console.log(obj_3.bar.hasOwnProperty('prototype')); //true