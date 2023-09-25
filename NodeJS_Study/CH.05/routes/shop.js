const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('shop.js active..');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

router.get('/shopMain', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop22222'});
});

module.exports = router;
