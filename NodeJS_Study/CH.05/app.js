const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000);



/*
In the middleware!
In the another middleware!
In the middleware!
In the another middleware!

두번씩 찍히는 이유는 favicon.ico 요청 때문?
 */