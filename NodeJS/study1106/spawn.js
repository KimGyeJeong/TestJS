//파이썬 프로그램 실행

const spawn = require('child_process').spawn;

const process = spawn('python', ['../study1106/test.py']);

process.stdout.on('data', function(data){
    console.log(data.toString());
});

process.stderr.on('data', function(data){
    console.error(data.toString());
});

// 결과........
// hello python

//exec 은 셸을 실행해서 명령어를 수행하고
//spawn은 새로운 프로세스를 띄우면서 명령어를 실행 함

//spawn에서도 세 번째 인수로 { shell : true }를 넣으면 exec와 같은 기능을 함