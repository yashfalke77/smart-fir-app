import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { PoliceStation } from '../models/policeStation.model';
import policeStationService from '../services/policeStation.service';
import { UserModel } from '../models/user.model';
import authService from '../services/auth.service';
import firService from '../services/fir.service';
import wrapAsyncFunction from '../utils/catchAsync';
import localStorageService from '../services/localStorage.service';
import { IFirInput } from '../models/fir.model';
import Loader from '../Components/Loader';

interface NewFirProp {drizzle: any}

const NewFir = ({ drizzle }:NewFirProp) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserModel>();
  const [stations, setStations] = useState<PoliceStation[]>([]);
  const navigate = useNavigate();

  const getUserbyId = async () => {
    const currentUser = localStorageService.getCurrentUser();
    const userResponse = await authService.getUserById(currentUser?._id);
    const policeStationResponse = await policeStationService.getAllPoliceStation();
    setStations(policeStationResponse.data.data);
    setUsers(userResponse.data.data);
  };

  useEffect(wrapAsyncFunction(getUserbyId), []);

  const firSchema = Yup.object().shape({
    subject: Yup.string().required().min(10).max(998),
    description: Yup.string().required().min(10).max(2048),
    policeStation: Yup.string().min(24).max(24).required(),
  });

  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm<IFirInput>({
    resolver: yupResolver(firSchema),
  });

  const submitForm: SubmitHandler<IFirInput> = async (data) => {
    try {
      setLoading(true);
      const currentUser = localStorageService.getCurrentUser();
      const FIRData = await firService.newFir({
        ...data, user: currentUser?._id, status: [{ status: 'FIR Registered' }], isEnabled: true,
      });
      const FirDetails = FIRData.data.data.fir;

      setLoading(false);

      const contract = drizzle.contracts.EFIR;

      const resp2 = await contract.methods.fileFIR(
        FirDetails.subject,
        users?.phone,
        users?.email,
        FirDetails.description,
        FirDetails._id,
      ).send();

      const transHash = await firService.updateFir({ transactionHash: resp2.events.FIRfiled.transactionHash, FIRnumber: resp2.events.FIRfiled.returnValues.FIRnumber }, FirDetails._id);
      toast.success('Filed Fir successfully', {
        style: {
          borderRadius: '10px',
          background: '#000',
          color: '#fff',
        },
      });
      navigate('/fir');
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {!users && (<main className='h-screen'><Loader /></main>)}
      {users && (
        <main className='px-52 py-20'>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className='space-y-12'>
              <h2 className='text-4xl tracking-tight font-semibold text-gray-900'>Online Complaint</h2>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-xl font-medium leading-7 text-gray-900'>Personal Information</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>All the personal information will be kept private with us</p>
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-3'>
                    <label htmlFor='disabled-name' className='block mb-2 text-sm font-regular text-gray-900 '>Name</label>
                    <input type='text' id='disabled-name' value={users.name} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>

                  <div className='sm:col-span-3'>
                    <label htmlFor='disabled-email' className='block mb-2 text-sm font-regular text-gray-900 '>Email</label>
                    <input type='email' id='disabled-email' value={users.email} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>

                  <div className='sm:col-span-3 sm:col-start-1'>
                    <label htmlFor='disabled-phone' className='block mb-2 text-sm font-regular text-gray-900 '>Phone No</label>
                    <input type='text' id='disabled-phone' value={users.phone} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>

                  <div className='sm:col-span-3'>
                    <label htmlFor='disabled-gender' className='block mb-2 text-sm font-regular text-gray-900 '>Gender</label>
                    <input type='text' id='disabled-gender' value={users.gender} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-12 mt-10'>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-xl font-medium leading-7 text-gray-900'>Residential Information</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>All the info about your address, this will be shared with police authority</p>
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-full'>
                    <label htmlFor='disabled-street' className='block mb-2 text-sm font-regular text-gray-900 '>Street</label>
                    <input type='text' id='disabled-street' value={users.address.street} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>

                  <div className='sm:col-span-2 sm:col-start-1'>
                    <label htmlFor='disabled-city' className='block mb-2 text-sm font-regular text-gray-900 '>City</label>
                    <input type='email' id='disabled-city' value={users.address.city} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>

                  <div className='sm:col-span-2'>
                    <label htmlFor='disabled-state' className='block mb-2 text-sm font-regular text-gray-900 '>State</label>
                    <input type='text' id='disabled-state' value={users.address.state} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>

                  <div className='sm:col-span-2'>
                    <label htmlFor='disabled-pincode' className='block mb-2 text-sm font-regular text-gray-900 '>ZIP / Postal code</label>
                    <input type='text' id='disabled-pincode' value={users.pincode} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed ' disabled readOnly />
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-12 mt-10'>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-xl font-medium leading-7 text-gray-900'>Complaint Information</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>information related to the complaint that you are making</p>
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-3'>
                    <label htmlFor='subject' className='block mb-2 text-sm font-regular text-gray-900 '>Subject</label>
                    <input {...register('subject')} type='text' id='subject' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Subject' />
                    <p className='text-red-600 text-xs mt-1'>{errors.subject?.message}</p>
                  </div>

                  <div className='sm:col-span-3'>
                    <label htmlFor='policeStation' className='block mb-2 text-sm font-regular text-gray-900'>Police Station</label>
                    <select {...register('policeStation')} onChange={(e) => setValue('policeStation', e.target.value, { shouldValidate: true })} id='policeStation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                      <option value=''>Choose Police Station</option>
                      {stations.map((station) => (
                        <option key={station._id} value={station._id}>{station.name}</option>
                      ))}
                    </select>
                    <p className='text-red-600 text-xs mt-1'>{errors.policeStation?.message}</p>
                  </div>

                  <div className='sm:col-span-full'>
                    <label htmlFor='message' className='block mb-2 text-sm font-base text-gray-900'>Complaint Description</label>
                    <textarea {...register('description')} id='message' rows={4} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' placeholder='Description of your complaint...' />
                    <p className='text-red-600 text-xs mt-1'>{errors.description?.message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-12 mt-10'>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-xl font-medium leading-7 text-gray-900'>Disclaimer</h2>
                <p className='mt-4 text-sm leading-6 text-gray-600'>As per the prevailing laws, FIR of a major crime (′cognizable crimes like theft, burglary, motor vehicle theft, accident, chain-snatching, assault, rape, murder, attempt to commit murder, robbery, dacoity, extortion etc) can only be registered at a Police Station. Please contact your nearest Police Station for the same.</p>
                <p className='mt-4 text-sm leading-6 text-gray-600'>This site shall only entertain complaints about minor crimes (′non-cognizable crimes′).Your complaint shall be referred to the concerned Police Station, where you may be called for further clarification and/or to give statement.</p>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <Button loading={loading} label='File New Fir' icon='pi pi-check' className='text-base font-regular leading-6' />
            </div>
          </form>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default NewFir;
