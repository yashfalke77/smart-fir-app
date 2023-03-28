import React from 'react';
import authImage from '../assets/images/auth.png';

const Login = () => (
  <main className='flex h-screen'>
    <section className='flex-0 flex-grow-0 flex-shrink-0 w-2/5'>
      <img className='w-full h-full object-cover' src={authImage} alt='auth' />
    </section>
    <section className='overflow-x-hidden overflow-y-scroll w-full p-48'>
      <form>
        <div className='mb-6'>
          <label htmlFor='phone' className='block mb-2 text-sm font-regular text-gray-900 '>Phone Number</label>
          <input type='phone' id='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='8408965701' required />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='block mb-2 text-sm font-regular text-gray-900 '>Password</label>
          <input type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='•••••••••' required />
        </div>
        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input id='remember' type='checkbox' value='' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300' required />
          </div>
          <label htmlFor='remember' className='ml-2 text-sm font-regular text-gray-900'>
            I agree with the
            {' '}
            <a href='/' className='text-blue-600 hover:underline'>terms and conditions</a>
            .
          </label>
        </div>
        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-regular rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '>Submit</button>
      </form>
    </section>
  </main>
);

export default Login;
