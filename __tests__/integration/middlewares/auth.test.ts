import request from 'supertest';

import app from '../../../src/app';

import factory from '../../factories';
import truncate from '../../util/truncate';
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

  afterAll(async () => {
    await truncate();
  });

  it('should return an error when a token is not provided', async () => {
    const response = await request(app).get('/hello');

    expect(response.status).toBe(401);
  });

  it('should return an error with a mal formated auth header', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Authorization', token);

    expect(response.status).toBe(401);
  });

  it('should return an error with a mal formated token', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Authorization', `barer ${token}`);

    expect(response.status).toBe(401);
  });

  it('should return an error with an invalid token', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Authorization', `Bearer ${token}a`);

    expect(response.status).toBe(401);
  });

  it('should be able to authenticate via token', async () => {
    const response = await request(app)
      .get('/hello')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
