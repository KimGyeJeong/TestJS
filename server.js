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
    console.log('mainPage!');
    console.log('welcome test page');
    // res.send('Welcome'); //ERROR
    res.sendFile(__dirname + '/index.html')
});

app.get('/testget', function(req, res){
    console.log('testGetPage!');
    console.log(req.get('name'));
    console.log(req.get('age'));
    // console.log(req);
    console.log('name : ',req.query.name);
    console.log('age : ',req.query.age);
    res.sendFile(__dirname + '/index.html')

});