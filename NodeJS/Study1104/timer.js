const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

//타이머 함수는 노드에서 window 대신 global 객체 안에 들어있음.
//setTimeout(콜백, 밀리초) : 주어진 밀리초(1/1000초) 이후에 콜백 함수를 실행합니다.
//setInterval(콜백, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행합니다.
//setImmediate(콜백) : 콜백 함수를 즉시 실행합니다.

// 이 타이머 함수들은 모두 아이디를 반환함. 아이디를 사용하여 타이머를 취소할 수 있음.
//clearTimeout(아이디) : setTimeout을 취소합니다.
//clearInterval(아이디) : setInterval을 취소합니다.
//clearImmediate(아이디) : setImmediate를 취소합니다.

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);

// 결과...........
// 즉시 실행
// 1초마다 실행
// 1.5초 후 실행
// 1초마다 실행
