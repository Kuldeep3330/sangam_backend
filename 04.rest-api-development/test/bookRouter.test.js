const request = require('supertest');
const app = require('../app');

// Step 1: Mock the 'fs' module before importing the app
jest.mock('fs');

const fs = require('fs');

describe('Books API', () => {
  beforeEach(() => {
    fs.readFileSync.mockReset();
    fs.writeFileSync.mockReset();
  });

describe('GET /api/v1/books', () => {
  it('should return a single book record with status 200', async () => {
     fs.readFileSync.mockReturnValue(
        JSON.stringify([
          {
            id: 1,
            title: 'The Silent Forest',
            author: 'Emily Stone',
          },
          {
            id: 2,
            title: 'Ocean Deep',
            author: 'Emily Stone',
          }
        ])
      );
    const response = await request(app).get('/api/v1/books');

    // Step 3: Write assertions
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
    expect(response.body[0]).toHaveProperty('title', 'The Silent Forest');
    expect(response.body[0]).toHaveProperty('author', 'Emily Stone');
  });
  });

  describe('GET /api/v1/books/:id',()=>{
    it('should return the correct book by ID with status 200', async()=>{
      fs.readFileSync.mockReturnValue(
        JSON.stringify([
          {
            id: 1,
            title: 'The Silent Forest',
            author: 'Emily Stone',
          }
        ])
      );
      const response= await request(app).get('/api/v1/books/1');
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty('id',1)
      expect(response.body).toHaveProperty('title', 'The Silent Forest');
      expect(response.body).toHaveProperty('author', 'Emily Stone');
    })
  })
  
 

  describe('POST /api/v1/books',()=>{
    it('should add a new book and return it with status 201', async()=>{
      fs.readFileSync.mockReturnValue(
        JSON.stringify([
          {
            id: 1,
            title: 'Existing Book',
            author: 'Author',
          }
        ])
      );

      const newBook={
        title:'Hera pheri',
        author:'baburao'
      }
      const response = await request(app)
      .post('/api/v1/books')
      .send(newBook)
      .set('Content-Type', 'application/json');

      expect(response.statusCode).toBe(201)
      expect(response.body).toHaveProperty('title','Hera pheri')
      expect(response.body).toHaveProperty('author', 'baburao')
      expect(response.body).toHaveProperty('id',2)

      expect(fs.writeFileSync).toHaveBeenCalled()
    })

    it('should return 400 if title or author is missing', async()=>{
      const response = await request(app)
      .post('/api/v1/books')
      .send({ title: 'Missing Author' })
      .set('Content-Type', 'application/json');

      expect(response.statusCode).toBe(400)
      expect(response.body).toHaveProperty('message', 'Title and author are required')
      })
  })

describe('PUT /api/v1/books/:id', () => {
  it('should update the title of a book', async () => {
    fs.readFileSync.mockReturnValue(
        JSON.stringify([
          {
            id: 1,
            title: 'The Silent Forest',
            author: 'Emily Stone',
          }
        ])
      );

    const response = await request(app)
      .put('/api/v1/books/1')
      .send({ title: 'The Loud Forest' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'The Loud Forest');
    expect(response.body).toHaveProperty('author', 'Emily Stone');
    expect(fs.writeFileSync).toHaveBeenCalled();
  });

  it('should update the author of a book', async () => {
    fs.readFileSync.mockReturnValue(
        JSON.stringify([
          {
            id: 2,
            title: 'Ocean Deep',
            author: 'Emily Stone',
          }
        ])
      );
    const response = await request(app)
      .put('/api/v1/books/2')
      .send({ author: 'Sarah Green' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'Ocean Deep');
    expect(response.body).toHaveProperty('author', 'Sarah Green');
  });

  it('should return 404 if book not found', async()=>{
    fs.readFileSync.mockReturnValue(JSON.stringify([]));

    const response= await request(app).put('/api/v1/books/999').send({title: 'Ghost book'})
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('message','Book not found')
  })

  it('should return 400 if neither title nor author is provided', async () => {
    fs.readFileSync.mockReturnValue(
        JSON.stringify([
          {
            id: 1,
            title: 'The Silent Forest',
            author: 'Emily Stone',
          }
        ])
      );

    const response = await request(app)
      .put('/api/v1/books/1')
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('message', 'At least one of title or author must needed');
  });
});
});



