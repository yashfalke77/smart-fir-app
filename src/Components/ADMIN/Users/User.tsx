import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from './Modal';
import { UserModel } from '../../../models/user.model';
import authService from '../../../services/auth.service';
import wrapAsyncFunction from '../../../utils/catchAsync';

const User = () => {
  const [addUser, setAddUser] = useState(false);
  const [users, setUser] = useState<UserModel[]>([]);

  const getUsers = async (): Promise<void> => {
    const usersResponse = await authService.getAllUser();
    setUser(usersResponse.data.data);
  };

  const handleDelete = async (id: string | undefined) => {
    try {
      await authService.deleteUser(id);
      const newUser = users.filter((user) => user._id !== id);
      setUser(newUser);
      toast.success('deleted user successfully', {
        style: {
          borderRadius: '10px',
          background: '#000',
          color: '#fff',
        },
      });
    } catch (error) { /* empty */ }
  };

  useEffect(wrapAsyncFunction(getUsers), []);

  return (
    <>
      {/* Add user */}
      <Modal open={addUser} setOpen={setAddUser} title='Add user' />
      {/* Add user end */}
      <div className='p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 w-full'>
        <div className='w-full mb-1'>
          <div className='mb-4'>
            <nav className='flex mb-5' aria-label='Breadcrumb'>
              <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
                <li className='inline-flex items-center'>
                  <a href='/' className='inline-flex items-center text-gray-700 hover:text-primary-800'>
                    <svg className='w-5 h-5 mr-2.5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' /></svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className='flex items-center'>
                    <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' /></svg>
                    <a href='/' className='ml-1 text-gray-700 hover:text-primary-800 md:ml-2 '>Users</a>
                  </div>
                </li>
                <li>
                  <div className='flex items-center'>
                    <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' /></svg>
                    <span className='ml-1 text-gray-400 md:ml-2 ' aria-current='page'>List</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl '>All users</h1>
          </div>
          <div className='sm:flex'>
            <div className='items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0'>
              <form className='lg:pr-3' action='#' method='GET'>
                <label htmlFor='users-search' className='sr-only'>Search</label>
                <div className='relative mt-1 lg:w-64 xl:w-96'>
                  <input type='text' name='email' id='users-search' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5' placeholder='Search for users' />
                </div>
              </form>
            </div>
            <div className='flex items-center ml-auto space-x-2 sm:space-x-3'>
              <button type='button' onClick={() => (setAddUser(true))} className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto'>
                <svg className='w-5 h-5 mr-2 -ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z' clipRule='evenodd' /></svg>
                Add user
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden shadow'>
              <table className='min-w-full divide-y divide-gray-200 table-fixed'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th scope='col' className='p-4'>
                      <div className='flex items-center'>
                        <input id='checkbox-all' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-400' />
                        <label htmlFor='checkbox-all' className='sr-only'>checkbox</label>
                      </div>
                    </th>
                    <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                      Name
                    </th>
                    <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                      Email
                    </th>
                    <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                      Phone
                    </th>
                    <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                      Gender
                    </th>
                    <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                      Role
                    </th>
                    <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {users.map((user) => (
                    <tr key={user._id} className='hover:bg-gray-100'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input id='checkbox' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-400 ' />
                          <label htmlFor='checkbox' className='sr-only'>checkbox</label>
                        </div>
                      </td>
                      <td className='flex items-center p-4 mr-12 space-x-6 whitespace-nowrap'>
                        <div className='text-sm font-normal text-gray-500 '>
                          <div className='text-base font-medium text-gray-900 '>{user.name}</div>
                          <div className='text-sm font-normal text-gray-500 '>{user.dob.slice(0, 10)}</div>
                        </div>
                      </td>
                      <td className='max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs '>{user.email}</td>
                      <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{user.phone}</td>
                      <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{user.gender}</td>
                      <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>
                        <div className='flex items-center'>
                          {user.role === 'user' && (<div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2' />)}
                          {user.role === 'admin' && (<div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2' />)}
                          {user.role === 'authority' && (<div className='h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2' />)}
                          {' '}
                          {user.role}
                        </div>
                      </td>
                      <td className='p-4 space-x-2 whitespace-nowrap'>
                        {/* <button type='button' data-modal-toggle='edit-user-modal' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-400 dark:focus:ring-primary-800'>
                          <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                            <path fillRule='evenodd' d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z' clipRule='evenodd' />
                          </svg>
                          Edit user
                        </button> */}
                        <button onClick={() => (handleDelete(user._id))} type='button' data-modal-toggle='delete-user-modal' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300'>
                          <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clipRule='evenodd' /></svg>
                          Delete user
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
