import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import DashBoard from './pages/ADMIN/DashBoard';
import Users from './pages/ADMIN/Users';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/admin' element={<DashBoard />} />
      <Route path='/admin/users' element={<Users />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
