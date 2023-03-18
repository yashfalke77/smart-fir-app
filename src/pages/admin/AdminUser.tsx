import AdminCards from '../../components/Admin/AdminCards'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import List from '../../components/Admin/UserList'
import SideBar from '../../components/Admin/SideBar'
import '../../styles/admin/index.scss'

const AdminHome = (): JSX.Element => {
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
            <List />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminHome
