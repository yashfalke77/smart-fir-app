import React from 'react';
import { Navigate } from 'react-router-dom';
import localStorageService from '../services/localStorage.service';

const ProtectedRoute = ({ children }: any): JSX.Element => {
  const currentUser = localStorageService.getCurrentUser();
  return (currentUser != null) ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
