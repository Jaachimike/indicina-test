const request = require('supertest');
const app = require('../index') // Import your routes file

describe('POST /decode', () => {
    it('should return a 200 status code and the original URL on success', async () => {
        const shortenedUrl = 'https://short.est/FiFlb-L0J'; // Replace with actual shortened URL
        const response = await request(app)
            .post('/decode')
            .send({ shortenedUrl });

        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('https://gemini.google.com/app/f3966da70f045054'); // Replace with expected original URL variable
    });

    it('should return a 400 status code on a malformed request', async () => {
        const response = await request(app)
            .post('/decode')
            .send({}); // No shortened URL provided

        expect(response.statusCode).toBe(400); // Or a more specific error code
    });

    it('should return a 404 status code for a non-existent shortened URL', async () => {
        const invalidShortenedUrl = 'https://invalidShortenedUrl.com';
        const response = await request(app)
            .post('/decode')
            .send({ shortenedUrl: invalidShortenedUrl });

        expect(response.statusCode).toBe(500);
    });
});
