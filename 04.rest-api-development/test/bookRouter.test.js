// const request = require('supertest');
// const fs= require('fs')
// const path= require('path')
// const app = require('../app');

// const filePath = path.join(__dirname, '/mockbooks.json');


// describe('getting all books',()=>{
//     beforeEach(()=>{
//         const mockBooks=[
//            { id: 1, title: 'The Silent Forest', author: 'Emily Stone' },
//            { id: 2, title: 'Echoes of the Past', author: 'James Monroe' }, 
//         ];
//         fs.writeFileSync(filePath, JSON.stringify({ mbooks: mockBooks }, null, 2));
//     })

//     afterEach(()=>{
//         fs.writeFileSync(filePath, JSON.stringify({ mbooks: [] }, null, 2));
//     })

//     it('should return all books with status 200', async () => {
//     const response = await request(app).get('/api/v1');
//     expect(response.statusCode).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//     expect(response.body.length).toBe(2);
//     expect(response.body[0]).toHaveProperty('title', 'The Silent Forest');
//   });
// })

// describe('GET /api/v1/books', () => {
//   it('should return a single book record with status 200', async () => {
//     const response = await request(app).get('/api/v1');
//     expect(response.statusCode).toBe(200);
//     expect(Array.isArray(response.body)).toBe(true);
//     expect(response.body.length).toBe(1);
//     expect(response.body[0]).toHaveProperty('title', 'The Silent Forest');
//     expect(response.body[0]).toHaveProperty('author', 'Emily Stone');
//   });
// });


// tests/bookRouter.test.js
const request = require('supertest');

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

// Now import the app after mocking
const app = require('../app');

describe('GET /api/v1/books', () => {
  it('should return a single book record with status 200', async () => {
    const response = await request(app).get('/api/v1/books');

    // Step 3: Write assertions
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('title', 'The Silent Forest');
    expect(response.body[0]).toHaveProperty('author', 'Emily Stone');
  });
});
