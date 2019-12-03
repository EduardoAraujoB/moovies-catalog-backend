import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

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

  it('should not be able to register with a duplicated email', async () => {
    await request(app)
      .post('/user')
      .send({
        name: 'Persona Example',
        email: 'persona@mail.com',
        password_hash: 'HASH',
      });

    const response = await request(app)
      .post('/user')
      .send({
        name: 'Persona Example',
        email: 'persona@mail.com',
        password_hash: 'HASH',
      });

    expect(response.status).toBe(400);
  });
});
