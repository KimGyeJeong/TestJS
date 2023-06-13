const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//body-parser deprecated undefined extended: provide extended option app.js:6:20
//옵션을 주어야함 extended : false . 비표준 대상의 분석이 가능한지 나타냄


app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button> </form>')
});

app.use('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
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