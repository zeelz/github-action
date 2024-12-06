
const http = require('http')

const createServer = () => http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)

    if (url.pathname === "/") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({"data": "good data"}))
        
    } else if(url.pathname === "/home") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end('<h1 style=" text-align: center; align-content: center; height: 100vh; ">Welcome to the future!</h1>')

    } else if(url.pathname === "/welcom") {
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end('Welcome to the future')

    } else {
        // console.log(url.pathname)
        res.writeHead(400, {"Content-Type": "text/plain"})
        res.end("Wrong man!")
    }
})

module.exports = {createServer}