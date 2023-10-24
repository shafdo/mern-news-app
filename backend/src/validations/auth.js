import { Joi } from 'celebrate';

export const authSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.number().required(),
});
