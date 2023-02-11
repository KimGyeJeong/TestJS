//Array.prototype.pop
//pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환함.
//원본 배열이 빈 배열이면 undefined를 반환함.
const arr_1 = [1, 2, 3];

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환함
let result_1 = arr_1.pop();
// pop 메서드는 원본 배열을 직접 변경함
console.log(arr_1); // [1, 2]

arr_1.push(4);
console.log(arr_1); // [1, 2, 4]

/*
스택(stack)은 데이터를 마지막에 밀어 넣고, 마지막에 밀어 넣은 데이터를 먼저 꺼내는 후입 선출(LIFO-Last In First Out)방식의 자료구조
스택에 데이터를 밀어 넣는 것을 푸시(push)라고 하고, 데이터를 꺼내는 것을 팝(pop)이라고 함
 */

//스택을 생성자 함수로 구현해 보면 다음과 같음
const Stack_1 = (function () {
    function Stack_1(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }

    Stack_1.prototype = {
        constructor: Stack_1,
        // 스택의 가장 마지막에 데이터를 밀어 넣음
        push(value) {
            return this.array.push(value);
        },
        // 스택의 가장 마이막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼냄
        pop() {
            return this.array.pop();
        },
        // 스택의 복사본 배열을 반환함
        entries() {
            return [...this.array];
        }
    };
    return Stack_1;
}());

const stack_1 = new Stack_1([1, 2]);
console.log(stack_1); // Stack_1 { array: [ 1, 2 ] }
console.log(stack_1.entries()); // [ 1, 2 ]

stack_1.push(3);
console.log(stack_1); // Stack_1 { array: [ 1, 2, 3 ] }
console.log(stack_1.entries()); // [ 1, 2, 3 ]

stack_1.pop();
console.log(stack_1); // Stack_1 { array: [ 1, 2 ] }
console.log(stack_1.entries()); // [ 1, 2 ]

//스택을 클래스로 구현해 보기
class Stack_2 {
    #array; // #을 붙이면 private 필드가 됨

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.#array = array;
    }

    // 스택의 가장 마지막에 데이터를 밀어 넣음
    push(value) {
        return this.#array.push(value);
    }

    // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼냄
    pop() {
        return this.#array.pop();
    }

    // 스택의 복사본 배열을 반환함
    entries() {
        return [...this.#array];
    }
}

const stack_2 = new Stack_2([1, 2]);
console.log(stack_2); // Stack_2 { #array: [ 1, 2 ] }
console.log(stack_2.entries()); // [ 1, 2 ]

stack_2.push(3);
console.log(stack_2.entries()); // [ 1, 2, 3 ]

stack_2.pop();
console.log(stack_2.entries()); // [ 1, 2 ]


//Array.prototype.unshift
//unshift 메서드는 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환함
//unshift 메서드는 원본 배열을 직접 변경함

const arr_2 = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length값을 반환함
let result_2 = arr_2.unshift(3, 4);
console.log(result_2); // 4
// unshift 메서드는 원본 배열을 직접 변경함.
console.log(arr_2); // [ 3, 4, 1, 2 ]

//unshift 메서드는 원본 배열을 직접 변경하는 부수 효과가 있음.
const arr_3 = [1, 2];

//ES6 스프레드 문법
//unshift보다 스프레드 문법이 더 좋음. 함수 호출 없이 표현식으로 선두에 요소를 추가 할 수 있으며 부수 효과도 없음.
const new_arr_3 = [3, 4, ...arr_3];
console.log(arr_3); // [ 1, 2 ]
console.log(new_arr_3); // [ 3, 4, 1, 2 ]

//Array.prototype.shift
//shift메서드는 원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환함.
//원본 배열이 빈 배열이면 undefined를 반환함. shift 메서드는 원본 배열을 직접 변경함
const arr_4 = [1, 2, 3, 4];
console.log(arr_4); // [ 1, 2, 3, 4 ]

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환함
let result_4 = arr_4.shift();
console.log(result_4); // 1

// shift 메서드는 원본 배열을 직접 변경함
console.log(arr_4); // [ 2, 3, 4 ]

