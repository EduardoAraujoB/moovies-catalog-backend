import request from 'supertest';

import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';
import UserAttrs from '../interfaces/user';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create a session', async () => {
    const user = await factory.attrs<UserAttrs>('User');

    await request(app)
      .post('/user')
      .send(user);

    const response = await request(app)
      .post('/session')
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(200);
  });
});
