import '../../styles/admin/index.scss'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const SideBar = (): JSX.Element => {
  return (
    <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
      <div className="container-fluid">
        {/* <!-- Toggler --> */}
        <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Brand --> */}
        <a className="d-flex align-items-center navbar-brand py-lg-2 mb-lg-2 px-lg-10 me-0" href="#">
          <img className='w-1/3 h-1/3' src={logo} alt="..." />
          <p className='ml-4 font-bold text-xl'>E-FIR</p>
        </a>
        {/* <!-- User menu (mobile) --> */}
        <div className="navbar-user d-lg-none">
          {/* <!-- Dropdown --> */}
          <div className="dropdown">
            {/* <!-- Menu --> */}
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
              <a href="#" className="dropdown-item">Profile</a>
              <a href="#" className="dropdown-item">Settings</a>
              <a href="#" className="dropdown-item">Billing</a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">Logout</a>
            </div>
          </div>
        </div>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          {/* <!-- Navigation --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                <i className="bi bi-house"></i> Dashboard - User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/policeStation">
                <i className="bi bi-bar-chart"></i> Police Stations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/firs">
                <i className="bi bi-bookmarks"></i> Firs
              </NavLink>
            </li>
          </ul>
          {/* <!-- Divider --> */}
          <hr className="navbar-divider my-5 opacity-20" />
          {/* <!-- Push content down --> */}
          <div className="mt-auto"></div>
          {/* <!-- User (md) --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person-square"></i> Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-box-arrow-left"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
