setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});

setTimeout(()=>{
    console.log('timeout');
},0);

Promise.resolve().then(()=>console.log('promise'));

// 결과...........
// nextTick
// promise
// timeout
// immediate

/*
process.nextTick 은 setImmediate나 setTimeout보다 먼저 실행됨.
process.nextTick과 Promise를 마이크로태스크(microtask)라고 따로 구분지어 부름.
 */
