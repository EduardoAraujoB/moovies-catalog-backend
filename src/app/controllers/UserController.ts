import { Request, Response } from 'express';

import User from '../models/User';

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const checkEmail = await User.findOne({ where: { email: req.body.email } });

    if (checkEmail) {
      return res.status(400).json('User already exists');
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }
}

export default new UserController();
