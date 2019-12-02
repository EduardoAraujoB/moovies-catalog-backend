import { Request, Response } from 'express';

import User from '../models/User';

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }
}

export default new UserController();
