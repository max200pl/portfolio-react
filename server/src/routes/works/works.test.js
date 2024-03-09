const request = require('supertest');
const app = require('../../app');
const {
    mongoConnect,
    mongoDisconnect
} = require('../../db/mongo');


describe("API works", () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Get all of works', () => {
        test('should response status 200 and return filtered works', async () => {
            await request(app)
                .get("/works")
                .expect("Content-Type", /json/)
                .expect(200)
        })
    })

    // describe('Created a new Work', () => {
    //     test('should response status 200 and return filtered works', async () => {
    //         await request(app)
    //             .post("/create")
    //             .expect("Content-Type", /json/)
    //             .expect(200)
    //     })
    // })
})