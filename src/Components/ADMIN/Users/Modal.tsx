import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Datepicker from 'react-tailwindcss-datepicker';
import { Button } from 'primereact/button';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import toast from 'react-hot-toast';
import { UserInput } from '../../../models/user.model';
import authService from '../../../services/auth.service';

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
const Modal = ({ open, setOpen, title }: ModalProps) => {
  const cancelButtonRef = useRef(null);
  const [register, setRegister] = useState<UserInput>({
    name: undefined,
    email: undefined,
    gender: undefined,
    phone: undefined,
    address: {
      street: '',
      city: '',
      state: '',
    },
    pincode: undefined,
    dob: {
      startDate: null,
      endDate: null,
    },
    password: undefined,
    role: undefined,
  });

  const currentDate = new Date();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault();
      await authService.registerUser({ ...register, dob: register.dob.startDate });
      toast.success('Added Users Successfully', {
        style: {
          borderRadius: '10px',
          background: '#000',
          color: '#fff',
        },
      });
      setOpen(false);
      // navigate('/admin/users');
      window.location.reload();
    } catch (error) {
      setOpen(true);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-50 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className=' xl:w-3/5 lg:w-1/2 md:w-full sm:w-full inline-block align-bottom bg-white rounded-lg
               text-left h-35
            overflow-hidden overflow-y-auto shadow-xl
            transform transition-all
            sm:my-8 sm:align-middle'
            >
              <form onSubmit={handleSubmit}>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title as='h2' className='mb-8 text-4xl tracking-tight font-semibold text-gray-900'>
                      {title}
                      <button onClick={() => (setOpen(false))} type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-hide='authentication-modal'>
                        <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </Dialog.Title>
                    <div className='mt-2 w-full'>
                      <div className='grid grid-cols-2 gap-x-10 gap-y-6 mb-6 w-full'>
                        <div>
                          <label htmlFor='name' className='block mb-2 text-sm font-regular text-gray-900 '>Name</label>
                          <input name='name' value={register.name} onChange={handleChange} required minLength={3} maxLength={255} type='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Harsh Sunwani' />
                        </div>
                        <div>
                          <label htmlFor='email' className='block mb-2 text-sm font-regular text-gray-900 '>Email</label>
                          <input name='email' value={register.email} onChange={handleChange} required minLength={5} maxLength={255} type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='harsh.sunwani@vit.edu.in' />
                        </div>
                        <div>
                          <label htmlFor='phone' className='block mb-2 text-sm font-regular text-gray-900 '>Phone Number</label>
                          <input name='phone' required value={register.phone} onChange={handleChange} minLength={10} maxLength={255} type='phone' id='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='8408965701' />
                        </div>
                        <div>
                          <label htmlFor='dob' className='block mb-2 text-sm font-regular text-gray-900 '>Date of Birth</label>
                          <Datepicker
                            useRange={false}
                            asSingle
                            value={register.dob as unknown as DateValueType}
                            onChange={(newValue) => setRegister({ ...register, dob: { startDate: newValue?.startDate, endDate: newValue?.endDate } })}
                            displayFormat='DD-MM-YYYY'
                            startFrom={new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate())}
                            maxDate={new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate())}
                            minDate={new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate())}
                          />
                        </div>
                        <div>
                          <label htmlFor='state' className='block mb-2 text-sm font-regular text-gray-900 '>State</label>
                          <input name='state' value={register.address.state} onChange={(e) => { setRegister({ ...register, address: { ...register.address, state: e.target.value } }); }} required minLength={5} maxLength={255} type='input' id='state' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Maharashtra' />
                        </div>
                        <div>
                          <label htmlFor='city' className='block mb-2 text-sm font-regular text-gray-900 '>City</label>
                          <input name='city' onChange={(e) => { setRegister({ ...register, address: { ...register.address, city: e.target.value } }); }} required minLength={5} maxLength={255} type='input' id='city' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Nagpur' />
                        </div>
                        <div>
                          <label htmlFor='street' className='block mb-2 text-sm font-regular text-gray-900 '>Street</label>
                          <input name='street' onChange={(e) => { setRegister({ ...register, address: { ...register.address, street: e.target.value } }); }} required minLength={5} maxLength={255} type='input' id='street' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Gali' />
                        </div>
                        <div>
                          <label htmlFor='gender' className='block mb-2 text-sm font-regular text-gray-900'>Gender</label>
                          <select value={register.gender} onChange={(e) => setRegister({ ...register, gender: e.target.value })} required id='gender' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                            <option value=''>Choose Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='sigma male'>Sigma Male</option>
                            <option value='others'>others</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor='pincode' className='block mb-2 text-sm font-regular text-gray-900 '>Pincode</label>
                          <input name='pincode' value={register.pincode} onChange={handleChange} required minLength={6} maxLength={6} type='input' id='pincode' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='400000' />
                        </div>
                        <div>
                          <label htmlFor='role' className='block mb-2 text-sm font-regular text-gray-900'>Role</label>
                          <select value={register.role} onChange={(e) => setRegister({ ...register, role: e.target.value })} required id='role' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                            <option value=''>Choose Role</option>
                            <option value='admin'>Admin</option>
                            <option value='user'>User</option>
                            <option value='authority'>Authority</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor='password' className='block mb-2 text-sm font-regular text-gray-900 '>Password</label>
                          <input name='password' value={register.password} onChange={handleChange} required minLength={8} maxLength={100} type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='•••••••••' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <Button label='Submit' icon='pi pi-check' className='text-base font-regular leading-6 ml-6' />
                  <button
                    type='submit'
                    className='mt-3 w-full inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default Modal;
