'use client';

import React, { useState } from 'react';

const Table = ({ headings, data, itemsPerPage }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 mx-auto xl:mx-36">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {headings.map((header: string, index: number) => (
              <th key={index} className="border p-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item: any, index: any) => (
            <tr key={index} className="bg-white hover:bg-gray-50">
              <td className="border p-2">{item.data1}</td>
              <td className="border p-2">{item.data2}</td>
              <td className="border p-2">{item.data3}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Customized Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-2 mx-1 border rounded-md focus:outline-none ${
                i + 1 === currentPage
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-200 hover:bg-gray-300 border-gray-200 hover:border-gray-300'
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Table;
