// server.js
const http = require("node:http")
const fs = require("fs")

// sample data
// const post = [
//     {
//         id: 1,
//         title: "Blog Post 1",
//         content: "This is the content of the first blog post.",
//         author: "John Doe",
//         date: "2024-03-28",
//     },
//     {
//         id: 2,
//         title: "Another Blog Post",
//         content: "Here's some content for the second blog post.",
//         author: "Jane Smith",
//         date: "2024-03-27",
//     },
//     {
//         id: 3,
//         title: "A Cool Article",
//         content: "Check out this interesting article content!",
//         author: "Alice Jones",
//         date: "2024-03-26",
//     },
//     {
//         id: 4,
//         title: "Amazing Story",
//         content: "Immerse yourself in this captivating story.",
//         author: "Bob Brown",
//         date: "2024-03-25",
//     },
// ];




const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req.url, req.method);

    const parsedURL = new URL(req.url, `http://${req.headers.host}`);

    const pathName = parsedURL.pathname



    if (pathName === "/home" && req.method === "GET") {
        fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
            if (err) {
                throw new Error("Error! Reading File");
            }
            res.setHeader("Content-type", "text/html");
            res.statusCode = 200;
            // const data = JSON.stringify(expectedPost)
            res.end(data)
        })
    } else if (pathName === "/post" && req.method === "GET") {
        // res.writeHead(200, {
        //     "Content-type": "application/json",
        //     email: "robin@gmail.com",
        // })


        fs.readFile(__dirname + "/data.json", "utf-8", (err, data) => {
            if (err) {
                throw new Error("Error! Reading File");
            }
            const query = parsedURL.searchParams
            const postID = query.get("id")

            const expectedPost = JSON.parse(data).find(p => p.id == postID)
            res.setHeader("Content-type", "application/json");
            res.statusCode = 200;
            res.end(JSON.stringify(expectedPost))
        })



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
