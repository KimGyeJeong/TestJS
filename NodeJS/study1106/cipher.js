// 양방향 암호화

//암호화된 문자열을 복호화 할 수 있으며, 키(열쇠)라는 것이 사용됨.
// 대칭형 암호화에서 암호를 복호화하려면 암호화 할때 사용한 키와 같은 키를 사용해야 함

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);

// 결과........
// 암호화: iiopeG2GsYlk6ccoBoFvEH2EBDMWv1kK9bNuDjYxiN0=
// 복호화: 암호화할 문장

// crypto.createCipheriv(알고리즘, 키, iv) : 암호화 알고리즘과 키, iv 를 넣어줌.
// cipher.update(문자열, 인코딩, 출력 인코딩) : 암호화할 대상과 인코딩, 출력 인코딩을 넣어줌.(보통 문자열은 utf8인코딩을, 암호화는 base64를 많이 사용)
// cipher.final(출력 인코딩) : 출력 인코딩을 넣어주면 암호화가 완료.
// crypto.createDecipheriv(알고리즘, 키, iv) : 복호화할 때 사용. 암호화할때 사용했던 알고리즘과 키, iv를 그대로 넣어야 함.
// decipher.update(문자열, 인코딩, 출력 인코딩) : 암호화된 문자열, 문자열의 인코딩, 복호화될 인코딩을 넣어줌.
// decipher.final(출력 인코딩) : 복호화 결과물의 인코딩을 넣어줌.