const request = require('supertest');
const app = require('../../app');

describe('Test get all works', () => {
    test('should response status 200', async () => {

        const response = await request(app).get("/works");

        expect(response.statusCode).toBe(200);
    })

})