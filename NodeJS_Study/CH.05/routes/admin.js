const express = require('express');

const router = express.Router();

const path = require('path');

// router.get('/admin/add-product',(req, res, next) => {
//     res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button> </form>')
// });
//
// router.post('/admin/product', (req, res) => {    // post 요청 받기
//     console.log(req.body);
//     res.redirect('/');
// });

//  /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    // res.send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add Product</button> </form>')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});


//  /admin/add-product => POST
router.post('/add-product', (req, res) => {    // post 요청 받기
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;