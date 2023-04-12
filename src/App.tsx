import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Toaster } from 'react-hot-toast';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import DashBoard from './pages/ADMIN/DashBoard';
import Users from './pages/ADMIN/Users';
import Logout from './pages/Logout';
import Fir from './pages/Fir';
import ProtectedRoute from './Components/ProtectedRoute';
import ProtectedAdminRoute from './Components/ADMIN/ProtectedAdminRoute';
import PoliceStationList from './pages/AUTHORITY/PoliceStationList';
import NewPoliceStation from './pages/AUTHORITY/NewPoliceStation';
import NewFir from './pages/NewFir';
import ProtectedAuthorityRoute from './Components/AUTHORITY/ProtectedAuthorityRoutee';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      {/* auth routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/logout' element={<Logout />} />
      {/* auth required routes */}
      <Route
        path='/fir'
        element={(
          <ProtectedRoute>
            <Fir />
          </ProtectedRoute>
        )}
      />
      <Route
        path='/fir/new'
        element={(
          <ProtectedRoute>
            <NewFir />
          </ProtectedRoute>
        )}
      />
      {/* Authority routes */}
      <Route
        path='/police-station'
        element={(
          <ProtectedAuthorityRoute>
            <PoliceStationList />
          </ProtectedAuthorityRoute>
        )}
      />
      <Route
        path='/police-station/new'
        element={(
          <ProtectedAuthorityRoute>
            <NewPoliceStation />
          </ProtectedAuthorityRoute>
        )}
      />
      {/* admin routes */}
      <Route
        path='/admin'
        element={(
          <ProtectedAdminRoute>
            <DashBoard />
          </ProtectedAdminRoute>
        )}
      />
      <Route
        path='/admin/users'
        element={(
          <ProtectedAdminRoute>
            <Users />
          </ProtectedAdminRoute>
        )}
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    <Toaster
      position='bottom-center'
      reverseOrder={false}
    />
  </div>
);

export default App;
