const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
//6~13
/*
쿠키는 mycookie=test 같은 문자열임. 이를 쉽게 사용하기 위해 자바스크립트 객체 형식으로 바꾸는 함수.
이 함수를 거치면 { mycookie : 'test' } 같은 객체가 만들어짐.
parseCookies 함수가 문자열을 객체로 바꾸는 역할을 함.
 */

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }

    // 주소가 /login으로 시작하는 경우
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        // 쿠키 유효 시간을 현재시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
        //25~35
        /*
        주소가 /login으로 시작할 경우에는 url과 querystring 모듈로 각각 주소와 주소에 딸려오는 query를 분석함. 그리고 쿠키의 만료시간도 지금으로부터 5분뒤로 설정함.
        302 응답 코드, 리다이렉트 주소와 함께 쿠키를 헤더에 넣음. 브라우저는 이 응답코드를 보고 페이지를 해당 주소로 리다이렉트함.
        헤더에서는 한글을 설정할 수 없으므로 name 변수를 encodeURIComponent 메서드로 인코딩함.
        또한 Set-Cookie의 값으로는 제한된 ASCII 코드만 들어가야 하므로 줄바꿈을 넣으면 안됨.
         */

        // name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }
    //45~57
    /*
    그 외의 경우(/로 접속했을 때 등), 먼저 쿠키가 있는지 없는지를 확인함. 쿠키가 없다면 로그인할수 있는 페이지를 보냄.
    처음 방문한 경우에는 쿠키가 없으므로 cookie2.html이 전송됨. 쿠키가 있다면 로그인한 상태로 간주하여 인사말을 보냄.
     */
})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기 중입니다!');
    });