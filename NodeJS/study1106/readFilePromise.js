// 프로미스 형식으로 바꿔주는 방법을 사용
console.time('here');
const fs = require('fs').promises;

fs.readFile('./readme.txt').then((data) => {
    console.log(data);
    console.log(data.toString());
}).catch((err) => {
    console.error(err);
});

console.timeEnd('here');

// 결과........
// <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 21>
// 저를 읽어주세요!
