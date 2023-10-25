import jsonwebtoken from 'jsonwebtoken';
import config from '../config';

export const generateJWT = async (jsonPayload) => {
  const token = await jsonwebtoken.sign(jsonPayload, config.JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

export const decodedJWT = (token) => {
  try {
    return jsonwebtoken.verify(token, config.JWT_SECRET);
  } catch (error) {
    return 0;
  }
};
