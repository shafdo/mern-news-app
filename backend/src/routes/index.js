import express from 'express';
import authRouter from './auth.routes';
import userRouter from './user.routes';
import newsRouter from './news.routes';

const router = express.Router();

router.use('/login', authRouter);
router.use('/user', userRouter);
router.use('/news', newsRouter);

export default router;
