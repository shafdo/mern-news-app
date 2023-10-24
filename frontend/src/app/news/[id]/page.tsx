'use client';

import { useParams, redirect } from 'next/navigation';

export default function NewsPage() {
  const { id } = useParams();

  return (
    <div className="bg-blue-100 relative">
      <div className="w-full">
        <img
          src="https://source.unsplash.com/Tzm3Oyu_6sk/1920x1080"
          alt="Article Banner"
          className="w-full h-96 object-cover rounded-t-lg"
        />
      </div>
      <div className="bg-white rounded-2xl shadow-xl lg:mx-36 h-[100vh] -mt-36 relative p-8">
        <div id="article-header" className="mb-12">
          <h2 className="text-4xl font-sans font-semibold mb-6">
            Your Article Title
          </h2>
          <hr />
        </div>
        <div id="article-body" className="my-16">
          <p className="text-gray-700 leading-relaxed text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nulla tenetur voluptatem consequuntur repellendus laboriosam quae
            atque, vero fugit tempore velit distinctio ullam beatae harum non
            optio eaque! Et, nesciunt.
          </p>
        </div>
        <div id="article-footer" className="mt-6 flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/30050702?s=48&v=4"
            alt="Author"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-sm font-semibold">Author Name</p>
            <p className="text-sm text-gray-600">
              Published on October 25, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
