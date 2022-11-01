const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('hello world');
    // alert('oh! welcome');
});

// app.get('경로', function(요청(req), 응답(res)){
    // 응답.send('반갑습니다');
// })

app.get('/helloTest', function(req, res){
    res.send('Welcome');
});

app.get('/welcomeTest', function(req, res){
    res.send('Test. Welcome');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});