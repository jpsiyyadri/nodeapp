const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url)
    // if(req.url == '/'){
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {"Content-Type": "text/html"})
    //         res.end(content)
    //     })
    // }
    // if(req.url == '/about'){
    //     fs.readFile(path.join(__dirname, "public", "about.html"), (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {"Content-Type": "text/html"})
    //         res.end(content)
    //     })
    // }
    // if(req.url == '/api/users'){
    //     const users = {
    //         "name": "bob",
    //         "age": 30
    //     }
    //     res.writeHead(200, {"Content-Type": "application/json"})
    //     res.end(JSON.stringify(users))
    // }

    //  build file paths
    let filePath = path.join(__dirname, 'public', req.url === '/'? 'index.html': req.url)
    console.log(">> ", filePath)
    // etensions of the file
    let extname  =  path.extname(filePath)
    let contentType = 'text/html';

    // check the extension and set content type
    switch (extname){
        case '.html':
            contentType = 'text/html'
            break
        case '.css':
            contentType = 'text/css'
            filePath = path.join(__dirname, '', req.url)
            break
        case '.png':
            contentType = 'png'
            break
    }

    fs.readFile(filePath, (err,content) => {
        if(err){
            if(err.code == "ENOENT"){
                // file not found
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    res.writeHead(200, {'Content-Type': "text/html"})
                    res.end(content, 'utf8')
                })
            } else{
                // server error
                res.writeHead(500)
                res.end(`server ${err.code}`)
            }
        } else{
            // Success
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    })
    
});

const PORT = process.env.PORT || 5000


server.listen(PORT, () => {
    console.log(`Server runing on ${PORT}`)
})

