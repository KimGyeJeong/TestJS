const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    // console.log(`adminData.products : ${adminData.products}`);
    console.log('shop.js', adminData.products);

    let i=0;
    adminData.products.forEach((product) => {
        console.log(i + '번째 : ' + product.title);
        i++;
    });

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;