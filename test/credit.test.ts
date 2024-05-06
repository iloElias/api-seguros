import request from 'supertest';
import app from '../src/app';

describe('POST /credit', () => {
  it('should return a list of matching insurance data', async () => {
    const response = await request(app)
      .post('/api/credit')
      .send({
        age: '65+',
      })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});
