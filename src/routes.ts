import { Router } from 'express';

import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  User.findAll();
  res.send('Hello Bugs');
});

export default routes;
