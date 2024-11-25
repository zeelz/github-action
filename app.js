const http = require('http')

const createServer = () => http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    if (url.pathname === "/hello") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({"data": "good data"}))
        
    } else {
        // console.log(url.pathname)
        res.writeHead(400, {"Content-Type": "text/plain"})
        res.end("Wrong man!")
    }
})

const server = createServer()

server.listen(5555, () => console.log("Server started"))

module.exports = {createServer}