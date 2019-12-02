import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: 'Persona Example',
        email: 'persona@mail.com',
        password_hash: 'HASH',
      });

    expect(response.body).toHaveProperty('id');
  });
});
