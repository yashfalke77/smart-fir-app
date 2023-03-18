import { useEffect, useState } from 'react'
import { type User } from '../../models/user.model'
import authService from '../../services/auth.service'
import wrapAsyncFunction from '../../utils/catchAsync'

const List = (): JSX.Element => {
  const imgAvatars = [
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
  ]

  const [users, setUser] = useState<User[]>([])

  const getUsers = async (): Promise<void> => {
    const usersResponse = await authService.getAllUser()
    setUser(usersResponse.data.data)
  }

  useEffect(wrapAsyncFunction(getUsers), [])

  function getRandomElement (array: string[]): string {
    return array[Math.floor(Math.random() * array.length)]
  }

  return (
    <div className="card shadow border-0 mb-7">
      <div className="card-header">
        <h5 className="mb-0">Applications</h5>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Phone</th>
              <th scope="col">Pincode</th>
              <th scope="col">Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <img alt="..." src={getRandomElement(imgAvatars)} className="avatar avatar-sm rounded-circle me-2 " />
                  <a className="text-heading font-semibold" href="#">
                    {user.name}
                  </a>
                </td>
                <td>
                  {user.dob.slice(0, 10)}
                </td>
                <td>
                  <a className="text-heading font-semibold" href="#">
                    {user.phone}
                  </a>
                </td>
                <td>
                  {user.pincode}
                </td>
                <td>
                  <span className="badge badge-lg badge-dot">
                    <i className={user.role === 'admin' ? 'bg-success' : 'bg-danger'}></i>{user.role}
                  </span>
                </td>
                <td className="text-end">
                  <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                    <span className=" pe-2">
                      <i className="bi bi-pencil"></i>
                    </span>
                    <span>Edit</span>
                  </a>
                  <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <div className="card-footer border-0 py-5">
        <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
      </div>
    </div>
  )
}

export default List
