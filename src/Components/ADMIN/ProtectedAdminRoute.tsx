import React from 'react';
import { Navigate } from 'react-router-dom';
import localStorageService from '../../services/localStorage.service';

const ProtectedAdminRoute = ({ children }: any): JSX.Element => {
  const currentUser = localStorageService.getCurrentUser();

  const protectRoute = () => {
    if (currentUser) {
      if (currentUser.role === 'admin') {
        return children;
      }
      return <Navigate to='/' />;
    }
    return <Navigate to='/login' />;
  };
  return (protectRoute());
};

export default ProtectedAdminRoute;
