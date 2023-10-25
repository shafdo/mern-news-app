import Image from 'next/image';
import { Jumbotron, NavbarPublic } from '@/components';

export default function AboutPage() {
  return (
    <>
      <NavbarPublic page="about" />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">
            About this app
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            This is a news app where users can read news, and admins can manage
            the news articles via a dashboard. Developed for the Technical
            Assignment for Derana.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="https://source.unsplash.com/FdDkfYFHqe4/1920x1080"
            alt="News App Image"
            className="rounded-lg shadow-lg w-3/6"
          />
        </div>
      </div>
    </>
  );
}
