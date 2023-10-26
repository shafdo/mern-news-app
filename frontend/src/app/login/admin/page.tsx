'use client';

import { useState } from 'react';
import { Button, Navbar, Toast } from '@/components';
import { ToastContainer } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '@/config/axios';
import Swal from 'sweetalert2';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type loginProps = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (values: loginProps) => {
    axiosInstance
      .post('/login', { ...values, role: 0 })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: res.data.message,
        }).then(() => {
          router.push('/admin/dashboard');
        });
      })
      .catch((error) => {
        if (error.code == 'ERR_NETWORK')
          return Toast('Cannot connect with backend API.', 'error', {});

        Toast(error.response.data.message, 'error', {});
      });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Please enter your username.'),
      password: Yup.string().required('Please enter your password.'),
    }),
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <>
      <Navbar page="admin-login" />
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:w-1/2 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center">
                <Link
                  href="/login/admin"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-4 mb-2 w-1/3"
                >
                  Admin Login
                </Link>

                <Link
                  href="/login/user"
                  className="text-center relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white w-1/3 ml-4"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 w-full">
                    User Login
                  </span>
                </Link>
              </div>
              <h1 className="text-4xl font-semiboldbold leading-tight tracking-tight py-6">
                Login admin account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-lg font-medium"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="..."
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <div className="error text-red-400 p-4">
                      <FontAwesomeIcon
                        className="mr-4 text-xl"
                        icon={faCircleExclamation}
                      />
                      {formik.errors.username}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="error text-red-400 p-4">
                      <FontAwesomeIcon
                        className="mr-4 text-xl"
                        icon={faCircleExclamation}
                      />
                      {formik.errors.password}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <br />
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-8"
                >
                  Log in
                </button>
              </form>
              <br />
              <p className="text-center">
                Don&#39;t have an account?. Click to{' '}
                <Link
                  href="/register/admin"
                  className="border-b-2 border-black"
                >
                  here
                </Link>{' '}
                create a new admin account.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
