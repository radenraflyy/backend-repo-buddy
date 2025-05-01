import express from 'express';
import userRouter from './userRoutes.routes';
const router = express.Router();

router.get('/check-health', async (_, res) => {
  res.status(200).json({
    messagge: 'Server health oke...',
  });
});

router.use('/user', userRouter);

export default router;
