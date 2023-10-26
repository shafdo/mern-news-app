'use client';

import { useParams, redirect } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axiosInstance from '@/config/axios';
import { Toast } from '@/components';
import { ToastContainer } from 'react-toastify';

export default function NewsPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    axiosInstance
      .get(`/news/${id}`)
      .then((res) => {
        setValue(res.data.data.content);
        setTitle(res.data.data.title);
      })
      .catch((error) => {
        if (error.code == 'ERR_NETWORK')
          return Toast('Cannot connect with backend API.', 'error', {});
      });
  }, []);

  const updateNews = () => {
    console.log(value);

    const payload = {
      title: title,
      content: value,
    };

    axiosInstance
      .put(`/news/${id}`, payload)
      .then((res) => {
        Toast(res.data.data, 'success', {});
      })
      .catch((error) => {
        if (error.code == 'ERR_NETWORK')
          return Toast('Cannot connect with backend API.', 'error', {});
      });
  };

  return (
    <div className="mx-32">
      <div className="my-16">
        <Link href="/">Go Back</Link>
        <p className="text-5xl text-center">Editor</p>
        <div className="block my-8">
          <p>Title: {title}</p>
        </div>
      </div>
      <div className="my-4">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>

      <button
        className="w-72 block mx-auto text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-8"
        onClick={updateNews}
      >
        Save
      </button>

      <ToastContainer />
    </div>
  );
}
