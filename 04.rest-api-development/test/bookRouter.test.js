const request = require('supertest');
const app = require('../app');

// Step 1: Mock the 'fs' module before importing the app
jest.mock('fs');

const fs = require('fs');

// Step 2: Define the mock implementation
fs.readFileSync.mockReturnValue(
  JSON.stringify({
    books: [
      {
        id: 1,
        title: 'The Silent Forest',
        author: 'Emily Stone',
      },
    ],
  })
);



describe('GET /api/v1/books', () => {
  it('should return a single book record with status 200', async () => {
    const response = await request(app).get('/api/v1');

    // Step 3: Write assertions
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('title', 'The Silent Forest');
    expect(response.body[0]).toHaveProperty('author', 'Emily Stone');
  });
});
