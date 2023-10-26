import { Joi } from 'celebrate';
import dotenv from 'dotenv';

dotenv.config();

class Base {
  static get schema() {
    return {
      PORT: Joi.number().optional(),
      JWT_SECRET: Joi.string().required(),
      cookieConfig: Joi.object({
        secure: Joi.boolean().required(),
        sameSite: Joi.string().required(),
        maxAge: Joi.number().required(),
      }).required(),
    };
  }

  static get values() {
    return {
      PORT: process.env.PORT ?? 4444,
      JWT_SECRET: process.env.JWT_SECRET,
      cookieConfig: {
        secure: false,
        sameSite: 'None',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    };
  }
}

const config = Base.values;
const { error } = Joi.object(Base.schema).validate(config);

if (error) {
  console.log(`Config validation error: ${error.message}`);
  process.exit(1);
}

export default config;
