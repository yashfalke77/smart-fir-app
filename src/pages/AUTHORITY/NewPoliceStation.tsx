import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { PoliceStation } from '../../models/policeStation.model';
import policeStationService from '../../services/policeStation.service';

const NewPoliceStation = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const policeStationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(255),
    address: Yup.string().required().min(5).max(255),
    pincode: Yup.string().min(6).max(6).required(),
    area: Yup.string().min(3).max(255).required(),
    inChargeName: Yup.string().min(3).max(255).required(),
  });

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<PoliceStation>({
    resolver: yupResolver(policeStationSchema),
  });

  const submitForm: SubmitHandler<PoliceStation> = async (data) => {
    try {
      setLoading(true);
      await policeStationService.newPoliceStation(data);
      setLoading(false);
      toast.success('Created new Police Station Successfully !', {
        style: {
          borderRadius: '10px',
          background: '#000',
          color: '#fff',
        },
      });
      navigate('/police-station');
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className='px-52 py-20'>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-4xl tracking-tight font-semibold text-gray-900'>Register Police Station</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>Add new Police Station under Your authority. Note your information have been kept private</p>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label htmlFor='name' className='block mb-2 text-sm font-regular text-gray-900 '>Name</label>
                  <input {...register('name')} type='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='KalaChowki' />
                  <p className='text-red-600 text-xs mt-1'>{errors.name?.message}</p>
                </div>

                <div className='sm:col-span-3'>
                  <label htmlFor='incharge-name' className='block mb-2 text-sm font-regular text-gray-900 '>InCharge Name</label>
                  <input {...register('inChargeName')} type='incharge' id='incharge' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Harsh Sunwani' />
                  <p className='text-red-600 text-xs mt-1'>{errors.inChargeName?.message}</p>
                </div>

                <div className='col-span-full'>
                  <label htmlFor='street' className='block mb-2 text-sm font-regular text-gray-900 '>Street Address</label>
                  <input {...register('address')} type='street' id='street' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Abhyudaya Nagar, Parel, Mumbai, Maharashtra 400033' />
                  <p className='text-red-600 text-xs mt-1'>{errors.address?.message}</p>
                </div>

                <div className='sm:col-span-3 sm:col-start-1'>
                  <label htmlFor='area' className='block mb-2 text-sm font-regular text-gray-900 '>Area</label>
                  <input {...register('area')} type='area' id='area' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Parel' />
                  <p className='text-red-600 text-xs mt-1'>{errors.area?.message}</p>
                </div>

                <div className='sm:col-span-3'>
                  <label htmlFor='pincode' className='block mb-2 text-sm font-regular text-gray-900 '>Pincode</label>
                  <input {...register('pincode')} type='pincode' id='pincode' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='400033' />
                  <p className='text-red-600 text-xs mt-1'>{errors.pincode?.message}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <Button loading={loading} label='Save Police Station' icon='pi pi-check' className='text-base font-regular leading-6' />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default NewPoliceStation;
