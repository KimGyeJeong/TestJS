//콜백지옥 해결.
//promise나 async/await를 사용하면 콜백지옥을 해결할 수 있다.

const fs = require('fs').promises;

console.time('here');
console.log('시작');

fs.readFile('./readme2.txt')
.then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
    console.timeEnd('here');
});

// 결과........
// 시작
// 1번 저를 여러번 읽어보세요.
// 2번 저를 여러번 읽어보세요.
// 3번 저를 여러번 읽어보세요.
//     끝
// here: 9.742ms

/*
toString 사용하는 이유. data가 버퍼이기 때문
 */