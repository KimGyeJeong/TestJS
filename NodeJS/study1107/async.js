//파일 하나를 여러번 읽기(비동기)

const fs = require('fs');

console.time('here');
console.log('시작');

fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});

console.log('끝');
console.timeEnd('here');

// 결과........
// 시작
// 끝
// here: 5.355ms
// 1번 저를 여러번 읽어보세요.
// 3번 저를 여러번 읽어보세요.
// 2번 저를 여러번 읽어보세요.

// 시작
// 끝
// here: 4.269ms
// 1번 저를 여러번 읽어보세요.
// 2번 저를 여러번 읽어보세요.
// 3번 저를 여러번 읽어보세요.

/*
시작과 끝을 제외하고는 결과의 순서가 달라질 수 있음.
반복 실행할 때마다 결과가 달라짐

비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어감.
따라서 파일 읽기 요청만 세번을 보내고 console.log('끝')을 출력함.
나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알림.
메인 스레드는 그제서야 등록된 콜백 함수를 실행 함.

수백 개의 I/O 요청이 들어와도 메인 스레드는 백그라운드에서 요청처리를 위임.
 */
