import React from 'react';

const User = () => (
  <>
    <div className='p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 w-full'>
      <div className='w-full mb-1'>
        <div className='mb-4'>
          <nav className='flex mb-5' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
              <li className='inline-flex items-center'>
                <a href='/' className='inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white'>
                  <svg className='w-5 h-5 mr-2.5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' /></svg>
                  Home
                </a>
              </li>
              <li>
                <div className='flex items-center'>
                  <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
                  <a href='/' className='ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white'>Users</a>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
                  <span className='ml-1 text-gray-400 md:ml-2 dark:text-gray-500' aria-current='page'>List</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>All users</h1>
        </div>
        <div className='sm:flex'>
          <div className='items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700'>
            <form className='lg:pr-3' action='#' method='GET'>
              <label htmlFor='users-search' className='sr-only'>Search</label>
              <div className='relative mt-1 lg:w-64 xl:w-96'>
                <input type='text' name='email' id='users-search' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Search for users' />
              </div>
            </form>
          </div>
          <div className='flex items-center ml-auto space-x-2 sm:space-x-3'>
            <button type='button' data-modal-toggle='add-user-modal' className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
              <svg className='w-5 h-5 mr-2 -ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z' clip-rule='evenodd' /></svg>
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
            <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600'>
              <thead className='bg-gray-100 dark:bg-gray-700'>
                <tr>
                  <th scope='col' className='p-4'>
                    <div className='flex items-center'>
                      <input id='checkbox-all' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor='checkbox-all' className='sr-only'>checkbox</label>
                    </div>
                  </th>
                  <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
                    Name
                  </th>
                  <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
                    Biography
                  </th>
                  <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
                    Position
                  </th>
                  <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
                    Country
                  </th>
                  <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
                    Status
                  </th>
                  <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                  <td className='w-4 p-4'>
                    <div className='flex items-center'>
                      <input id='checkbox-{{ .id }}' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor='checkbox-{{ .id }}' className='sr-only'>checkbox</label>
                    </div>
                  </td>
                  <td className='flex items-center p-4 mr-12 space-x-6 whitespace-nowrap'>
                    <img className='w-10 h-10 rounded-full' src='/images/users/{{ .avatar }}' alt='{{ .name }} avatar' />
                    <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                      <div className='text-base font-semibold text-gray-900 dark:text-white'>Yash the great</div>
                      <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>yash the great</div>
                    </div>
                  </td>
                  <td className='max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400'>.biography hikjnwelidledmlkdmlekmdekmdoenije  djnekjdne nedkend 3e3 enoemdke 3l3kmel3 k3em3lkeml3</td>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>position</td>
                  <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>.country</td>
                  <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white'>
                    <div className='flex items-center'>
                      <div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2' />
                      {' '}
                      <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2' />
                      {' '}
                      .status
                    </div>
                  </td>
                  <td className='p-4 space-x-2 whitespace-nowrap'>
                    <button type='button' data-modal-toggle='edit-user-modal' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-400 dark:focus:ring-primary-800'>
                      <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                        <path fill-rule='evenodd' d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z' clip-rule='evenodd' />
                      </svg>
                      Edit user
                    </button>
                    <button type='button' data-modal-toggle='delete-user-modal' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'>
                      <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z' clip-rule='evenodd' /></svg>
                      Delete user
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className='sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex items-center mb-4 sm:mb-0'>
        <a href='/' className='inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clip-rule='evenodd' /></svg>
        </a>
        <a href='/' className='inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
        </a>
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
          Showing
          {' '}
          <span className='font-semibold text-gray-900 dark:text-white'>1-20</span>
          {' '}
          of
          {' '}
          <span className='font-semibold text-gray-900 dark:text-white'>2290</span>
        </span>
      </div>
      <div className='flex items-center space-x-3'>
        <a href='/' className='inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
          <svg className='w-5 h-5 mr-1 -ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clip-rule='evenodd' /></svg>
          Previous
        </a>
        <a href='/' className='inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
          Next
          <svg className='w-5 h-5 ml-1 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
        </a>
      </div>
    </div>

    {/* <!-- Edit User Modal --> */}
    <div className='fixed z-50 hidden items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full' id='edit-user-modal'>
      <div className='relative left-1/4 top-18 w-full h-screen max-w-2xl px-4 md:h-auto'>
        {/* <!-- Modal content --> */}
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-800'>
          {/* <!-- Modal header --> */}
          <div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700'>
            <h3 className='text-xl font-semibold dark:text-white'>
              Edit user
            </h3>
            <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white' data-modal-toggle='edit-user-modal'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className='p-6 space-y-6'>
            <form action='#'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='first-name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>First Name</label>
                  <input type='text' name='first-name' value='Bonnie' id='first-name' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Bonnie' required />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='last-name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Last Name</label>
                  <input type='text' name='last-name' value='Green' id='last-name' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Green' required />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                  <input type='email' name='email' value='bonnie@flowbite.com' id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='example@company.com' required />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='position' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Position</label>
                  <input type='text' name='position' value='React Developer' id='position' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='e.g. React developer' required />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='current-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Current Password</label>
                  <input type='password' name='current-password' value='••••••••' id='current-password' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='••••••••' required />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='new-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>New Password</label>
                  <input type='password' name='new-password' value='••••••••' id='new-password' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='••••••••' required />
                </div>
                <div className='col-span-6'>
                  <label htmlFor='biography' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Biography</label>
                  <textarea id='biography' rows={4} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='👨‍💻Full-stack web developer. Open-source contributor.'>👨‍💻Full-stack web developer. Open-source contributor.</textarea>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className='items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700'>
                <button className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type='submit'>Save all</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
);

export default User;
