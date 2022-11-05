// util. 이름처럼 각종 편의 기능을 모아둔 모듈. 계속해서 API가 추가되고 있으며, 가끔 deprecated 되어 사라지는 경우도 있음

// deprecated : 프로그래밍 용어로, '중요도가 떨어져 더 이상 사용되지 않고 앞으로 사라지게 될' 의미.
// 새로운 기능이 나와서 기존 기능보다 더 좋을 때, 기존 기능을 deprecated 처리하곤 함.
// 이전 사용자를 위해 기능을 제거하지는 않지만 곧 없앨 예정이므로 더 이상 사용하지 말라는 의미

//자주 사용되는 두 메서드

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
},'dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const  randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64).then((buf) => {
    console.log(buf.toString('base64'));
}).catch((error) => {
    console.error(error);
});

// 결과........
// 3
// (node:34396) DeprecationWarning: dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!
//     (Use `node --trace-deprecation ...` to show where the warning was created)
// YsKi5VPoN5ytAAjVSg8BgDlGx05ovrkSXzEYp6+q/XII9zljZJ2sOTRCQsUwFyhTExgLhlqL6YBaZbP9aYzbqA==

// util.deprecate : 함수가 deprecated 처리 되었음을 알려줌. 첫 번째 인수로 넣은 함수를 사용하면 경고 메시지가 출력됨. 두 번째 인수로 경고 메시지 내용을 넣으면 됨. 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용함
// util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿈. 바꿀 함수를 인수로 제공하면 됨. 이렇게 바꿔두면 async/await 패턴까지 사용할 수 있어 좋음.