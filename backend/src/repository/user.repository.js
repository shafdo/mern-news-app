import { User } from '@/models';
import e from 'express';

export const createUserRepo = async (UserSchema) => {
  try {
    const user = await new User(UserSchema).save();
    return {
      status: 200,
      message: 'User created successfully...',
      data: user.toObject(),
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export const updateUserRepo = async (uid, data) => {
  try {
    const user = await User.updateOne({ _id: uid }, { $set: data });

    if (user.nModified === 0) {
      return {
        status: 404,
        message: 'User not found...',
        data: null,
      };
    }

    return {
      status: 200,
      message: 'User updated successfully...',
      data: user,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export const getUserRepo = async (uid) => {
  try {
    const user = await User.findById(uid).select('-password');
    return {
      status: 200,
      data: user,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export const getUsersRepo = async (filter, isPasswordVisible = false) => {
  const user = User.find(filter);
  if (!isPasswordVisible) {
    return user.select('-password');
  }
  return user;
};

export const findUserByUsernameAndRole = async ({ username, role }) => {
  const user = await User.findOne({ username, role });
  return user;
};
