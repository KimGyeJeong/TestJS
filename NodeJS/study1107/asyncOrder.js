//비동기 방식으로 하되 순서를 유지하기.

const fs = require('fs');

console.time('here');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());

    fs.readFile('./readme2.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log('2번', data.toString());

        fs.readFile('./readme2.txt', (err, data) => {
            if(err) {
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
            console.timeEnd('here');
        });
    });
});

// 결과........
// 시작
// 1번 저를 여러번 읽어보세요.
// 2번 저를 여러번 읽어보세요.
// 3번 저를 여러번 읽어보세요.
//     끝
// here: 8.804ms

/*
readFile의 콜백에 다음 readFile을 넣으면 됨. 콜백 지옥이 펼쳐지지만 적어도 순서가 어긋나는 일은 없음.
 */