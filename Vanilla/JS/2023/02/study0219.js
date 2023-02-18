//splice 메서드의 세 번째 인수. 즉 제거한 위치에 추가할 요소들의 목록을 전달하지 않으면 원본 배열에서 지정된 요소를 제거하기만 한다.
const arr_1 = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거한다
const result_1 = arr_1.splice(1, 2);

// 원본 배열이 변경됨
console.log(arr_1); // [1, 4]
console.log(result_1); // [2, 3]


//splice 메서드의 두 번째 인수. 즉 제거할 요소의 개수를 생략하면 첫 번째 인수로 전달된 시작 인덱스로부터 모든 요소를 제거함
const arr_2 = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 모든 요소를 제거함
const result_2 = arr_2.splice(1);

// 원본 배열이 변경됨
console.log(arr_2); // [1]
// 제거한 요소가 배열로 반환됨
console.log(result_2); // [2, 3, 4]


//배열에서 특정 요소를 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice 메서드를 사용한다
const arr_3 = [1, 2, 3, 1, 2];

// 배열 array에서 item 요소를 제거함. item 요소가 여러 개 존재하면 첫 번째 요소만 제거함
function remove_4(array, item) {
    // 제거할 item 요소의 인덱스를 취득함
    const index_4 = array.indexOf(item);

    // 제거할 item 요소가 있다면 제거함
    if (index_4 !== -1) {
        array.splice(index_4, 1);
    }
    return array;
}

console.log(remove_4(arr_3, 2)); // [1, 3, 1, 2]
console.log(remove_4(arr_3, 10)); // [1, 3, 1, 2]


//filter 메서드를 사용하여 특정 요소를 제거할 수도 있다. 하지만 특정 요소가 중복된 경우 모두 제거됨
const arr_5 = [1, 2, 3, 1, 2];

// 배열 array 에서 모든 item 요소를 제거함
function removeAll_5(array, item) {
    return array.filter(e => e !== item);
}

console.log(removeAll_5(arr_5, 2)); // [1, 3, 1]


//Array.prototype.slice
/*
slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환함. 원본 배열은 변경되지 않음.
이름이 유사한 splice 메서드는 원본 배열을 변경하므로 주의해야 한다.

slice 메서드는 두 개의 매개변수를 갖음
- start : 복사를 시작할 인덱스임. 음수인 경우 배열의 끝에서의 엔덱스를 나타냄.
        예를 들어, slice(-2)는 배열의 마지막 두 개의 요소를 복사하여 배열로 반환함
- end : 복사를 종료할 인덱스임. 이 인덱스에 해당하는 요소는 복사되지 않음. end는 생략 가능하며 생략 시 기본값은 length 프로퍼티 값임
 */
const arr_6 = [1, 2, 3];

// arr_6[0]부터 arr_6[1] 이전(arr_6[1] 미포함)까지 복사하여 반환함
let arr_6_slice = arr_6.slice(0, 1); // [1]
console.log(arr_6_slice);

// arr_6[1]부터 arr_6[2] 이전(arr_6[2] 미포함)까지 복사하여 반환함
arr_6_slice = arr_6.slice(1, 2); // [2]
console.log(arr_6_slice);

arr_6_slice = arr_6.slice(0, 2); // [1, 2]
console.log(arr_6_slice);

// 원본은 변경되지 않음
console.log(arr_6); // [1, 2, 3]


//slice 메서드는 첫 번째 인수(start)로 전달받은 인덱스부터 두 번째 인수(end)로 전달받은 인덱스 이전(end 미포함)까지 요소들을 복사하여 배열로 반환함.
//slice 메서드의 두 번째 인수(end)를 생략하면 첫 번째 인수(start)로 전달받은 인덱스부터 모든 요소를 복사하여 배열로 반환함
const arr_7 = [1, 2, 3];

// arr_7[1]부터 이후의 모든 요소를 복사하여 반환함
let arr_7_slice = arr_7.slice(1); // [2, 3]
console.log(arr_7_slice);

//slice 메서드의 첫번째 인수가 음수인 경우 배열의 끝에서부터 요소를 복사하여 배열로 반환함
const arr_8 = [1, 2, 3];

// 배열의 끝에서부터 요소를 한 개 복사하여 반환함
console.log(arr_8.slice(-1)); // [3]

// 배열의 끝에서부터 요소를 두 개 복사하여 반환함
console.log(arr_8.slice(-2)); // [2, 3]

//slice 메서드의 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환함
const arr_9 = [1, 2, 3];

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환함
const copy_arr_9 = arr_9.slice();
console.log(copy_arr_9); // [1, 2, 3]
console.log(copy_arr_9 === arr_9); // false

console.log(typeof copy_arr_9); // object
console.log(Array.isArray(copy_arr_9)); // true

//이때 생성된 복사본은 얕은 복사(shallow copy)를 통해생성됨
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
];

// 얕은 복사(shallow copy)
const copy_todos = todos.slice();
const copy_todos2 = [...todos];

// copy_todos와 todos는 참조값이 다름
console.log(copy_todos === todos); // false
console.log(copy_todos2 === todos); // false

// 배열 요소의 참조값이 같음. 즉, 얕은 복사가 됨
console.log(copy_todos[0] === todos[0]); // true
console.log(copy_todos2[0] === todos[0]); // true