const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);

//미들웨어는 익스프레스의 핵심.
//요청과 응답의 중간(middle)에 위치하여 미들웨어라고 부름.
//요청과 응답을 조작하여 기능을 추가하기도하고, 나쁜 요청을 걸러내기도 함.

app.use(morgan('dev'));
//인수로 dev 외에 combined, common, short, tiny 등을 넣을 수 있음.

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
    name : 'session-cookie',
}));


app.use((req, res, next) => {
    console.log('모든 요청에 다 실행 됩니다.');
    next();
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});



//수정 전..

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello, Express</h1>');
//     res.sendFile(path.join(__dirname, '/index.html'));
// });
//
// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });

// app.get('/',(req, res, next) => {
//     console.log('GET / 요청에서만 실행됩니다.');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
// });
//
// if(process.env.NODE_ENV === 'production') {
//     app.use(morgan('combined'));
// }else{
//     app.use(morgan('dev'));
// }
//
//
//
// // app.use((err, req, res, next) => {
// //     console.log(err);
// //     res.status(500).send(err.message);
// // });
//
// app.use(morgan('dev'));
//
// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });

