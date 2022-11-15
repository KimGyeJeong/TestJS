const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    res.send('<h1>Hello, User</h1>');
});

module.exports = router;