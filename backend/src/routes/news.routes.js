import express from 'express';
import { validateData } from '@/middleware/joiValidate';
import { newsCreateSchema, newsUpdateSchema } from '@/validations/news';
import { authorize } from '@/middleware/authorize';

import {
  createNews,
  updateNews,
  getNews,
  getAllNews,
  getAllPublicNews,
  deleteNews,
} from '@/controllers/news.controller';

const userRouter = express.Router();

userRouter.get('/', authorize([0]), getAllNews);
userRouter.get('/public', getAllPublicNews);
userRouter.get('/:id', getNews);
userRouter.post('/', validateData(newsCreateSchema), createNews);
userRouter.put('/:id', validateData(newsUpdateSchema), updateNews);
userRouter.delete('/:id', deleteNews);

export default userRouter;
