let tempPrint;

//Array.prototype.findIndex
//findIndex 메서드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소의 인덱스를 반환함.
//콜백 함수의 반환값이 true인 요소가 존재하지 않는다면 -1을 반환함

const users_1 = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 3, name: 'Park' },
    { id: 2, name: 'Choi' }
];

// id가 2인 요소의 인덱스를 구함
console.log(users_1.findIndex(user => user.id === 2)); // 1

// name이 'Park' 인 요소의 인덱스를 구함
console.log(users_1.findIndex(user => user.name === 'Park')); // 2
console.log(users_1.findIndex(user => user.name === 'Lee')); // 0

// 위와 같이 프로퍼티 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 다음과 같이 콜백 함수를 추상화할 수 있음
function predicate(key, value){
    // key와 value를 기억하는 클로저를 반환
    return item => item[key] === value;
}

console.log('------------------');

// id가 2인 요소의 인덱스를 구함
console.log(users_1.findIndex(predicate('id', 2))); // 1

// name이 'Park' 인 요소의 인덱스를 구함
console.log(users_1.findIndex(predicate('name', 'Park'))); // 2


//Array.prototype.flatMap
//flatMap 메서드는 map 메서드를 통해 생성된 새로운 배열을 평탄화한다.
const arr_2 = ['hello', 'world'];

// map과 flat을 순차적으로 실행
tempPrint = arr_2.map(x => x.split('')).flat(); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
console.log(tempPrint);

// flatMap은 map을 통해 생성된 새로운 배열을 평탄화함
tempPrint = arr_2.flatMap(x => x.split('')); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
console.log(tempPrint);