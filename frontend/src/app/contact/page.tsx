import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, NavbarPublic } from '@/components';

export default function ContactPage() {
  return (
    <>
      <NavbarPublic page="contact" />
      <div className="bg-gray-100 py-16 min-h-screen">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-12">
            Contact Me
          </h1>
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dmjhra7dm/image/upload/v1686864051/shalinda.dev/profile-pic_xr7pit.png"
              alt="News App Image"
              className="rounded-full shadow-lg w-64 mb-12"
            />
          </div>
          <div className="flex text-lg text-gray-600 mb-8">
            <FontAwesomeIcon icon={faUser} className="w-6" />
            <p className="pl-2">Name: Shalinda Fernando</p>
          </div>
          <div className="flex text-lg text-gray-600 mb-8">
            <FontAwesomeIcon icon={faPhone} className="w-6" />
            <p className="pl-2">Tel: +94725661324</p>
          </div>
          <div className="flex text-lg text-gray-600 mb-8">
            <FontAwesomeIcon icon={faMailBulk} className="w-6" />
            <p className="pl-2">
              Email:{' '}
              <a
                className="text-blue-500 hover:underline"
                href="mailto:yugantha1468@gmail.com"
                target="_blank"
              >
                yugantha1468@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
