//배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.

const arr_1 = [1, 2, 3];
console.log(arr_1); // [ 1, 2, 3 ]
delete arr_1[1];
console.log(arr_1); // [ 1, <1 empty item>, 3 ]

// length 프로퍼티에 영향을 주지 않음. 즉, 희소 배열이 됨.
console.log(arr_1.length); // 3

//delete 연산자는 객체의 프로퍼티를 삭제함. 배열은 희소 배열이 되며 length 프로퍼티 값은 변하지 않기에, 희소 배열을 만드는 delete 연산자는 사용하지 않는 것이 좋음.
const arr_2 = [1, 2, 3, 4, 5];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// arr_2[2]부터 1개의 요소를 삭제
arr_2.splice(2, 1);
console.log(arr_2); // [ 1, 2, 4, 5 ]

arr_2.splice(2, 2);
console.log(arr_2); // [ 1, 2 ]

// 배열 메서드
/*
배열에는 원본 배열(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)를
 직접 변경하는 메서드(mutator method)와 원본 배열을 직접 변경하지 않고 새로운 배열을 직접 변경하지 않고
 새로운 배열을 생성하여 반환하는 메서드(accessor method)가 있다.
 */
const arr_3 = [1];
// push 메서드는 원본 배열(arr_3)을 직접 변경함
arr_3.push(2);
console.log(arr_3); // [ 1, 2 ]

// concat 메서드는 원본 배열(arr_3)을 직접 변경하지 않고 새로운 배열을 생성하여 반환함
const result_arr_3 = arr_3.concat(3);
console.log(arr_3); // [ 1, 2 ]
console.log(result_arr_3); // [ 1, 2, 3 ]