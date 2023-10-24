import express from 'express';
import { validateData } from '@/middleware/joiValidate';
import { userCreateSchema, userUpdateSchema } from '@/validations/user';
import {
  createUser,
  updateUser,
  getUser,
  getUsers,
} from '@/controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', validateData(userCreateSchema), createUser);
userRouter.put('/:id', validateData(userUpdateSchema), updateUser);

export default userRouter;
