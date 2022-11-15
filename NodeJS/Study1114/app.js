const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    // 현재 localhost:3000 들어가면 에러 발생중..
    console.log('err!');
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});


// const express = require('express');
// const path = require('path');
// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const dotenv = require('dotenv');
// const multer = require('multer');
// const fs = require('fs');
//
// dotenv.config();
//
// const app = express();
// app.set('port', process.env.PORT || 3000);
//
// const indexRouter = require('./routes/index');
// const userRouter = require('./routes/user');
//
// try {
//     fs.readdirSync('uploads');
// } catch (error) {
//     console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
//     fs.mkdirSync('uploads');
// }
//
//
// //미들웨어는 익스프레스의 핵심.
// //요청과 응답의 중간(middle)에 위치하여 미들웨어라고 부름.
// //요청과 응답을 조작하여 기능을 추가하기도하고, 나쁜 요청을 걸러내기도 함.
//
// app.use(morgan('dev'));
// //morgan은 요청과 응답에 대한 정보를 콘솔에 기록해주는 미들웨어.
// //인수로 dev 외에 combined, common, short, tiny 등을 넣을 수 있음.
//
// app.use('/', express.static(path.join(__dirname, 'public')));
// //static 미들웨어는 정적인 파일들을 제공하는 미들웨어.
// //서버의 폴더 경로와 요청 경로가 다르므로 외부인이 서버의 구조를 쉽게 파악할 수 없어 보안에 큰 도움이 됨.
//
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// //body-parser 요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어.
// //보통 폼 데이터나 AJAX 요청의 데이터를 처리함. 단 멀티파트(이미지, 동영상, 파일) 데이터는 처리하지 못함. 이러한 경우 multer 모듈을 사용
//
// app.use(cookieParser(process.env.COOKIE_SECRET));   // app.use(cookieParser(비밀키));
// //cookie-parser는 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만듬.
// //parseCookies 함수와 기능이 비슷
//
// /*
// 쿠키를 생성/제거하기 위해서는 res.cookie/res.clearCookie 메서드를 사용.
// res.cookie(키, 값, 옵션) : 쿠키를 생성하는 메서드.
// res.clearCookie(키, 값, 옵션) : 쿠키를 제거하는 메서드.
//
// res.cookie('name', 'Kim', {
//     expires: new Date(Date.now() + 900000),    // 쿠키 유효기간
//     httpOnly: true,     // 클라이언트에서 쿠키 확인 불가
//     secure: true,       // https가 아닌 환경에서는 사용 불가
// });
// res.clearCookie('name', 'Kim', {
//     httpOnly: true,
//     secure: true});
//
//     쿠키를 지우려면, 키와 값 외에 옵션도 정확히 일치해야 쿠키가 지워짐.
//     단, expires나 maxAge 옵션은 일치할 필요가 없음
//  */
//
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//     },
//     name: 'session-cookie',
// }));
// //세션 관리용 미들웨어.
// //로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 매우 유용함.
// //세션은 사용자별로 req.session 객체 안에 유지됨.
//
// //multer 패키지
// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null, 'uploads/');
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname);
//             done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//         },
//     }),
//     limits: {fileSize: 5 * 1024 * 1024},
// });
//
// app.use('/', indexRouter);
// app.use('/user', userRouter);
//
//
// // app.use((req, res, next) => {
// //     console.log('모든 요청에 다 실행 됩니다.');
// //     next();
// // });
//
// app.get('/upload', (req, res) => {
//     res.sendFile(path.join(__dirname, 'multipart.html'));
// });
//
// // app.post('/upload', upload.array('many'), (req, res) => {
// //     console.log(req.files, req.body);
// //     res.send('ok');
// // });
//
// app.post('/upload', upload.fields([{name: 'image1'}, {name: 'image2'}]), (req, res) => {
//     console.log(req.files, req.body);
//     res.send('ok');
// },);
//
// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //수정 전..
//
// // app.get('/', (req, res) => {
// //     // res.send('<h1>Hello, Express</h1>');
// //     res.sendFile(path.join(__dirname, '/index.html'));
// // });
// //
// // app.listen(app.get('port'), () => {
// //     console.log(app.get('port'), '번 포트에서 대기 중');
// // });
//
// // app.get('/',(req, res, next) => {
// //     console.log('GET / 요청에서만 실행됩니다.');
// //     next();
// // }, (req, res) => {
// //     throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
// // });
// //
// // if(process.env.NODE_ENV === 'production') {
// //     app.use(morgan('combined'));
// // }else{
// //     app.use(morgan('dev'));
// // }
// //
// //
// //
// // // app.use((err, req, res, next) => {
// // //     console.log(err);
// // //     res.status(500).send(err.message);
// // // });
// //
// // app.use(morgan('dev'));
// //
// // app.listen(app.get('port'), () => {
// //     console.log(app.get('port'), '번 포트에서 대기 중');
// // });
//
