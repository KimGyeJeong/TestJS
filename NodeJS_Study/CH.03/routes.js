const fs = require('fs');
const {request} = require("express");
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message_form"><button type="submit">Send</button></form></body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(`parsedBody : ${parsedBody}`);
            const message = parsedBody.split('=')[1];
            console.log(`message : ${message}`);

            // fs.writeFileSync('message.txt', message);
            //
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();

            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Loacation', '/');
                return res.end();
            })
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');

    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText : 'Some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';