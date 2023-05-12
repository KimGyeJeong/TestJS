//객체 리터럴 내부에서 사용하는 경우

// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
const obj_1 = {x:1, y:2};
const copy_1 = {...obj_1};

console.log(copy_1); // {x: 1, y: 2}
console.log(obj_1); // {x: 1, y: 2}
console.log(copy_1 === obj_1); // false

// 객체 병합
const merged_1 = {x:1, y:2, ...{a:3, b:4}};
console.log(merged_1); // {x: 1, y: 2, a: 3, b: 4}

console.log({obj_1, ...merged_1}); // {obj_1: {x: 1, y: 2}, x: 1, y: 2, a: 3, b: 4}
console.log({obj_1, ...copy_1}); // {obj_1: {x: 1, y: 2}, x: 1, y: 2}

// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다
const merged_2 = Object.assign({}, obj_1, {x:10, z:3});
console.log(merged_2); // {x: 10, y: 2, z: 3}

// 특정 프로퍼티 변경
const changed_2 = Object.assign({}, obj_1, {x:10, z:3}, {x:20});
console.log(changed_2); // {x: 20, y: 2, z: 3}