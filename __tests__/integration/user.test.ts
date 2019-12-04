import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';

import factory from '../factories';
import truncate from '../util/truncate';

interface UserAttrs {
  password_hash?: string;
  password?: string;
}

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt users password when a new user is created', async () => {
    const user = await factory.create<UserAttrs>('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });

  it('should be able to register', async () => {
    const user: object = await factory.attrs('User');

    const response = await request(app)
      .post('/user')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with a duplicated email', async () => {
    const user: object = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const response = await request(app)
      .post('/user')
      .send(user);

    expect(response.status).toBe(400);
  });
});
