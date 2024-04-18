const request = require('supertest');
const app = require('../index') // Import your routes file

describe('GET /data', () => {
    it('should return a 200 status code and list of shortened URLs', async () => {
        const response = await request(app).get('/data');

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array); // Assumes response is an array of shortened URL objects
    });

    // it('should return a 404 status code if no data is found', async () => {
    //     // Assuming there's a scenario where no data exists (database is empty)
    //     // Modify this test case based on how your error handling works
    //     const response = await request(app).get('/data'); // Modify request if needed
    //     expect(response.statusCode).toBe(404); // Or a more specific error code
    // });
});
