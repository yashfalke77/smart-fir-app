import React, { Fragment, useState, useEffect } from 'react';
import {
  Dialog, Menu, Popover, Transition,
} from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Button } from 'primereact/button';
import localStorageService from '../../services/localStorage.service';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any | undefined>(undefined);

  useEffect(() => {
    const currentUser = localStorageService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const features = [
    {
      name: 'Register Police Station',
      description: 'Register your all police station.',
      href: '/',
      icon: ChartPieIcon,
    },
    {
      name: 'Admin Panel',
      description: 'Speak directly to your customers',
      href: '/',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'About us',
      description: 'Your customers’ data will be safe and secure',
      href: '/',
      icon: FingerPrintIcon,
    },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools',
      href: '/',
      icon: SquaresPlusIcon,
    },
  ];

  return (
    <header className='bg-white border sticky top-0 z-50'>
      {/* for desktop and laptops */}
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8 '
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <h1 className='text-xl font-medium leading-6'>Smart E-Fir</h1>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-base font-regular leading-6 text-gray-900 focus:outline-none'>
              Features
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {features.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-primary-800'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-regular text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href='/' className='text-base font-regular leading-6 text-gray-900'>
            File Fir
          </a>
          <a href='/' className='text-base font-regular leading-6 text-gray-900'>
            Check Status
          </a>
          <a href='/contact' className='text-base font-regular leading-6 text-gray-900'>
            Contact Us
          </a>
        </Popover.Group>
        <div className='hidden  lg:flex lg:items-center lg:flex-1 lg:justify-end'>
          {!user && (
            <>
              <a href='/login' className='text-base font-regular leading-6 text-gray-900 mr-8'>
                Sign In
                {' '}
                <span aria-hidden='true'>&rarr;</span>
              </a>
              <a href='/register'>
                <Button label='Sign Up' className='text-base font-regular leading-6' />
              </a>
            </>
          )}
          {/* Profile dropdown */}
          {user && (
            <Menu as='div' className='relative ml-8'>
              <div>
                <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/'
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/'
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/'
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </nav>

      {/* for mobile devices */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>

                <a
                  href='/'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Register Polise Station
                </a>
                <a
                  href='/'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Admin Panel
                </a>
                <a
                  href='/'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  File Efir
                </a>
                <a
                  href='/'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Check Status
                </a>
                <a
                  href='/contact'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Contact Us
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='/register'
                  className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Sign Up
                </a>
                <a
                  href='/login'
                  className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Sign In
                </a>
                <a
                  href='/'
                  className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-regular leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
