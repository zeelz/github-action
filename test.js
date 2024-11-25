const request = require('supertest')
const {createServer} = require("./app")

describe("Index route", () => {

    let server;

    beforeEach(() => {
        server = createServer()
    })

    afterEach((done) => {
        server.close(done)
    })

    it("should return html", async () => {

        res = await request(server)
            .get("/hello")
            .expect("Content-Type", /json/)
            .expect(200)

        // expect(res.text).toBe("...")


    })

})
