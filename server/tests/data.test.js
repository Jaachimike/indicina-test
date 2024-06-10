const request = require('supertest');
const app = require('../index') // Import your routes file

describe('GET /data', () => {
    it('should return a 200 status code and list of shortened URLs', async () => {
        const response = await request(app).get('/data');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array); // Assumes response is an array of shortened URL objects
    });
});
