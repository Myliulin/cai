const express = require('express');
const app = express();

// 数据库连接  global  全局
// global.mydb = mysql.createConnection({

// });

// 接收post过来的数据
// cookie session
// 跨域
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/j1', (req, res) => {
     res.jsonp({username:'奇迹', age:10});
});


// 启用子路由  必须使用  use  启用中间件
app.use('/user', require('./controller/user'));
app.use('/book', require('./controller/book'));

// 图片上传
// app.post('/uploads', ()=>{});
// 静态资源托管

app.listen(81, () => {
    console.log('Example app listening on port 81!');
});

//Run app, then load http://localhost:81 in a browser to see the output.