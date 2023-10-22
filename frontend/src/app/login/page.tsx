'use client';

import { useState } from 'react';
import { Navbar } from '@/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

type loginProps = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const handleLogin = (values: loginProps) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address.'),
      password: Yup.string().required('Please enter your password.'),
    }),
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <>
      <Navbar page="login" />
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-1/2 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-4xl font-semiboldbold leading-tight tracking-tight mb-12">
                Login admin account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="me@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="error text-red-400 p-4">
                      <FontAwesomeIcon
                        className="mr-4 text-xl"
                        icon={faCircleExclamation}
                      />
                      {formik.errors.email}
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
                    placeholder="••••••••"
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
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-8"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
