import AdminCards from '../../components/Admin/AdminCards'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import SideBar from '../../components/Admin/SideBar'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { useNavigate } from 'react-router-dom'
import { Dropdown, type DropdownChangeEvent } from 'primereact/dropdown'
import { InputMask, type InputMaskChangeEvent } from 'primereact/inputmask'
import { Calendar } from 'primereact/calendar'
import { type User } from '../../models/user.model'
import authService from '../../services/auth.service'
import { toast } from 'react-toastify'
import wrapAsyncFunction from '../../utils/catchAsync'
import { useState } from 'react'
import { Button } from 'primereact/button'

const NewAdminUser = (): JSX.Element => {
  const gender = ['male', 'female', 'others']
  const roles = ['admin', 'user', 'authority']
  const state = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Pondicherry'
  ]

  const navigate = useNavigate()

  const [register, setRegister] = useState<User>({
    name: '',
    email: '',
    gender: undefined,
    phone: undefined,
    address: {
      street: '',
      city: '',
      state: ''
    },
    pincode: undefined,
    dob: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault()
      setLoading(true)
      await authService.registerUser(register)
      setLoading(false)
      toast.success('created user successfully !', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
      navigate('/admin')
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      {/* // <!-- Main content --> */}
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        {/* <!-- Header --> */}
        <AdminNavbar />
        {/* <!-- Main --> */}
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            {/* <!-- Card stats --> */}
            <AdminCards />
            {/* New User form */}
            <div className="register__form bg-surface-primary py-6 px-14">
              <form onSubmit={wrapAsyncFunction(handleSubmit)} autoComplete="off">
                <h2 className='my-2'>Create New User</h2>
                <div className="container1 my-10">
                  <div className="row">
                    <div className="col-md p-float-label mr-3">
                      <InputText id="name" name="name" required minLength={3} maxLength={255} value={register.name} onChange={handleChange} />
                      <label className="ml-3" htmlFor="name">
                    Name
                      </label>
                    </div>
                    <div className="col-md p-float-label mr-3">
                      <InputText type="email" name="email" required value={register.email} onChange={handleChange} id="email" />
                      <label className="ml-3" htmlFor="email">
                    Email
                      </label>
                    </div>
                    <div className="col-md p-float-label mr-3">
                      <Dropdown
                        required
                        inputId="dd-gender"
                        name="gender"
                        options={gender}
                        className="w-full md:w-14rem"
                        value={register.gender}
                        onChange={(e: DropdownChangeEvent) => { setRegister({ ...register, gender: e.target.value }) }}
                      />
                      <label className="ml-3" htmlFor="dd-gender">
                    Gender
                      </label>
                    </div>
                  </div>
                </div>
                <div className="container2 my-10">
                  <div className="row">
                    <div className="col-md p-float-label mr-3">
                      <InputMask
                        name="phone"
                        required
                        minLength={10}
                        maxLength={10}
                        id="phone"
                        mask="99999-99999"
                        value={register.phone}
                        onChange={(e: InputMaskChangeEvent) => { setRegister({ ...register, [e.target.name]: e.target.value }) }}
                      />
                      <label htmlFor="phone" className="ml-3">Contact Number</label>
                    </div>
                    <div className="col-md p-float-label mr-3">
                      <InputText
                        id="street"
                        name="street"
                        required
                        minLength={5}
                        maxLength={255}
                        value={register.address.street}
                        onChange={(e) => { setRegister({ ...register, address: { ...register.address, street: e.target.value } }) }} />
                      <label className="ml-3" htmlFor="street"> Street</label>
                    </div>
                    <div className="col-md p-float-label mr-3">
                      <InputText
                        name="city"
                        id="city"
                        required
                        minLength={5}
                        maxLength={255}
                        value={register.address.city}
                        onChange={(e) => { setRegister({ ...register, address: { ...register.address, city: e.target.value } }) }}
                      />
                      <label className="ml-3" htmlFor="city">City</label>
                    </div>
                  </div>
                </div>
                <div className="container4 my-10">
                  <div className="row">
                    <div className="col-md p-float-label mr-3">
                      <Dropdown
                        inputId="dd-state"
                        required
                        name="state"
                        className="w-full md:w-14rem"
                        options={state}
                        value={register.address.state}
                        onChange={(e) => { setRegister({ ...register, address: { ...register.address, state: e.target.value } }) }} />
                      <label className="ml-3" htmlFor="dd-state"> State</label>
                    </div>
                    <div className="col-md p-float-label mr-3">
                      <InputMask
                        id="pincode"
                        mask="999999"
                        required
                        minLength={6}
                        maxLength={6}
                        name="pincode"
                        value={register.pincode}
                        onChange={(e: InputMaskChangeEvent) => { setRegister({ ...register, [e.target.name]: e.target.value }) }}
                      />
                      <label htmlFor="pincode" className="ml-3">Pin Code</label>
                    </div>
                    <div className="col-md p-inputgroup mr-3">
                      <Password
                        placeholder="Enter a Password"
                        name="password"
                        required
                        minLength={8}
                        maxLength={1024}
                        value={register.password}
                        onChange={(e) => { setRegister({ ...register, [e.target.name]: e.target.value }) }}
                        feedback={false}
                        toggleMask
                      />
                    </div>
                  </div>
                </div>
                <div className="container4">
                  <div className="row my-10">
                    <div className="col-md mr-3">
                      <Calendar
                        required
                        className="register__calender"
                        name="dob"
                        placeholder="Date of Birth"
                        showIcon
                        value={register.dob}
                        onChange={(e) => { setRegister({ ...register, [e.target.name]: e.target.value }) }} />
                    </div>
                    <div className="col-md p-float-label mr-3">
                      <Dropdown
                        inputId="dd-role"
                        required
                        name="User Role"
                        className="w-full md:w-14rem"
                        options={roles}
                        value={register.role}
                        onChange={(e) => { setRegister({ ...register, role: e.target.value }) }} />
                      <label className="ml-3" htmlFor="dd-state">User Role</label>
                    </div>
                  </div>
                </div>
                <div className="register__submit mb-5">
                  <Button type="submit" label="Submit" icon="pi pi-check" iconPos="right" className="w-100" loading={loading} />
                </div>
              </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default NewAdminUser
