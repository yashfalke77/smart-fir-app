import React from 'react';
import Sidebar from '../../Components/ADMIN/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Feedback from '../../Components/ADMIN/Feedback';
import Stats from '../../Components/ADMIN/Statistics';

const DashBoard = () => (
  <div>
    <Navbar />
    <div className='flex'>
      <Sidebar />
      <div className='ml-64 bg-gray-50'>
        <Feedback />
        <Stats />
      </div>
    </div>
  </div>
);

export default DashBoard;
