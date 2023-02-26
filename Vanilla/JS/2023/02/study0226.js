// 배열 고차 함수
/*
자바스크립트의 함수는 일급 객체 이므로 함수를 값처럼 인수로 전달할 수 있으며 반환할 수도 있음
고차 함수는 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있음

함수형 프로그래밍은 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다.
순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력이다.
 */

//Array.prototype.sort
//sort 메서드는 배열의 요소를 정렬함. 원본 배열을 직접 변경하며 정렬된 배열을 반환함. 기본적으로 오름차순으로 요소를 정렬함
const fruits_a = ['Banana', 'Orange', 'Apple', 'Mango'];
const fruits_ㄱ = ['바나나', '오렌지', '사과', '망고'];

//오름차순으로 정렬
console.log(fruits_a.sort()); //["Apple", "Banana", "Mango", "Orange"]
console.log(fruits_ㄱ.sort()); //[ '망고', '바나나', '사과', '오렌지' ]


const points_1 = [40, 100, 1, 5, 25, 10];
points_1.sort();
console.log(points_1); //[1, 10, 100, 25, 40, 5]

console.log(['2', '1'].sort()); //["1", "2"]
console.log([2, 1].sort()); //[1, 2]

console.log(['2', '10'].sort()); //["10", "2"]
console.log([2, 10].sort()); //[10, 2]

//숫자 요소를 정렬할 때는 sort메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 함
const points_2 = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름차순 정렬, 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬함
points_2.sort((a, b) => a - b);
console.log(points_2); //[1, 2, 5, 10, 25, 40, 100]

// 숫자 배열에서 최소/최대값 취득
console.log(points_2[points_2.length - 1], points_2[0]); //100 1


const todos_1 = [
    {id: 4, content: 'JavaScript'},
    {id: 1, content: 'HTML'},
    {id: 2, content: 'CSS'}
];

// 비교 함수. 매개변수 key는 프로퍼티 키다
function compare_1(key) {
    // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용함
    // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

// id를 기준으로 오름차순 정렬
todos_1.sort(compare_1('id'));
console.log(todos_1);
/*
[
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' },
  { id: 4, content: 'JavaScript' }
]
 */

// content를 기준으로 오름차순 정렬
todos_1.sort(compare_1('content'));
console.log(todos_1);
/*
[
  { id: 2, content: 'CSS' },
  { id: 1, content: 'HTML' },
  { id: 4, content: 'JavaScript' }
]
 */

//Array.prototype.forEach
//조건문과 반복문을 제거하여 복잡성을 해결, 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
const numbers_1 = [1, 2, 3, 4, 5];
let pows_1 = [];

// for문으로 배열 순회
for (let i = 0; i < numbers_1.length; i++) {
    pows_1.push(numbers_1[i] ** 2);
}
console.log(pows_1); //[1, 4, 9, 16, 25]

pows_1 = [];
console.log(pows_1); //[]
// forEach 메서드로 배열 순회
numbers_1.forEach(i => pows_1.push(i ** 2));
console.log(pows_1); //[1, 4, 9, 16, 25]


// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달함
[1, 2, 3].forEach((item, index, array) => {
    console.log(`요소값 : ${item}, 인덱스 : ${index}, 배열 : ${array}, this : ${JSON.stringify(array)}`);
});

//forEach 메서드는 원본 배열을 변경하지 않지만, 콜백함수를 통해 원본 배열을 변경할 수는 있음
const numbers_2 = [1, 2, 3, 4, 5];
/*
forEach메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있음
콜백함수의 세 번째 매개변수 arr은 원본 배열 numbers를 가리킴
따라서 콜백 함수의 세 번째 매개변수 arr을 직접 변경하면 원본 배열 numbers가 변경됨
 */
numbers_2.forEach((item, index, arr) => {
    arr[index] = item ** 2;
});
console.log(numbers_2); //[1, 4, 9, 16, 25]

//forEach 메서드의 반환값은 언제나 undefined다.
const result_1 = [1, 2, 3].forEach(item => item ** 2);
console.log(result_1); //undefined

//forEach 메서드의 두 번째 인수로 forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있음
// class Numbers_3{
//     numberArray = [];
//     multiply(arr){
//         arr.forEach(function(item){
//             //TypeError: Cannot read properties of undefined (reading 'numberArray')
//             this.numberArray.push(item * item);
//         });
//     }
// }
//
// const numbers_3 = new Numbers_3();
// numbers_3.multiply([1, 2, 3]);

class Numbers_4 {
    numberArray = [];

    multiply(arr) {
        arr.forEach(function (item) {
            //TypeError: Cannot read properties of undefined (reading 'numberArray')
            this.numberArray.push(item * item);
        }, this);
    }
}

const numbers_4 = new Numbers_4();
numbers_4.multiply([1, 2, 3]);
console.log(numbers_4.numberArray); //[1, 4, 9]

class Numbers_5 {
    numberArray = [];

    multiply(arr) {
        arr.forEach(item => this.numberArray.push(item * item));
    }
}

const numbers_5 = new Numbers_5();
numbers_5.multiply([1, 2, 3]);
console.log('numbers_5 : ', numbers_5.numberArray); //[1, 4, 9]


//Array.prototype.map
//콜백 함수의 반환값들로 구성된 배열을 반환함. 원본 배열은 변경되지 않음
const numbers_6 = [1, 2, 3, 4, 5];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출함
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환함
const roots_6 = numbers_6.map(i => Math.sqrt(i));

// 위 코드는 아래 코드와 동일함
// const roots_6 = numbers_6.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환함
console.log(roots_6); //[1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]
console.log(numbers_6); //[1, 2, 3, 4, 5]

/*
forEach 메서드와 map 메서드의 공통점은 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다.
하지만 forEach 메서드는 언제나 undefined를 반환하고, map 메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환하는 차이가 있음.

forEach 메서드는 단순히 반복문을 대체하기 위한 고차함수
map 메서드는 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수
 */

// map 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스 this)의 인수를 전달함
[1, 2, 3].map((item, index, arr) => {
    console.log(`item : ${item}, index : ${index}, arr : ${arr}, this : ${JSON.stringify(arr)}`);
    return item;
});
/*
item : 1, index : 0, arr : 1,2,3, this : [1,2,3]
item : 2, index : 1, arr : 1,2,3, this : [1,2,3]
item : 3, index : 2, arr : 1,2,3, this : [1,2,3]
 */

//Array.prototype.filter
//콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환함
const numbers_7 = [1, 2, 3, 4, 5];

// filter 메서드는 numbers_7 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출함
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환함
// 다음의 경우 number_7 배열에서 홀수인 요소만 필터링함(1은 true로 평가됨)
const odds_7 = numbers_7.filter(i => i % 2);
console.log(odds_7); //[1, 3, 5]
console.log(numbers_7); //[1, 2, 3, 4, 5]

/*
forEach 메서드는 항상 undefined를 반환함
map 메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환함
filter 메서드는 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환함

filter 메서드가 생성하여 반환한 새로운 배열의 length 프로퍼티 값은 filter 메서드를 호출한 배열의 length 프로퍼티 값과 같거나 작음
 */

console.log([1, 2, 3, 4, 5].filter(i => i !== 1)); //[2, 3, 4, 5]

[1, 2, 3, 4, 5].filter((value, index, array) => {
    console.log(`value : ${value}, index : ${index}, array : ${array}. this : ${JSON.stringify(array)}`);
    return value % 2;
});

//////////////////////
class Users_8{
    constructor(){
        this.users = [
            {id: 1, name: 'Kim', age: 32},
            {id: 2, name: 'Lee', age: 25},
        ];
    }
    //요소 추출
    findById(id){
        return this.users.find(user => user.id === id);
    }
    //요소 제거
    removeById(id){
        this.users = this.users.filter(user => user.id !== id);
    }
}
const users_8 = new Users_8();

let user_8 = users_8.findById(1);
console.log(user_8); //{id: 1, name: 'Kim', age: 32}
console.log(users_8.users); //[{id: 1, name: 'Kim', age: 32}, {id: 2, name: 'Lee', age: 25}]
console.log(user_8.name); //Kim

user_8 = users_8.removeById(1);
console.log(user_8); //undefined
console.log(users_8.users); //[{id: 2, name: 'Lee', age: 25}]

//filter메서드를 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어 있다면 중복된 요소가 모두 제거됨.
//특정 요소를 하나만 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice 메서드를 사용함

