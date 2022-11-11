const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node! port : 3000</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(3000,() => {  // 서버 연결
    console.log('3000번 포트에서 서버 대기 중입니다.');
});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node! port : 3001</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(3001,() => {  // 서버 연결
    console.log('3001번 포트에서 서버 대기 중입니다.');
});

// 포트번호가 달라야 함. 포트 번호가 같으면 EADDRINUSE 에러 발생.

/*
res.write 와 res.end에 일일이 HTML을 적는 것은 비효율적이므로 미리 HTML 파일을 만들어 두면 좋음.
 */