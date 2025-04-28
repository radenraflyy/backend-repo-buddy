import express from 'express';
const router = express.Router();

router.get('/check-health', async (_, res) => {
  res.status(200).json({
    messagge: 'Server health oke...',
  });
});

export default router;
