import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Fir from './pages/Fir'
import Home from './pages/Home'
import Login from './pages/Login'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import Logout from './pages/Logout'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

function App (): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/file-fir"
          element={
            <PrivateRoute>
              <Fir />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        limit={3}
      />
    </div>
  )
}

export default App
