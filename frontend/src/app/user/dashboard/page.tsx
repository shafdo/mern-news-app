import Image from 'next/image';
import { Navbar } from '@/components';

export default function UserDashboard() {
  return (
    <>
      <Navbar page="user-dashboard" />
      <div className="my-16">
        <p className="text-center text-5xl">User Dashboard</p>
      </div>
    </>
  );
}
