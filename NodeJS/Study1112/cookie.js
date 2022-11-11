const http = require('http');

http.createServer((req, res) => {
    console.log("url : ",req.url," headers.cookie : ", req.headers.cookie);
    //처음
    // / undefined
    // url : /favicon.ico headers.cookie : mycookie=test

    // 두번째부터는 쿠키에 저장되어있음.
    // url :  /  headers.cookie :  mycookie=test
    // url :  /favicon.ico  headers.cookie : mycookie=test

    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    // res.end('Hello Cookie');
    res.end('<h1>Hello Cookie</h1>');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다!');
    });