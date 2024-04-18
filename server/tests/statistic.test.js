const request = require('supertest');
const app = 'localhost:5001'; // Import your routes file

describe('GET /statistic/:shortUrl', () => { // Replace with actual parameter name
    it('should return a 200 status code and statistics on success', async () => {
        // Assuming you have a shortened URL with statistics stored in your database
        const shortUrlId = 'FiFlb-L0J'; // Replace with actual short URL ID
        const response = await request(app).get(`/statistic/${shortUrlId}`); // Replace with actual route

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('clicks'); // Assuming clicks are stored
        // Add more assertions based on the specific statistics you provide (e.g., total visits)
    });

    it('should return a 404 status code for a non-existent short URL', async () => {
        const invalidShortUrlId = '7dbw9fja9';
        const response = await request(app).get(`/statistic/${invalidShortUrlId}`); // Replace with actual route

        expect(response.statusCode).toBe(404);
    });


});
