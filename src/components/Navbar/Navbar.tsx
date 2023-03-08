import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import "./navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import localStorageService from "../../services/localStorage.service";

const Navbar = () => {

  const [user, setUser] = useState<object | undefined>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = localStorageService.getCurrentUser()
    setUser(currentUser)
    console.log(currentUser)
  }, [])

  return (
    <nav className="nav">
      <div className="nav__left">
        <NavLink to='/' className="text-decoration-none text-dark">
          <h2 className="nav__logo">E-FIR</h2>
        </NavLink>
        <ul className="nav__list">
          <li className="nav__items">
            <NavLink to='/file-fir' className="nav__link">File a FIR</NavLink>
          </li>
          <li className="nav__items">
            <NavLink to='/' className="nav__link">Check Status</NavLink>
          </li>
          <li className="nav__items">
            <NavLink to='/' className="nav__link">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      {!user && (
        <div className="nav__right">
          <NavLink to="/register" className="text-decoration-none">
            <Button label="Register" className="p-button-outlined mr-3  text-uppercase" />
          </NavLink>
          <NavLink to='/login' className="text-decoration-none">
            <Button label="LOGIN" aria-label="Submit" />
          </NavLink>
        </div>
      )}

      {user && (
        <NavLink to='/logout' className="text-decoration-none">
          <Button label="LOGOUT" aria-label="Submit" />
        </NavLink>)}
    </nav>
  );
};

export default Navbar;
