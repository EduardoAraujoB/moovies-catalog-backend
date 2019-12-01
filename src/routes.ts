import { Router } from 'express';

const routes = Router();

routes.get('/', async (req, res) => {
  res.send('Hello Bugs');
});

export default routes;
