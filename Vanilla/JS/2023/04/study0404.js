//이터레이터
//이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖음

// 배열은 이터러블 프로토콜을 준수한 이터러블이다
const array_1 = [1,2,3];

// Symbol.iterator 메서드는 이터레이터를 반환함
const iterator_1 = array_1[Symbol.iterator]();

// Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖음
console.log(iterator_1.next()); // {value: 1, done: false}
console.log('next' in iterator_1); // true


//이터레이터의 next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 함
//next 메서드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체(iterator result object)를 반환 함

// next 메서드를 호출하면 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환함
// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖음
console.log(iterator_1.next()); // {value: 2, done: false}
console.log(iterator_1.next()); // {value: 3, done: false}
console.log(iterator_1.next()); // {value: undefined, done: true}


//for ... of 문
/*
for ... of 문은 이터러블을 순회하면서 이터러블의 요소를 변수에 할당함.
for ( 변수선언문 of 이터러블) { ... } 형태로 사용함

for ... of 문은 for ... in 문의 형식과 매우 유사함
for ( 변수선언문 in 객체) { ... }

for ... in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거(enumeration)함
아이때 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않음

for ... of 문은 내부적으로 이터레이터의 next 메서드를 호출하여 이터러블을 순회하며 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for ... of 문의 변수에 할당함.
그리고 이터레이터 리절트 객체의 done 프로퍼티 값이 false이면 이터러블의 순회를 계속하고 true이면 이터러블의 순회를 중단함
 */

for(const item_1 of [1,2,3]){
    // item 변수에 순차적으로 1, 2, 3이 할당됨
    console.log(item_1); // 1 2 3
}

//위의 예제의 for ,,, of 문의 내부 동작을 for문으로 표현하면 다음과 같음
// 이터러블
const iterable_2 = [1,2,3,4,5];

// 이터러블의 Symbol.iterator 메서드를 호출하여 이터레이터를 생성
const iterator_2 = iterable_2[Symbol.iterator]();

for(;;){
    // 이터레이터의 next 메서드를 호출하여 이터러블을 순회
    const {value, done} = iterator_2.next();
    // 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블의 순회를 중단
    if(done) break;
    // 이터레이터 리절트 객체의 value 프로퍼티 값을 변수에 할당
    const item_2 = value;
    console.log(item_2); // 1 2 3 4 5
}


//이터러블과 유사 배열 객체
//유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체를 말함
//length프로퍼티를 갖기 때문에 for문으로 순회할수 있고, 인덱스를 나타내는 숫자형식의 문자열을 프로퍼티 키로 가지므로 배열처럼 접근이 가능함

// 유사 배열 객체
const arrayLike_1 = {
    0: 1,
    1: 2,
    2: 3,
    3: '123',
    length: 4
};
console.log('------------------');
// 유사배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있음
for(let i = 0; i < arrayLike_1.length; i++){
    console.log(arrayLike_1[i]); // 1 2 3 123
    console.log(typeof arrayLike_1[i]); // number number number string
}

console.log('------------------');

for (let arrayLike1Key in arrayLike_1) {
    console.log(arrayLike1Key); // 0 1 2 3 length
}

// 유사 배열 객체는 이터러블이 아니기 때문에 for ... of 문으로 순회할 수 없음
// for(const item of arrayLike_1){
//     console.log(item); // TypeError: arrayLike_1 is not iterable
// }

console.log(Array.from(arrayLike_1)); // [1, 2, 3, "123"]

/*
이터레이션 프로토콜은 다양한 데이터 공급자가 하나의 순회 방식을 갖도록 규정하여 데이터 소비자가 효율적으로 다양한 데이터 공급자를 사용할 수 있도록
데이터 소비자와 데이터 공급자를 연결하는 인터페이스의 역할을 함
 */

//사용자 정의 이터러블
//이터레이션 프로토콜을 준수하지 않는 일반 객체도 이터레이션 프로토콜을 준수하도록 구현하면 사용자 정의 이터러블이 됨.
const fibonacci = {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수함
    [Symbol.iterator]() {
        let [pre, cur] = [0,1];
        const maxNum = 100; // 피보나치 수열의 최대값

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야 하고
        // next 메서드는 이터레이터 리절트 객체를 반환해야 함
        return {
            next(){
                [pre, cur] = [cur, pre + cur];
                // 이터레이터 리절트 객체를 반환함
                return { value : cur, done : cur >= maxNum };
            }
        };
    }
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출됨
for(const num of fibonacci){
    console.log(num); // 1 2 3 5 8 13 21 34 55 89
}


// 이터러블은 스프레드 문법의 대상이 될 수 있음
const arr_1 = [...fibonacci];
console.log(arr_1); // [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

arr_1.forEach(e => console.log(e)); // 1 2 3 5 8 13 21 34 55 89
arr_1.forEach(e => console.log(e+1)); // 2 3 4 6 9 14 22 35 56 90

// 이터러블은 배열 디스트릭처링 할당의 대상이 될 수 있음
const [first, second, ... rest] = fibonacci;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 5, 8, 13, 21, 34, 55, 89]

console.log(first, second, rest); // 1 2 [3, 5, 8, 13, 21, 34, 55, 89]

//위의 경우 최대값이 고정되어 있으므로 외부에서 전달한 값으로 변경할 수 있게 수정
const fibonacciFunction = (maxNum)=>{
    let [pre, cur] = [0,1];
    return {
        [Symbol.iterator](){
            return {
                next(){
                    [pre, cur] = [cur, pre + cur];
                    return { value : cur, done : cur >= maxNum };
                }
            };
        }
    };
};

console.log('------------------');
console.log(fibonacciFunction(100));    //{ [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]] }

for(const num of fibonacciFunction(100)){
    console.log(num); // 1 2 3 5 8 13 21 34 55 89
}


//이터러블이면서 이터레이터인 객체를 생성하는 함수
//이터레이터를 생성하려면 이터러블의 Symbol.iterator 메서드를 호출해야 함

const iterable_3 = fibonacciFunction(10);
console.log(iterable_3); // { [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]] }

const iterator_3 = iterable_3[Symbol.iterator]();
console.log(iterator_3); // { next: [Function: next] }
console.log(iterator_3.next()); // { value: 1, done: false }
console.log(iterator_3.next()); // { value: 2, done: false }
console.log(iterator_3.next()); // { value: 3, done: false }
console.log(iterator_3.next()); // { value: 5, done: false }
console.log(iterator_3.next()); // { value: 8, done: false }
console.log(iterator_3.next()); // { value: undefined, done: true }

//무한 이터러블과 지연 평가
//무한 이터러블을 생성하는 함수를 정의해보고 이를 통해 무한 수열을 간단히 구현하기

// 무한 이터러블을 생성하는 함수
const fibonacciFunction_2 = () => {
    let [pre, cur] = [0, 1];

    return{
        [Symbol.iterator](){return this;},
        next(){
            [pre, cur] = [cur, pre + cur];
            return { value : cur};
        }
    };
};

// fibonacciFunction_2 함수는 무한 이터러블을 생성함
for(const num of fibonacciFunction_2()){
    if(num > 1000) break;
    console.log(num);   // 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
}

// 배열 디스트릭처럼 할당을 통해 무한 이터러블에서 3개의 요소만 취득
const [f_1, f_2, f_3 ] = fibonacciFunction_2();
console.log(f_1, f_2, f_3);   // 1 2 3

// const [f1, f2, ...rest2] = fibonacciFunction_2();
//# Fatal error in , line 0
// # Fatal JavaScript invalid size error 169220804      무한으로 들어가기에 에러가 남

