const request = require('supertest');

describe('Get "/"', () => {
  it('should return "Express + TypeScript Server" on call', async () => {
    const res = await request('http://localhost:3000')
      .get('/')
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Express + TypeScript Server');
  })
})
