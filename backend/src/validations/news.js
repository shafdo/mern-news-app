import { Joi } from 'celebrate';

export const newsCreateSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  isPublish: Joi.boolean().required(),
  publishDate: Joi.date().required(),
});

export const newsUpdateSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  content: Joi.string().required(),
  isPublish: Joi.boolean().required(),
  publishDate: Joi.date().required(),
});
