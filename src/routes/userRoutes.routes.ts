import UserController from '@/controller/api';
import express from 'express';
const userRouter = express.Router();

userRouter.get('/', UserController.fetchUserData);
userRouter.post('/', UserController.createUsers);
userRouter.patch('/:id', UserController.updateUsers);

export default userRouter;
