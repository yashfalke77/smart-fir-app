import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Datepicker from 'react-tailwindcss-datepicker';
import { Button } from 'primereact/button';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';
import toast from 'react-hot-toast';
import firService from '../../services/fir.service';

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  firId: any;
}
const StatusModel = ({ open, setOpen, firId }: ModalProps) => {
  const [status, setStatus] = useState(firId.previousStatus);

  const cancelButtonRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      event.preventDefault();

      const response = await firService.updateFir({ status: [{ status }] }, firId.id);

      toast.success('Updated Status Successfully', {
        style: {
          borderRadius: '10px',
          background: '#000',
          color: '#fff',
        },
      });
      setOpen(false);
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
               text-left h-15
            overflow-hidden overflow-y-auto shadow-xl
            transform transition-all
            sm:my-8 sm:align-middle'
            >
              <form onSubmit={handleSubmit}>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title as='h2' className='mb-8 text-4xl tracking-tight font-semibold text-gray-900'>
                      Update Status
                      <button onClick={() => (setOpen(false))} type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-hide='authentication-modal'>
                        <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </Dialog.Title>
                    <div className='mt-2 w-full'>
                      <div className='grid grid-cols-1 gap-x-10 gap-y-6 mb-6 w-full'>
                        <div>
                          <label htmlFor='status' className='block mb-2 text-sm font-regular text-gray-900 '>Status</label>
                          <input value={status} name='status' onChange={handleChange} required minLength={3} maxLength={255} type='text' id='status' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Update Status' />
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
export default StatusModel;
