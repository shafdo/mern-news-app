'use client';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

type UserDataType = {
  username: string;
  email: string;
  role: number;
  exp: number;
  iat: number;
};

type StatusType = {
  isAuthenticated: boolean;
  userData: UserDataType;
};

export const getInfo = () => {
  const status: StatusType = {
    isAuthenticated: false,
    userData: {
      username: '',
      email: '',
      role: 0,
      exp: 0,
      iat: 0,
    },
  };

  const auth = Cookies.get('auth') || null;

  // No cookie set
  if (auth == null) {
    return status;
  }

  // Get JWT payload
  try {
    const decoded: UserDataType = jwt_decode(auth);
    status.isAuthenticated = true;
    status.userData = decoded;
    return status;
  } catch (error) {
    return status;
  }
};
