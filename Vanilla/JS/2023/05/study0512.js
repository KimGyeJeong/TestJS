//디스트럭처링 할당(destructuring assignment. 구조분해할당) : 구조화된 배열과 같은 이터러블 또는 객체를 destructuring(비구조화, 파괴)하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다.

//ES5
var arr_1 = [1, 2, 3];

var one_1 = arr_1[0];
var two_1 = arr_1[1];
var three_1 = arr_1[2];

console.log(one_1, two_1, three_1); // 1 2 3


//배열 디스트럭처링 할당의 대상(할당문의 우변)은 이터러블이어야 하며, 할당 기준은 배열의 인덱스임. 즉, 순서대로 할당됨
const arr_2 = [1, 2, 3];

const [one_2, two_2, three_2] = arr_2;
console.log(`one_2 : ${one_2}, two_2 : ${two_2}, three_2 : ${three_2}`); // 1 2 3


const [x_3, y_3] = [1, 2];
console.log(`x_3 : ${x_3}, y_3 : ${y_3}`); // 1 2

let x_4, y_4;
[x_4, y_4] = [1, 2];
console.log(`x_4 : ${x_4}, y_4 : ${y_4}`); // 1 2

const [a_5, b_5] = [1];
console.log(`a_5 : ${a_5}, b_5 : ${b_5}`); // 1 undefined

const [c_5, d_5] = [1, 2, 3];
console.log(`c_5 : ${c_5}, d_5 : ${d_5}`); // 1 2

const [e_5, , g_5] = [1, 2, 3];
console.log(`e_5 : ${e_5}, g_5 : ${g_5}`); // 1  3

const [h_5, ...i_5] = [1, 2, 3];
console.log(`h_5 : ${h_5}, i_5 : ${i_5}`); // 1 2,3

const [j_5, [k_5, l_5]] = [1, [2, 3]];
console.log(`j_5 : ${j_5}, k_5 : ${k_5}, l_5 : ${l_5}`); // 1 2 3

const [m_5, n_5, o_5 = 3] = [1, 2];
console.log(`m_5 : ${m_5}, n_5 : ${n_5}, o_5 : ${o_5}`); // 1 2 3


//배열 디스트럭처링 할당을 위한 변수에 Rest 파라미터와 유사하게 Rest 요소(Rest element)를 사용할 수 있다
//Rest 요소는 Rest 파라미터와 마찬가지로 반드시 마지막에 위치해야 함
const [x_6, ...y_6] = [1, 2, 3];
console.log(`x_6 : ${x_6}, y_6 : ${y_6}`); // 1 [2,3]


//ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야 함
var user_7 = {firstName: 'F_NAME', lastName: 'L_NAME'};
var firstName_7 = user_7.firstName;
var lastName_7 = user_7.lastName;

console.log(`firstName_7 : ${firstName_7}, lastName_7 : ${lastName_7}`); // F_NAME L_NAME

const user_8 = {firstName_8: 'F_NAME', lastName_8: 'L_NAME'};
console.log(`user_8 : ${user_8}`); // [object Object]
const {lastName_8, firstName_8} = user_8;
console.log(`user_8 : ${user_8}, firstName_8 : ${firstName_8}, lastName_8 : ${lastName_8}`); // [object Object] F_NAME L_NAME

const {lastName_9, firstName_9} = {firstName_9: 'F_NAME', lastName_9: 'L_NAME'};
console.log(`firstName_9 : ${firstName_9}, lastName_9 : ${lastName_9}`); // F_NAME L_NAME

// 아래의 두줄은 동치다
const {lastName_10, firstName_10} = user_8;
const {lastName_10: ln, firstName_10: fn} = user_8;

const user_11 = {firstName_11: 'FIRSTNAME', lastName_11: 'LASTNAME'};

// 프로퍼티 키를 기준으로 디스트릭처럼 할당이 이루어짐
// 프로퍼티 키가 lastName인 프로퍼티값을 ln 에 할당하고
// 프로퍼티 키가 firstName인 프로퍼티 값을 fn에 할당함
const {firstName_11: fn_11, lastName_11: ln_11} = user_11;

console.log(fn_11, ln_11);

const str_12 = 'Hello';
// String 래퍼 객체로 부터  length 프로퍼티만 추출한다
const {length} = str_12;
console.log(length); // 5

const todo_12 = {id : 1, content : 'HTML', compiled : true};
// todo_12 객체로부터 iud 프로퍼티만 추출한다
const {id} = todo_12;
console.log(id); // 1

function printTODO_12(todo_12){
    console.log(`할일 ${todo_12.content} 은 ${todo_12.compiled ? '완료' : '비완료'} 상태입니다.`);
}
printTODO_12(todo_12);
printTODO_12({id : 2, content : 'CSS', compiled : false});
printTODO_12({content : 'JavaScript', compiled : false});

//객체를 인수로 전달받는 매개변수 todo에 객체 디스트럭처링 할당을 사용하면 좀 더 간단하고 가독성 좋게 표현할 수 있음
function printTODO_13({content, compiled}){
    console.log(`할일 ${content} 은 ${compiled ? '완료' : '비완료'} 상태입니다.`);
}
printTODO_13(todo_12);
printTODO_13({id : 1, content : 'CSS', compiled : false});

const todos = [
    { id_todos : 1, content : 'HTML', compiled : true},
    { id_todos : 2, content : 'CSS', compiled : false},
    { id_todos : 3, content : 'JavaScript', compiled : false}
];
// todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출함
const [,{id_todos}] = todos;
console.log(id_todos); // 2

//중첩 객체의 경우는 아래와 같이 사용함
const user_14 = {
    name : 'Kim',
    address : {
        zipCode : '012345',
        city : 'Seoul'
    }
};

//addreess 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출함
const {address : {city}} = user_14;
console.log(city); // Seoul

//Rest 프로퍼티
const { x_15, ...rest_15 } = { x_15 : 1, y_15 : 2, z_15 : 3 };
console.log(x_15, rest_15); // 1 {y_15 : 2, z_15 : 3}