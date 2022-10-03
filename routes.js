const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input typ="text" name="message"/><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    
    if (url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message)
            fs.writeFile('message.txt', message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My fitst page</title></head>');
    res.write(`<body><h1>Hello from my first Node.js Server!</h1>\b <button id=MyButton>Send message</button></body>`)
    res.write('</html>');
    res.end();
    // process.exit();
};

module.exports = {
    handler: requestHandler,
    someText: "Hey you"    
};


