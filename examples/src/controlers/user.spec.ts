const request = require('supertest');
const express = require('express');
const cookieParser = require('cookie-parser');

describe('request.agent(app)', function() {
  const app = express();

  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.cookie('cookie', 'hey');
    res.send();
  });

  const agent = request.agent(app);

  it('should save cookies', function(done) {
    agent
      .get('/')
      .expect('set-cookie', 'cookie=hey; Path=/', done);
  });
});

// const token = 'token';
//
// describe('Get /users', () => {
//   test('Check token', async () => {
//     const res = await request('http://localhost:3000')
//       .get('/user')
//       .set('Authorization', `Bearer ${token}`)
//     expect(res.statusCode).toEqual(200);
//   });
// });
//
// describe('Get /user/:id?query', () => {
//   const id = '1';
//   const query = { q: '123' };
//   test('Get user by id and check query', async () => {
//     const res = await request('http://localhost:3000')
//       .get(`/user/${id}`)
//       .query(query)
//     expect(res.statusCode).toEqual(200);
//     expect(res.text).toEqual(`param - ${id}; query - ${JSON.stringify({ q: 123 })}`);
//   });
// });
//
// describe('Post /user/add', () => {
//   it('Should return new user', async () => {
//     const res = await request('http://localhost:3000')
//       .post('/user/add')
//       .send({ name: 'Jon Snow', age: '20' });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('id');
//     expect(res.body).toHaveProperty('name');
//     expect(res.body).toHaveProperty('age');
//   })
// })
//
// describe('Put /user/update', () => {
//   it('Should return updated user', async () => {
//     const res = await request('http://localhost:3000')
//       .put('/user/update')
//       .send({ id: '1', name: 'Jon', age: '20' });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('id');
//     expect(res.body).toHaveProperty('name');
//     expect(res.body).toHaveProperty('age');
//   })
// })
//
// describe('Delete /user/delete', () => {
//   it('Should return true', async () => {
//     const res = await request('http://localhost:3000')
//       .delete('/user/delete')
//       .send({ id: '1' });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual(true);
//   })
// })
