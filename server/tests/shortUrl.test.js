const request = require('supertest');
const app = require('../index')

describe('GET /:shortUrlId', () => {
    it('should redirect to the original URL on success', async () => {
        // Assuming you have a shortened URL stored in your database
        const shortUrlId = '7RlGMpC1q'; // Replace with actual short URL ID
        const response = await request(app).get(`/${shortUrlId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({shortUrl: expect.any(String)});
    });

    it('should return a 404 status code for non-existent short URL', async () => {
        const invalidShortUrlId = '2rgrhjb9s5';
        const response = await request(app).get(`/${invalidShortUrlId}`);

        expect(response.statusCode).toBe(404);
    });
});
