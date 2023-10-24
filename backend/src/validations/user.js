import { Joi } from 'celebrate';

export const userCreateSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.number().required(),
});

export const userUpdateSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
