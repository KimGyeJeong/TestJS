const express = require('express');

const router = express.Router();

//GET / 라우터
router.get('/', (req, res, next) => {
    res.send('<h1>Hello, Express</h1>');
});

module.exports = router;