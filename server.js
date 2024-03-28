// server.js
const http = require("node:http")

// sample data
const post = [
    {
        id: 1,
        title: "Blog Post 1",
        content: "This is the content of the first blog post.",
        author: "John Doe",
        date: "2024-03-28",
    },
    {
        id: 2,
        title: "Another Blog Post",
        content: "Here's some content for the second blog post.",
        author: "Jane Smith",
        date: "2024-03-27",
    },
    {
        id: 3,
        title: "A Cool Article",
        content: "Check out this interesting article content!",
        author: "Alice Jones",
        date: "2024-03-26",
    },
    {
        id: 4,
        title: "Amazing Story",
        content: "Immerse yourself in this captivating story.",
        author: "Bob Brown",
        date: "2024-03-25",
    },
];




const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req.url, req.method);

    if (req.url === "/home" && req.method === "GET") {
        res.writeHead(200, {
            "Content-type": "text/html",
        })
        res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>This is robin HTML</h1>
</body>

</html>`)
    } else if (req.url === "/post" && req.method === "GET") {
        res.writeHead(200, {
            "Content-type": "application/json",
            email: "robin@gmail.com",
        })
        const data = JSON.stringify(post)
        res.end(data)
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
