import { Request, Response } from 'express';
import * as Yup from 'yup';

import Moovie from '../models/Moovie';

interface RequestInterface extends Request {
  userId: string;
}

class UserController {
  async store(req: RequestInterface, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      release: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const moovie = await Moovie.create({ ...req.body, user_id: req.userId });

    const { id, name, description, release } = moovie;

    return res.json({
      id,
      name,
      description,
      release,
    });
  }
}

export default new UserController();
