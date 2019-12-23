import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factories';
import truncate from '../../util/truncate';
import UserAttrs from '../../interfaces/user';

describe('Moovie', () => {
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

  it('should be able to create a moovie', async () => {
    const response = await request(app)
      .post('/moovie')
      .send({
        name: 'Test Moovie',
        description: 'Random Description',
        release: '2019-04-04',
      })
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
