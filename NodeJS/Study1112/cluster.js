// cluster 모듈은 기본적으로 싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈.

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);   //cpu 개수만큼 워커를 생산

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    //워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
    });
} else {
    //워커들이 포트에서 대기
    http.createServer((req, res) => {
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
        setTimeout(() => {
            process.exit(1);    //워커가 존재하는지 확인하기 위해 1초마다 강제 종료.
        }, 1000);
    }).listen(8086);
    console.log(`${process.pid}번 워커 실행`);
}

// 2236번 워커 실행
// 9336번 워커 실행
// 15388번 워커 실행
// 25616번 워커 실행
// 29080번 워커 실행
// 14716번 워커 실행
// 28696번 워커 실행
// 28976번 워커 실행
// 4804번 워커 실행
// 26192번 워커 실행
// 29220번 워커 실행
// 5172번 워커 실행

//페이지 새로고침시 하나씩 종료됨

// 5172번 워커가 종료되었습니다.
//     code 1 signal null
// 29220번 워커가 종료되었습니다.
//     code 1 signal null
// 26192번 워커가 종료되었습니다.
//     code 1 signal null
// 4804번 워커가 종료되었습니다.
//     code 1 signal null
// 28976번 워커가 종료되었습니다.
//     code 1 signal null
// 14716번 워커가 종료되었습니다.
//     code 1 signal null
// 28696번 워커가 종료되었습니다.
//     code 1 signal null
// 29080번 워커가 종료되었습니다.
//     code 1 signal null
// 15388번 워커가 종료되었습니다.
//     code 1 signal null
// 25616번 워커가 종료되었습니다.
//     code 1 signal null
// 9336번 워커가 종료되었습니다.
//     code 1 signal null
// 2236번 워커가 종료되었습니다.
//     code 1 signal null
