import { NavLink } from 'react-router-dom'

const AdminNavbar = (): JSX.Element => {
  return (
    <header className="bg-surface-primary border-bottom pt-6 pb-6">
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
              {/* <!-- Title --> */}
              <h1 className="h2 mb-0 ls-tight">Admin Panel</h1>
            </div>
            {/* <!-- Actions --> */}
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1">
                <NavLink to="/admin/new" className="btn d-inline-flex btn-sm btn-primary mx-1">
                  <span className=" pe-2">
                    <i className="bi bi-plus"></i>
                  </span>
                  <span>Create</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminNavbar
