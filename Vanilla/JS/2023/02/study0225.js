//slice 메서드가 복사본을 생성하는것을 이용하여 arguments, HTMLCollection, NodeList 같은 유사 배열 객체를 배열로 변환할 수 있음
function sum_1(){
    // 유사 배열 객체를 배열로 변환(ES5)
    var arr_1 = Array.prototype.slice.call(arguments);
    console.log(arr_1);

    return arr_1.reduce(function(pre, cur){
        return pre + cur;
    }, 0);
}

console.log(sum_1(1, 2, 3, 4, 5));  //15

//Array.from 메서드를 사용하면 더욱 간단하게 유사 배열 객체를 배열로 변환할 수 있음.
//Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 배열로 변환함
function sum_2(){
    const arr_2 = Array.from(arguments);
    console.log(`arr_2: ${arr_2}`);

    return arr_2.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum_2(1, 2, 3, 4, 5));  //15

///////
function sum_3(){
    // 이터러블을 배열로 변환(ES6 스프레드 문법)
    const arr_3 = [...arguments];
    console.log(`arr_3: ${arr_3}`);

    return arr_3.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum_3(1, 2, 3, 4, 5));  //15


//Array.prototype.join
//join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자(separator)로 연결한 문자열을 반환함.
//구분자는 생략 가능하며 기본 구분자는 콤마','이다.
const arr_4 = [1, 2, 3, 4, 5];

// 기본 구분자는 콤마다.
// 원본 배열 arr_4의 모든 요소를 문자열로 변환한 후 기본 구분자로 연결한 문자열을 반환함
arr_4.join();  // "1,2,3,4,5"
console.log(arr_4.join());  // "1,2,3,4,5"
console.log(typeof arr_4.join());  // string

// 원본 배열 arr_4의 모든 요소를 문자열로 변환한 후, 빈 문자열로 연결한 문자열을 반환함
arr_4.join('');  // "12345"
console.log(arr_4.join(''));  // "12345"
console.log(typeof arr_4.join(''));  // string

// 원본 배열 arr_4의 모든 요소를 문자열로 변환한 후, '-'로 연결한 문자열을 반환함
arr_4.join('-');  // "1-2-3-4-5"
console.log(arr_4.join('-'));  // "1-2-3-4-5"
console.log(typeof arr_4.join('-'));  // string
let arr_4_1 = arr_4.join('-');
console.log(typeof arr_4_1);  // string
console.log(arr_4_1);  // 1-2-3-4-5

//Array.prototype.reverse
//reverse 메서드는 원본 배열의 순서를 반대로 뒤집으며, 원본 배열이 변경됨.
const arr_5 = [1, 2, 3, 4, 5];
arr_5.reverse();
console.log(arr_5);  // [5, 4, 3, 2, 1]
let arr_5_1 = arr_5.reverse();
console.log(arr_5_1);  // [1, 2, 3, 4, 5]

//Array.prototype.fill
//ES6에서 도입된 fill 메서드는 배열의 시작 인덱스부터 끝 인덱스까지 정적인 값으로 채움. 이때 원본 배열이 변경됨
const arr_6 = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채움
console.log(`arr_6 : ${arr_6}`);
arr_6.fill(0);
console.log(arr_6);  // [0, 0, 0]

//두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있음
const arr_7 = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채움
arr_7.fill(0, 1);

// fill 메서드는 원본 배열을 직접 변경함
console.log(arr_7);  // [1, 0, 0]

//세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있음
const arr_8 = [1, 2, 3, 4, 5];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 3이전(인덱스 3미포함)까지 요소로 채움
arr_8.fill(0, 1, 3);
console.log(arr_8);  // [1, 0, 0, 4, 5]

//fill 메서드를 사용하면 배열을 생성하면서 특정 값으로 요소를 채울 수 있음
const arr_9 = new Array(5);
console.log(arr_9);  // [empty × 5]

// 인수로 전달받은 값 1을 배열의 처음부터 끝까지 요소로 채움
const result_9 = arr_9.fill(1);
console.log(result_9);  // [1, 1, 1, 1, 1]

// fill 메서드는 원본 배열을 직접 변경함
console.log(arr_9);  // [1, 1, 1, 1, 1]

////////////////////////////////
// 인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면서 요소를 채움
const sequences_10 = (length = 0) => Array.from({length}, (_, i) => i);
// const sequences_10 = (length = 0) => Array.from(new Array(length), (_, i) => i);
console.log(sequences_10(5));  // [0, 1, 2, 3, 4]
console.log(sequences_10(10));  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//Array.prototype.includes
//includes 메서드는 배열 내에 특정 요소가 포함되어 있는지 확인하려 true 또는 false를 반환함
//첫번째 인수로 검색할 대상을 지정함
const arr_11 = [1, 2, 3, 4, 5];

// 배열에 요소 2가 포함되어 있는지 확인함
arr_11.includes(2);  // true
console.log(arr_11.includes(2));  // true
console.log(arr_11.includes(6));  // false

// 두 번째 인수로 검색을 시작할 인덱스를 전달할 수 있음. 두 번째 인수를 생략할 경우 기본값 0이 설정됨.
// 두 번째 음수를 전달하면 length 프로퍼티 값과 음수 인덱스를 합산하여(length + index) 검색 시작 인덱스를 설정함
const arr_12 = [1, 2, 3, 4, 5];
console.log(`arr_12 : ${arr_12}`);  // arr_12 : 1,2,3,4,5

arr_12.forEach(e => console.log(`arr_12.foreach : ${e}`));

// 배열에 요소 1이 포함되어 있는지 인덱스 1부터 확인한다.
arr_12.includes(1, 1);  // false
console.log('---------------------');
console.log(arr_12.includes(1, 0));  // true
console.log(arr_12.includes(1, 1));  // false
console.log(arr_12.includes(2, 1));  // true
console.log(arr_12.includes(3, 1));  // true
console.log(arr_12.includes(4, 1));  // true
console.log(arr_12.includes(5, 1));  // true

// 배열에 요소 3이 포함되어 있는지 인덱스2(arr_12.length - 1)부터 확인함.
console.log(arr_12.length);  // 5
console.log(arr_12.includes(3, -1));  // false  // arr_12.length - 1 = 4... arr_12[length-1] = 5
console.log(arr_12.includes(3, -2));  // false
console.log(arr_12.includes(3, -3));  // true

///////////////////////////
console.log('---------------------');
/*
배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환하는 indexOf 메서드를 사용하여도 배열 내에 특정 요소가 포함되어 있는지 확인할 수 있음.
하지만 indexOf 메서드를 사용하면 반환값이 -1인지 확인해 보아야 하고 배열에 NaN이 포함되어 있는지 확인할 수 없다는 문제가 있음.
 */
let temp1 = [NaN].indexOf(NaN) !== -1; // false
console.log(temp1);  // false
temp1 = [NaN].includes(NaN);
console.log(temp1);  // true


//Array.prototype.flat
console.log([1, [2, 3, 4, 5]].flat());  // [1, 2, 3, 4, 5]

//중점 배열을 평탄화할 깊이를 인수로 전달할 수 있음.
//인수를 생략할 경우 기본값은 1임.
//인수를 Infinity를 전달하면 중첩 배열 모두를 평탄화함

console.log('---------------------');
// 중첩 배열을 평탄화하기 위한 깊이 값의 기본값은 1임
console.log([1, [2, [3, [4]]]].flat());  // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].flat(1));  // [1, 2, [3, [4]]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화함
console.log([1, [2, [3, [4]]]].flat(2));  // [1, 2, 3, [4]]

// 위와 동일
console.log([1, [2, [3, [4]]]].flat().flat());  // [1, 2, 3, [4]]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 모든 중첩 배열을 모두를 평탄화함
console.log([1, [2, [3, [4]]]].flat(Infinity));  // [1, 2, 3, 4]