import { userSchema } from '@/entities/user';
import UserRepository from '@/repository/userCollection';
import { NextFunction, Request, Response } from 'express';

class UserController {
  async fetchUserData(req: Request, res: Response) {
    try {
      const response = await UserRepository.fetchUserData();
      res.status(200).json({
        data: response,
        message: 'User data fetched successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  }

  async createUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const { error } = userSchema.validate(req.body);
      if (error) {
        res.status(400).json({
          error: error.details.map((err) => err.message).join(', '),
        });
        return;
      }
      const response = await UserRepository.createUsers(req.body);
      res.status(200).json({
        data: response,
        message: 'User data created successfully',
      });
    } catch (error) {
      next(error);
      res.status(500).json({ error: 'Failed to create user data' });
    }
  }

  async updateUsers(req: Request, res: Response) {
    try {
      const response = await UserRepository.updateUsers(req.params.id, req.body);
      res.status(200).json({
        data: response,
        message: 'User data updated successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user data' });
    }
  }
}

export default new UserController();
