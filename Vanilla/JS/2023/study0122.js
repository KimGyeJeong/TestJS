const base_1 = {
    name : 'kim',
    sayHi(){
        return `Hi! ${this.name}`;
    }
};

const derived_1 = {
    __proto__ : base_1,

    //sayHi 는 ES6 메서드다. ES6 메서드는 [[HomeObject]]를 갖는다.
    //sayHi 의 [[HomeObject]]는 sayHi가 바인딩된 객체의 derived를 가리키고
    //super는 sayHi의  [[HomeObject]]의 프로토타입인 base 를 가리킴
    sayHi(){
        return `${super.sayHi()}. how are you doing??`;
    }
}

console.log(derived_1.sayHi());

//ES6 메서드가 아닌 함수는 super 키워드를 사용할 수 없음. ES6메서드가 아닌 함수는 내부 슬롯 [[HomeObject]]를 갖지 않기 때문
const derived_2 = {
    __proto__: base_1,
    //sayHi는 ES6메서드가 아님
    //따라서 sayHi는 [[HomeObject]]를 갖지 않으므로 super키워드를 사용할 수 없음
    sayHi : function(){
        // SyntaxError: 'super' keyword unexpected here
        // return `${super.sayHi()}. how are you doing?????`;
    }
};
console.log(derived_2.sayHi());