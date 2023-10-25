import config from '../config';
import response from '@/utils/response';
import { generateJWT } from '@/utils/jwt';
import { findUserByUsernameAndRole } from '@/repository/user.repository';

export const login = async (req, res) => {
  const userData = await findUserByUsernameAndRole(req.body);

  // Employee not exist check. Employee password not match check...
  if (!userData || (userData && userData.password !== req.body.password)) {
    return response({
      res,
      status: 401,
      message: 'Invalid username or password',
    });
  }

  if (userData.role !== req.body.role) {
    return res.status(401).json({ data: 'Invalid role' });
  }

  // Generate auth token
  const authToken = await generateJWT({
    username: userData.username,
    email: userData.email,
    role: userData.role,
  });

  // Append auth cookie
  res.cookie('auth', authToken, config.cookieConfig);
  return response({
    res,
    message: 'Logged in successfully.',
  });
};
