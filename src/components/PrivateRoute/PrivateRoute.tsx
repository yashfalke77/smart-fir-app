import { Navigate } from 'react-router-dom'
import localStorageService from '../../services/localStorage.service'

export interface PrivateRouteProps {
  children: JSX.Element[] | JSX.Element
}

const PrivateRoute = ({ children }: any): JSX.Element => {
  const currentUser = localStorageService.getCurrentUser()
  return (currentUser != null) ? children : <Navigate to='/login' />
}

export default PrivateRoute
