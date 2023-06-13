const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('Alaways run!');
    next();
})

app.use('/add-product',(req, res, next) => {
    console.log('add product page middleware!');
    res.send('<h1>The "add product" page</h1>');
});

app.use('/',(req, res, next) => {
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