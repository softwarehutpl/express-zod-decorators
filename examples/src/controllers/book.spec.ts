const request = require('supertest');

const token = 'token';

describe('Get /book', () => {
  test('Check token', async () => {
    const res = await request('http://localhost:3000')
      .get('/user')
      .set('Authorization', `Bearer ${token}`)
    expect(res.statusCode).toEqual(200);
  });
});

describe('Get /book/:id?query', () => {
  const id = '1';
  const query = { q: '123' };
  test('Get book by id and check query', async () => {
    const res = await request('http://localhost:3000')
      .get(`/book/${id}`)
      .query(query)
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(`param - ${id}; query - ${JSON.stringify({ q: 123 })}`);
  });
});

describe('Post /book/add', () => {
  it('Should return new book', async () => {
    const res = await request('http://localhost:3000')
      .post('/book/add')
      .send({ title: 'A Song of Ice and Fire', author: 'George R. R. Martin' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('author');
  })
})

describe('Put /book/update', () => {
  it('Should return updated book', async () => {
    const res = await request('http://localhost:3000')
      .put('/book/update')
      .send({ id: '1', title: 'Fire & Blood', author: 'George R. R. Martin' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('author');
  })
})

describe('Delete /book/delete', () => {
  it('Should return true', async () => {
    const res = await request('http://localhost:3000')
      .delete('/user/delete')
      .send({ id: '1' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(true);
  })
})
