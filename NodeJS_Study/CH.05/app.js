const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

//css 파일을 사용하기 위한 설정. 읽기전용
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

//404 ERR PAGE
app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
