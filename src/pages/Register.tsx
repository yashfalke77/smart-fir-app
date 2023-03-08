import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password';
import logo from "../assets/images/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import "../styles/register.scss"
import { User } from '../models/user.model';
import authService from '../services/auth.service';
import { toast } from 'react-toastify';
import localStorageService from '../services/localStorage.service';



const Register = () => {
    const gender = ["male", "female", "others"];
    const state = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Pondicherry",]

    const navigate = useNavigate()

    const [register, setRegister] = useState<User>({
        name: "",
        email: "",
        gender: undefined,
        phone: undefined,
        address: {
            street: "",
            city: "",
            state: "",
        },
        pincode: undefined,
        dob: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            setLoading(true)
            const userResponse = await authService.registerUser({ ...register, role: 'user' });
            console.log(userResponse)
            localStorageService.setJwt(userResponse.data.data.authToken)
            setLoading(false)
            toast.success("Welcome to smart fir", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            navigate('/')
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className='register'>
            <div className="register__left"></div>

            <div className="register__right">
                <div className="register__header">
                    <NavLink to='/'>
                        <img src={logo} className="register__logo" alt="logo" />
                    </NavLink>
                    <h1 className="display-6 mb-3 mt-4 register__headingPrimary">Register</h1>
                    <p className="mb-5">Already have an account? <NavLink to='/login'>login</NavLink></p>
                </div>
                <div className="register__form">
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className="container1 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <InputText id="name" name='name' value={register.name} onChange={handleChange} />
                                    <label className="ml-3" htmlFor="name" >Name</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputText type="email" name='email' value={register.email} onChange={handleChange} id="email" />
                                    <label className="ml-3" htmlFor="email">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="container2 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <Dropdown inputId="dd-gender" name='gender' options={gender} className="w-full md:w-14rem" value={register.gender} onChange={(e: DropdownChangeEvent) => setRegister({ ...register, gender: e.target.value })} />
                                    <label className="ml-3" htmlFor="dd-gender">Gender</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputMask name='phone' required id="phone" mask="99999-99999" value={register.phone} onChange={(e: InputMaskChangeEvent) => setRegister({ ...register, [e.target.name]: e.target.value })} />
                                    <label htmlFor="phone" className="ml-3">Contact Number</label>
                                </div>
                            </div>
                        </div>
                        <div className="container3 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <InputText id="street" name='street' value={register.address.street} onChange={(e) => setRegister({ ...register, address: { ...register.address, street: e.target.value, } })} />
                                    <label className="ml-3" htmlFor="street">Street</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputText name='city' id="city" value={register.address.city} onChange={(e) => setRegister({ ...register, address: { ...register.address, city: e.target.value, } })} />
                                    <label className="ml-3" htmlFor="city">City</label>
                                </div>
                            </div>
                        </div>
                        <div className="container4 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <Dropdown inputId="dd-state" name='state' className="w-full md:w-14rem" options={state} value={register.address.state} onChange={(e) => setRegister({ ...register, address: { ...register.address, state: e.target.value, } })} />
                                    <label className="ml-3" htmlFor="dd-state">State</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputMask id="pincode" mask="999999" name='pincode' value={register.pincode} onChange={(e: InputMaskChangeEvent) => setRegister({ ...register, [e.target.name]: e.target.value })} />
                                    <label htmlFor="pincode" className="ml-3">Pin Code</label>
                                </div>
                            </div>
                        </div>
                        <div className="container4">
                            <div className="row">
                                <div className="col-md p-inputgroup mb-5 mr-3">
                                    <Password placeholder='Enter a Password' name='password' value={register.password} onChange={(e) => setRegister({ ...register, [e.target.name]: e.target.value })} feedback={false} toggleMask />
                                </div>
                                <div className="col-md mr-3">
                                    <Calendar className='register__calender' name='dob' placeholder='Date of Birth' showIcon value={register.dob} onChange={(e) => setRegister({ ...register, [e.target.name]: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className='register__submit mb-5'>
                            <Button type='submit' label="Submit" icon="pi pi-check" iconPos="right" className='w-100' loading={loading} />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register