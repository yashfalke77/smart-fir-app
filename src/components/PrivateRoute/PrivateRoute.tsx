import React, { ReactChild, ReactChildren } from 'react'
import { Navigate } from "react-router-dom";
import localStorageService from '../../services/localStorage.service';

export interface PrivateRouteProps {
    children: JSX.Element[] | JSX.Element
}

const PrivateRoute = ({ children }: any) => {

    const currentUser = localStorageService.getCurrentUser()
    return (
        currentUser ? children : <Navigate to='/login' />
    )
}

export default PrivateRoute