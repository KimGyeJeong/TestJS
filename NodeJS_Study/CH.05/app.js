const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // next(); 가 있어야 아래의 미들웨어로 넘어감
});

app.use((req, res, next) => {
    console.log('In the another middleware!');
    //...
});

const server = http.createServer(app);

server.listen(3000);