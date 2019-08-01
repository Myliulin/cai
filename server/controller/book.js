const express = require('express');
const router = express.Router(); //mini-app

router.get('/', (req, res) => {
    res.send('Hello World!-user');
});

router.get('/j1', (req, res) => {
    res.jsonp({username:'奇迹-user', age:10});
});

router.get('/add', (req, res) => {
    res.send('添加');
});

router.get('/del', (req, res) => {
    res.send('删除');
});

router.get('/update', (req, res) => {
    res.send('更新');
});


router.get('/get', (req, res) => {
    res.send('查询');
});

module.exports = router;