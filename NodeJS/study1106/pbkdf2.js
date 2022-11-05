//단방향 암호화

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    });
});

// randomBytes 이므로 매번 실행할 때마다 결과가 달라짐. salt 를 잘 보관하고 있어야 비밀번호도 찾을 수 있음.