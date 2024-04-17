const request = require('supertest');
const app = require('../routes/urlRoutes'); // Import your routes file

describe('GET /:shortUrlId', () => { // Replace with actual parameter name
    it('should redirect to the original URL on success', async () => {
        // Assuming you have a shortened URL stored in your database
        const shortUrlId = 'FiFlb-L0J'; // Replace with actual short URL ID
        const response = await request(app).get(`/${shortUrlId}`);

        expect(response.statusCode).toBe(200); // Redirect code
        expect(response.headers.location).not.toBeUndefined(); // Location header set
    });

    it('should return a 404 status code for non-existent short URL', async () => {
        const invalidShortUrlId = '2rgrhjb9s5';
        const response = await request(app).get(`/${invalidShortUrlId}`);

        expect(response.statusCode).toBe(404);
    });
});
