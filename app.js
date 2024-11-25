const {createServer} = require("./server")

const server = createServer()

server.listen(5555, () => console.log("Server started"))
