const {fork} = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
    console.log('Message from child', msg);
});

forked.send({hello: 'world'});

// setInterval(() => {
//     console.log('parent');
// }, 5000);