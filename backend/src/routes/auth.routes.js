import express from 'express';
import { validateData } from '@/middleware/joiValidate';
import { login } from '@/controllers/auth.controller';
import { authSchema } from '@/validations/auth';

const authRouter = express.Router();

authRouter.post('/', validateData(authSchema), login);

export default authRouter;
