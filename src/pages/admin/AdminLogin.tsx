import '../../styles/admin/login.scss'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { NavLink, useNavigate } from 'react-router-dom'
import { type LoginModel } from '../../models/user.model'
import authService from '../../services/auth.service'
import localStorageService from '../../services/localStorage.service'
import { toast } from 'react-toastify'
import wrapAsyncFunction from '../../utils/catchAsync'

const AdminLogin = (): JSX.Element => {
  const [login, setLogin] = useState<LoginModel>({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      setLoading(true)
      const userResponse = await authService.loginUser(login)
      if (userResponse.data.data.user.role === 'admin') {
        localStorageService.setJwt(userResponse.data.data)
        setLoading(false)
        toast.success('Welcome to smart fir', {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
        navigate('/admin')
      } else {
        toast.error('Invalid Credentials', {
          position: 'bottom-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
        setLoading(false)
        navigate('/admin/login')
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="text-center">
        <NavLink to="/">
          <img src={logo} className="container__logo" alt="logo" />
          <h1 className="display-6 mb-3 mt-4 container__headingPrimary">Admin Login</h1>
        </NavLink>
      </div>

      <div className="container__form">
        <form onSubmit={wrapAsyncFunction(handleSubmit)}>
          <div className="p-inputgroup my-8">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              required
              placeholder="Email"
              type="email"
              name="email"
              value={login.email}
              onChange={(e) => { setLogin({ ...login, [e.target.name]: e.target.value }) }}
            />
          </div>
          <div className="p-inputgroup my-8">
            <Password
              name="password"
              placeholder="Enter a Password"
              required
              minLength={8}
              maxLength={1024}
              value={login.password}
              onChange={(e) => { setLogin({ ...login, [e.target.name]: e.target.value }) }}
              feedback={false}
              toggleMask
            />
          </div>
          <div className="login__submit">
            <Button label="Submit" icon="pi pi-check" iconPos="right" className="w-100" loading={loading} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
