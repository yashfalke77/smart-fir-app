import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password';
import logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import "../styles/register.scss"



const Register = () => {
    const gender = ["Male", "Female", "Others"];
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
                    <form >
                        <div className="container1 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <InputText id="name" />
                                    <label className="ml-3" htmlFor="name">Name</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputText id="username" />
                                    <label className="ml-3" htmlFor="username">Username</label>
                                </div>
                                {/* <div className="col-md p-float-label mr-3">
                                    <InputText id="Email" />
                                    <label htmlFor="email">Email</label>
                                </div> */}
                            </div>
                        </div>
                        <div className="container2 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <InputText id="fathername" />
                                    <label className="ml-3" htmlFor="fathername">Father/Husband Name</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputText type="email" id="email" />
                                    <label className="ml-3" htmlFor="email">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="container3 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <Dropdown inputId="dd-gender" options={gender} className="w-full md:w-14rem" />
                                    <label className="ml-3" htmlFor="dd-gender">Gender</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputMask id="ssn_input" mask="99999-99999" />
                                    <label htmlFor="ssn_input" className="ml-3">Contact Number</label>
                                </div>

                            </div>
                        </div>
                        <div className="container4 mb-5">
                            <div className="row">
                                <div className="col-md p-float-label mr-3">
                                    <InputText id="address" />
                                    <label className="ml-3" htmlFor="address">Address</label>
                                </div>
                                <div className="col-md p-float-label mr-3">
                                    <InputMask id="pincode" mask="999999" />
                                    <label htmlFor="pincode" className="ml-3">Pin Code</label>
                                </div>
                            </div>
                        </div>
                        <div className="container4">
                            <div className="row">
                                <div className="col-md p-inputgroup mb-5 mr-3">
                                    <Password placeholder='Enter a Password' feedback={false} toggleMask />
                                </div>
                                <div className="col-md mr-3">
                                    <Calendar className='register__calender' placeholder='Date of Birth' showIcon />
                                </div>
                            </div>
                        </div>
                        <div className='register__submit mb-5'>
                            <Button label="Submit" icon="pi pi-check" iconPos="right" className='w-100' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register