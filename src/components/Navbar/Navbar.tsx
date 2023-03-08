import React, { useEffect, useRef, useState } from "react";
import { Button } from 'primereact/button';
import "./navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import localStorageService from "../../services/localStorage.service";
import { Menu } from 'primereact/menu';


const Navbar = () => {

  const [user, setUser] = useState<any | undefined>(undefined)
  const navigate = useNavigate()
  const menu = useRef<Menu>(null);

  useEffect(() => {
    const currentUser = localStorageService.getCurrentUser()
    setUser(currentUser)
    console.log(currentUser)
  }, [])

  const items = [
    {
      label: `Hi, ${user?.name}`,
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-refresh',
        },
        {
          label: 'Check Status',
          icon: 'pi pi-times',
          url: 'http://localhost:5173/login'
        }
      ]
    },
    {
      label: 'Accounts',
      items: [
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          url: 'http://localhost:5173/logout'
        },
      ]
    }
  ];

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
            <Button label="Register" className="mr-3" outlined />
          </NavLink>
          <NavLink to='/login' className="text-decoration-none">
            <Button label="Login" aria-label="Submit" />
          </NavLink>
        </div>
      )}

      {user && (
        <div>
          <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" onClick={(e) => menu?.current?.toggle(e)} />
          <Menu className="mt-2 menu" model={items} popup ref={menu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
