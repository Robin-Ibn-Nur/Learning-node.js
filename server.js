// server.js
const http = require("node:http")

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req.url, req.method);

    if (req.url === "/home" && req.method === "GET") {
        res.end("This is home route")
    } else if (req.url === "/post" && req.method === "GET") {
        res.end("This data from post")
    } else {
        res.end("Not Found")
    }

    // res.end('Hello World!');
});

// starts a simple http server locally on port 3000
server.listen(5000, '127.0.0.1', () => {
    console.log('Server is Listening on 5000');
});

// run with `node server.js`
