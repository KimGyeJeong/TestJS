const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(3000,() => {  // 서버 연결
    console.log('3000번 포트에서 서버 대기 중입니다.');
});

// http://127.0.0.1:3000/ 실행

/*
res 객체이는 res.writeHead와 res.write, res.end 메서드가 있음.
res.writeHead 메서드는 응답에 대한 정보를 기록하는 메서드.
    - 첫 번째 인수로 성공적인 요청임을 의미하는 200을 넣음
    - 두 번째 인수로 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알리고 있음.
    - 또한 한글 표시를 위해 charset=utf-8을 넣음.
    - 이 정보가 기록되는 부분을 헤더(Header)라고 부름.

res.write 메서드는 클라이언트로 보낼 데이터를 기록하는 메서드.
    - 데이터가 기록되는 부분을 바디(Body)라고 부름.

res.end 메서드는 응답을 종료하는 메서드.
    - 만약 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료함.
 */