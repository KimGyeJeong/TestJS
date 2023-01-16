/*
정적 메서드와 프로토타입 메서드의 차이
- 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
- 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로호출한다.
- 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있음.
 */

class Square_static{
    //정적 메서드
    static area(width, height){
        return width * height;
    }
}

console.log(Square_static.area(10,10)); //100
// 정적 메서드 area는 인스턴스 프로퍼티를 참조하지 않음.
// 만약 인스턴스 프로퍼티를 참조해야 한다면 정적 메서드는 대신 프로토타입 메서드를 사용해야 함.

class Square_prototype{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    //프로토타입 메서드
    area(){
        return this.width * this.height;
    }
}

const square_prototype = new Square_prototype(10, 10);
console.log(square_prototype.area()); //100


// 표준 빌트인 객체의 정적 메서드
console.log(Math.max(1,2,3));   //3
console.log(Number.isNaN(NaN));     //true
console.log(JSON.stringify({a:1, b:2}));  //{"a":1,"b":2}
console.log(Object.is({},{}));  //false
console.log(Reflect.has({a:1}, 'a')); //true
// 이처럼 클래스 또는 생성자 함수를 하나의 네임스페이스(namespace)로 사용하여 정적 메서드를 모아 놓으면 이름 충돌 가능성을 줄여 주고 관련 함수들을 구조화할 수 있는 효과가 있음.
// 정적 메서드는 애플리케이션 전역에서 사용할 유틸리티 함수를 전역 함수로 정의하지 않고 메서드로 구조화할 때 유용함.