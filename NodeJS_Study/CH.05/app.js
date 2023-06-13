const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // next(); 가 있어야 아래의 미들웨어로 넘어감
    // 응답을 보내지 않으면 next를 호출해야 함. 그러지 않으면 요청이 실패하고 다음 미들웨어로 이어지지 않음

    // res.send('<h1>FIRST EXPRESS</h1>');
    //여기서 응답을 하게 되면 아래의 미들웨어가 실행되지 않음. 물론 위의 next()는 없어야 함. 있으면 에러
});

app.use((req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);



/*
In the middleware!
In the another middleware!
In the middleware!
In the another middleware!

두번씩 찍히는 이유는 favicon.ico 요청 때문?
 */