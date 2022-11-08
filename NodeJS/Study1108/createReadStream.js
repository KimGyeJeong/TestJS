//버퍼의 크기를 작게 만든 후 여러 번으로 나눠 보내는 방식

//파일을 읽는 스트림 메서드로는 createReadStream이 있음.

console.time('here');

const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
    console.timeEnd('here');
});

readStream.on('error', (err) => {
    console.log('error:', err);
});

console.timeEnd('here');

// 결과........
// here: 2.812ms
// data: <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
// data: <Buffer 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88> 16
// data: <Buffer a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 a9 eb 8b> 16
// data: <Buffer 88 eb 8b a4 2e 20 eb 82 98 eb 88 a0 ec a7 84 20> 16
// data: <Buffer ec a1 b0 ea b0 81 ec 9d 84 20 63 68 75 6e 6b 20> 16
// data: <Buffer eb 9d bc ea b3 a0 20 eb b6 80 eb a6 85 eb 8b 88> 16
// data: <Buffer eb 8b a4 2e> 4
// end: 저는 조금씩 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk 라고 부릅니다.
// (node:1748) Warning: No such label 'here' for console.timeEnd()
// (Use `node --trace-warnings ...` to show where the warning was created)
