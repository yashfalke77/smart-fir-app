import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => (

  <footer className='shadow bg-gray-900'>
    <div className='w-full container mx-auto p-4 md:px-6 md:py-8'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a href='https://flowbite.com/' className='flex items-center mb-4 sm:mb-0'>
          <img src={logo} className='h-8 mr-3' alt='Flowbite Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Smart FIR</span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm font-regular text-gray-400 sm:mb-0'>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6 '>About</a>
          </li>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6'>Privacy Policy</a>
          </li>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6 '>Licensing</a>
          </li>
          <li>
            <a href='/' className='hover:underline'>Contact</a>
          </li>
        </ul>
      </div>
      <hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-400 sm:text-center'>
        © 2023
        {' '}
        <a href='https://flowbite.com/' className='hover:underline'>ITB18(VIT)™</a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>

);

export default Footer;
