import request from 'supertest';

import app from '../../../src/app';

import factory from '../../factories';
import truncate from '../../util/truncate';
import UserAttrs from '../../interfaces/user';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create a session', async () => {
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

    expect(response.status).toBe(200);
  });

  it('should return an error with an invalid email', async () => {
    const user = await factory.attrs<UserAttrs>('User');

    const response = await request(app)
      .post('/session')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(401);
  });
  it('should return an error with a invalid password', async () => {
    const { name, email } = await factory.attrs<UserAttrs>('User');

    await request(app)
      .post('/user')
      .send({
        name,
        email,
        password: 'awdawda',
      });

    const response = await request(app)
      .post('/session')
      .send({
        email,
        password: 'bcdefg',
      });

    expect(response.status).toBe(401);
  });
});
