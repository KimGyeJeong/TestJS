//Array.prototype.reduce
//reduce 메서드는 콜백 함수를 호출하여 하나의 결과값을 만들어 반환함
//reduce 메서드는 첫 번째 인수로 콜백 함수, 두 번째 인수로 초기값을 전달 받음

// 1부터 4까지 누적을 구함
const sum_1 = [1,2,3,4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(sum_1); // 10

let sum_1_1 = [1,2,3,4,5].reduce((a,c,i,ar)=>a+c,0);
console.log(sum_1_1); // 15

const values= [1,2,3,4,5];

//평균구하기
const avg_2 = values.reduce((acc, cur, i, {length}) => {
    console.log('------------------');
    console.log(`i : ${i}`);
    console.log(`acc : ${acc}`);
    console.log(`cur : ${cur}`);
    console.log(`length : ${length}`);
    return i === length -1 ? (acc + cur) / length : acc + cur;
},0)
console.log(avg_2); // 3

//최대값 구하기
const max_3 = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max_3); // 5

// 사실 reduce 보다는 Math.max 를 사용하는게 더 좋음
const max_3_1 = Math.max(...values);
console.log(max_3_1); // 5


//요소의 중복 횟수 구하기
const fruits_4 = ['apple', 'banana', 'apple', 'orange', 'orange', 'apple'];
const counts_4 = fruits_4.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});
console.log(counts_4); // {apple: 3, banana: 1, orange: 2}

//중첩 배열 평탄화
const flatten_5 = [1, [2, 3], 4, [5,6]].reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten_5); // [1, 2, 3, 4, 5, 6]
// reduce 보다 Array.prototype.flat 메서드를 사용하는 방법이 더 직관적
console.log([1, [2, [3,4,], 5], 6, 7].flat(Infinity));  // [1, 2, 3, 4, 5, 6, 7]

//중복 요소 제거
const values_6 = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6];
const result_6 = values_6.reduce((unique, value, index, _values) =>
    _values.indexOf(value) === index ? [...unique, value] : unique, []
);
console.log(result_6); // [1, 2, 3, 4, 5, 6]
// 중복요소를 제거할 때는 reduce 메서드보다 filter 메서드를 사용하는 방법이 더 직관적임
const result_6_1 = values_6.filter((value, index, _values) => _values.indexOf(value) === index);
console.log(result_6_1); // [1, 2, 3, 4, 5, 6]