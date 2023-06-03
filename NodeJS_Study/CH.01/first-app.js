console.log('Hello from Node.js');


const fs = require('fs');

fs.writeFileSync(
    'hello.txt',
    'HELLO FROM NODE.js TO TXT FILE'
);