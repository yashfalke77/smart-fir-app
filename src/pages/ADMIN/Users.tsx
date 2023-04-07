import React from 'react';
import Sidebar from '../../Components/ADMIN/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import User from '../../Components/ADMIN/User';

const Users = () => (
  <div>
    <Navbar />
    <div>
      <Sidebar />
      <div className='ml-64'>
        <User />
      </div>
    </div>
  </div>
);

export default Users;
