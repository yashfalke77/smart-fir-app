import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password';
import logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom'
import "../styles/login.scss"

const Login = () => {

    const [value, setValue] = useState('');

    return (
        <div className='login'>
            <div className="login__left"></div>
            <div className="login__right">
                <NavLink to='/'>
                    <img src={logo} className="login__logo" alt="logo" />
                </NavLink>
                <h1 className="display-6 mb-5 mt-4">Login</h1>
                <div className="login__form">
                    <form action="">
                        <div className="p-inputgroup mb-5">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="User Id" />
                        </div>
                        <div className="p-inputgroup mb-5">
                            <Password placeholder='Enter a Password' value={value} onChange={(e) => setValue(e.target.value)} feedback={false} toggleMask />
                        </div>
                        <div className='login__submit'>
                            <Button label="Submit" icon="pi pi-check" iconPos="right" className='w-100' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login