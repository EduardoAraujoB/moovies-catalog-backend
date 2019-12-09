import request from 'supertest';

import app from '../../../src/app';

import factory from '../../factories';
import UserAttrs from '../../interfaces/user';

describe('Authentication Middleware', () => {
  let token: string;

  beforeAll(async () => {
    const { name, email, password } = await factory.attrs<UserAttrs>('User');

    await request(app)
      .post('/user')
      .send({
        name,
        email,
        password,
      });

    const response = await request(app)
      .post('/session')
      .send({
        email,
        password,
      });

    token = response.body.token;
  });

  it('should be able to authenticate via token', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
