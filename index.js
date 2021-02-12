const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     //     res.writeHead(200, { 'Content-Type': "text/html" });
    //     //     res.end("<h1>home page </h1>");
    //     // }

    //     fs.readFile(
    //         path.join(__dirname, "public", "index.html"),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end(content);
    //         }
    //     );
    // }

    if (req.url === "/api/users") {
        const users = [
            { name: "Bob Smith", age: 40 },
            { name: "John Doe", age: 30 },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }

    //   Build file path
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = "text/html";

    // Check ext and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // log the filePath
    console.log(filePath);

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == "ENOENT") {
                // Page not found

                //! if the error code is enone t means the page is not found
                //* in that case we will load the  404 .html ehich is page not found file!

                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, content) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(content, "utf8");
                    }
                );
            } else {
                //! some different error than page not found or enonet
                //  Some server error

                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //? no erro means a successful page response
            // Success

            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
        }
    });
    console.log(req.url);
});

const PORT = process.env.PORT || 5000;

// * it will run on port 500 and what ever our host decides .
//* it will look for env.port and if not found it will run on 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const person = require("./person.js");

// const person1 = new person("pulkit sood ", 21);
// console.log(person1);
