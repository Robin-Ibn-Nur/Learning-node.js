// server.js
const http = require("node:http")

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

// starts a simple http server locally on port 3000
server.listen(5000, '127.0.0.1', () => {
    console.log('Server is Listening on 5000');
});

// run with `node server.js`
