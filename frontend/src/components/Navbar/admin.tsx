'use client';

import { removeCookie } from '@/utils/cookie';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type NavbarAdminProps = {
  page: string;
};

const NavbarAdmin = ({ page }: NavbarAdminProps) => {
  const router = useRouter();

  const logout = () => {
    removeCookie('auth');
    router.push('/');
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-semibold">
          Derana Technical Assignment
        </Link>

        {/* Mobile menu button */}
        <button
          className="block lg:hidden text-white hover:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation links */}
        <ul className={`hidden lg:flex space-x-4 lg:space-x-8 mt-4 lg:mt-0`}>
          <li className={`${page == 'home' ? 'border-b-2' : ''}`}>
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li className={`${page == 'login' ? 'border-b-2' : ''}`}>
            <Link
              href="/admin/dashboard"
              className="text-white hover:text-gray-200"
            >
              Admin Dashboard
            </Link>
          </li>
          <li className={`${page == 'contact' ? 'border-b-2' : ''}`}>
            <Link
              href="/news/create"
              className="text-white hover:text-gray-200"
            >
              Create News
            </Link>
          </li>
          <li className={`${page == 'about' ? 'border-b-2' : ''}`}>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <span
              className="text-white hover:text-gray-200 cursor-pointer"
              onClick={logout}
            >
              Log out
            </span>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation links */}
      <ul className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
        <li className="mb-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/admin/dashboard"
            className="text-white hover:text-gray-200"
          >
            Admin Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/news/create" className="text-white hover:text-gray-200">
            Create News
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
        </li>
        <li className="mb-4" onClick={logout}>
          Log out
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
