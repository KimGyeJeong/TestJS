//파일 하나를 여러번 읽기(동기)

const fs = require('fs');

console.time('here');
console.log('시작');

let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());

console.log('끝');
console.timeEnd('here');

// 결과........
// 시작
// 1번 저를 여러번 읽어보세요.
// 2번 저를 여러번 읽어보세요.
// 3번 저를 여러번 읽어보세요.
//     끝
// here: 5.149ms

/*
readFile 대신 readFileSync 라는 메서드를 사용.
콜백 함수를 넣는 대신 직접 return 값을 받아옴.
그 값을 다음 줄부터 바로 사용할 수 있음

코드는 훨씬 더 이해하기 쉽지만 치명적인 단점이 있음.
readFileSync 메서드를 사용하면 요청이 수백 개 이상 들어올 때 성능에 문제가 생김. Sync 메서드를 사용할 때는 이전 작업이 완료되어야 다음 작업을 진행할 수 있음.
백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기하고 있어야 함.

동기 메서드를 사용해야 하는 경우는 드뭄.
프로그램을 처음 실행할 때 초기화 용도로만 사용하는 것을 권장함.
 */

