const request = require('supertest')
const {createServer} = require("./server")

describe("Index route", () => {

    let server;

    beforeEach(() => {
        server = createServer()
    })

    afterEach((done) => {
        if (server.listening) {
            server.close(done)            
        } else {
            done()
        }
    })

    it("should return html", async () => {

        res = await request(server)
            .get("/welcome")
            .expect("Content-Type", /text/)
            .expect(200)

        expect(res.text).toContain("Welcome to the future")


    })

})
