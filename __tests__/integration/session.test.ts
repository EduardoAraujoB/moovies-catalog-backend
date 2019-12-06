import request from 'supertest';

import app from '../../src/app';

import truncate from '../util/truncate';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create a session', async () => {
    await request(app)
      .post('/user')
      .send({
        name: 'test',
        email: 'test@mail.com',
        password: '123456',
      });

    const response = await request(app)
      .post('/session')
      .send({
        email: 'test@mail.com',
        password: '123456',
      });

    expect(response.status).toBe(200);
  });
});
