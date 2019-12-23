import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MoovieController from './app/controllers/MoovieController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/moovie', MoovieController.store);

routes.get('/hello', (req, res) => {
  res.json({ hello: true });
});

export default routes;
