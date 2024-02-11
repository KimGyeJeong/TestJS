const {fork} = require('child_process');

const forked = fork('grandChild.js');

process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;
let messageFromGrandChild;


forked.on('message', (msg) => {
    // console.log('Message from grandChild', msg);
    messageFromGrandChild = msg;
});
setInterval(() => {
    process.send({counter: counter++});
    process.send({message: messageFromGrandChild});
}, 1000);

