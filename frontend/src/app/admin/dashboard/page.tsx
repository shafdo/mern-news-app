import Image from 'next/image';
import { Jumbotron, Navbar, Table } from '@/components';

export default function AdminDashboard() {
  const headings = ['Header 1', 'Header 2', 'Header 4'];
  const data = [
    { data1: 'Item 1', data2: 'Description 1' },
    { data1: 'Item 2', data2: 'Description 2', data3: 'Category B' },
    { data1: 'Item 3', data2: 'Description 3', data3: 'Category A' },
    { data1: 'Item 3', data2: 'Description 3', data3: 'Category A' },
    { data1: 'Item 3', data2: 'Description 3', data3: 'Category A' },
    { data1: 'Item 3', data2: 'Description 3', data3: 'Category A' },
    { data1: 'Item 3', data2: 'Description 3', data3: 'Category A' },
    { data1: 'Item 3', data2: 'Description 3', data3: 'Category A' },
    // Add more data as needed
  ];

  return (
    <>
      <Navbar page="admin-dashboard" />
      <div className="my-16">
        <p className="text-center text-5xl">Admin Dashboard</p>
      </div>

      <div className="my-10">
        <Table headings={headings} data={data} itemsPerPage={3} />
      </div>
    </>
  );
}
