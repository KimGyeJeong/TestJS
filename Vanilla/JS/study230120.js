// 상속 클래스의 인스턴스 생성 과정
class Rectangle_1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `width: ${this.width}, height: ${this.height}`;
    }
}

class ColorRectangle_1 extends Rectangle_1 {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }

    //메서드 오버라이딩
    toString() {
        return super.toString() + `, color: ${this.color}`;
    }
}

const colorRectangle_1 = new ColorRectangle_1(2, 4, 'black');
console.log(colorRectangle_1); // ColorRectangle_1 { width: 2, height: 4, color: 'black' }

// 상속을 통해 getArea 메서드를 호출
console.log(colorRectangle_1.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle_1.toString()); // width: 2, height: 4, color: black


//1, 서브클래스의 super 호출
// 서브클래스는 자신이 직접 인스턴스를 생성하지 ㅇ낳고 수퍼클래스에게 인스턴스 생성을 위임함.
// 서크블래스의 constructor에서 반드시 super를 호출해야 하는 이유이다

//2. 수퍼클래스의 인스턴스 생성과 this바인딩
class Rectangle_2 {
    constructor(width, height) {
        //암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this 가 바인딩 됨
        console.log(this); // Rectangle_2 {}
        // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle_2를 가리킴
        console.log(new.target); // [Function: ColorRectangle_2]
    }
}

class ColorRectangle_2 extends Rectangle_2 {

}

console.log(new Rectangle_2(2, 4)); // Rectangle_2 {}
//인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리됨.

console.log(Object.getPrototypeOf(this) === ColorRectangle_2.prototype);
console.log(this instanceof ColorRectangle_2); // true
console.log(this instanceof Rectangle_2); // true

//3. 수퍼클래스의 인스턴스 초기화
// 수퍼클래스의 constructor가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화함
// 즉, this에 바인딩 되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화 함.

//4. 서브클래스 constructor로의 복귀와 this 바인딩
// super의 호출이 종료되고 제어 흐름이 서브클래스 constructor로 돌아옴.
// 이때 super가 반환한 인스턴스가 this에 바인딩 됨.
//서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환됨 인스턴스를 this에 바인딩하여 그대로 사용함

//5. 서브클래스의 인스턴스 초기화
// super 호출 이후, 서브클래스의 constructor에 기술되어 있는 인스턴스 초기화가 실행됨.
// 즉, this에 바인딩되어있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기값으로 인스턴스의 프로퍼티를 초기화 함.

//6. 인스턴스 반환
// 클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환 됨.


// --------------------------------

//표준 빌트인 생성자 함수 확장
// [[Construct]] 내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식을 사용할 수 있다.
// String, Number, Array 같은 표준 빌트인 객체도 [[Construct]] 내부 메서드를 갖는 생성자 함수이므로 extends 키워드를 사용하여 확장 할 수 있음

// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray_1 extends Array {
    // 중복된 배열 요소를 제거하고 반환함 : [1,1,2,3] -> [1,2,3]
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    //모든 배열 요소의 평균을 구한다: [1,2,3] -> 2
    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray_1 = new MyArray_1(1, 2, 3, 4);
console.log(myArray_1); // MyArray_1(4) [1, 2, 3, 4]

//MyArray_1.prototype.unique 호출
console.log(myArray_1.uniq()); // (4) [1, 2, 3, 4]
//MyArray_1.prototype.average 호출
console.log(myArray_1.average()); // 2.5

//Array 생성자 함수를 상속받아 확장한 MyArray_1 클래스가 생성한 인스턴스는 Array.prototype 과 MyArray_1.prototype의 모든 메서드를 사용할 수 있음
// 이때 주의할 것은 Array.prototype의 메서드 중에서 map.filter와 같이 새로운 배열을 반환하는 메서드가 MyArray_1 클래스의 인스턴스를 반환한다는 것.
console.log(myArray_1.filter(v => v % 2) instanceof MyArray_1); // true

//만약 새로운 배열을 반환하는 메서드가 MyArray_1 클래스의 인스턴스를 반환하지 않고 Array의 인스턴스를 반환하면 MyArray_1 클래스의 메서드와 메서드 체이닝(method chaining)이 불가능 함


//Array 생성자 함수를 상속받아 확장한 MyArray_2
class MyArray_2 extends Array {
    // 모든 메서드가 Array 타입의 인스턴스를 반환하도록 한다
    static get [Symbol.species]() {
        return Array;
    }

    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray_2 = new MyArray_2(1, 2, 3, 4);

console.log(myArray_2.uniq() instanceof  MyArray_2);    // false
console.log(myArray_2.uniq() instanceof  Array);    // true

//메서드 체이닝
//uniq 메서드는 Array 인스턴스를 반환하므로 average 메서드를 호출할 수 없음
// console.log(myArray_2.uniq().average()); // myArray_2.uniq(...).average is not a function


console.log(myArray_2.uniq());  // [1, 2, 3, 4]
console.log(myArray_2.average());   // 2.5