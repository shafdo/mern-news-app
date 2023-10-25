import response from '@/utils/response';
import {
  createUserRepo,
  updateUserRepo,
  getUsersRepo,
  getUserRepo,
} from '@/repository/user.repository';

export const createUser = async (req, res) => {
  const info = await createUserRepo({ ...req.body });

  // Remove password
  if (info.data?.password) {
    delete info.data.password;
  }

  return response({
    res,
    status: info.status,
    message: info.message,
    data: info.data,
  });
};

export const updateUser = async (req, res) => {
  // Check for ID parameter
  const uid = req.params.id;
  if (uid == undefined || uid == '') {
    return response({
      res,
      status: 400,
      message: 'ID parameter is required...',
    });
  }

  const info = await updateUserRepo(uid, req.body);

  return response({
    res,
    status: info.status,
    message: info.message,
    data: info.data,
  });
};

export const getUser = async (req, res) => {
  // Check for ID parameter
  const uid = req.params.id;
  if (uid == undefined || uid == '') {
    return response({
      res,
      status: 400,
      message: 'ID parameter is required...',
    });
  }

  const info = await getUserRepo(uid);

  return response({
    res,
    status: info.status,
    data: info.data,
  });
};

export const getUsers = async (req, res) => {
  const info = await getUsersRepo({});

  return response({
    res,
    data: info,
  });
};
