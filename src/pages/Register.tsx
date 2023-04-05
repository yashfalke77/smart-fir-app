import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Datepicker from 'react-tailwindcss-datepicker';
import logo from '../assets/images/logo.png';
import authImage from '../assets/images/auth.png';
import { RegisterUser } from '../models/register.model';

const Register = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(255),
    email: Yup.string().email().required().min(5)
      .max(255),
    phone: Yup.string().required().min(10).max(10)
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/, 'Phone number is not valid'),
    gender: Yup.string().required(),
    address: Yup.object().shape({
      street: Yup.string().required().min(5).max(255),
      city: Yup.string().required().min(5).max(255),
      state: Yup.string().required().min(5).max(255),
    }),
    pincode: Yup.string().min(6).max(6).required(),
    password: Yup.string().min(8).max(100).matches(/^[\da-z]+$/i, 'Password should contain alphabets and numbers only')
      .required(),
  });

  const {
    register, handleSubmit, setValue, formState: { errors },
  } = useForm<RegisterUser>({
    resolver: yupResolver(registerSchema),
  });

  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState({
    startDate: null,
    endDate: null,
  });

  const currentDate = new Date();

  const handleValueChange = (newValue: any) => {
    setDob(newValue);
  };

  const submitForm: SubmitHandler<RegisterUser> = (data) => {
    // eslint-disable-next-line no-console
    console.log({ ...data, ...dob });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <main className='login flex h-screen'>
      <section className='flex-0 flex-grow-0 flex-shrink-0 w-2/5 xl:block lg:block md:hidden sm:hidden'>
        <img className='w-full h-full object-cover' src={authImage} alt='auth' />
      </section>
      <section className='overflow-x-hidden overflow-y-scroll w-full p-24'>
        <div className='flex justify-center'>
          <img className='w-2/12 mb-4' src={logo} alt='logo' />
        </div>
        <h2 className='mb-8 text-4xl tracking-tight font-semibold text-gray-900 text-center'>Register</h2>
        <form onSubmit={handleSubmit(submitForm)} autoComplete='off'>
          <div className='grid grid-cols-2 gap-x-10 gap-y-6 mb-6'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm font-regular text-gray-900 '>Name</label>
              <input {...register('name')} type='name' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Harsh Sunwani' />
              <p className='text-red-600 text-xs mt-1'>{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-regular text-gray-900 '>Email</label>
              <input {...register('email')} type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='harsh.sunwani@vit.edu.in' />
              <p className='text-red-600 text-xs mt-1'>{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor='phone' className='block mb-2 text-sm font-regular text-gray-900 '>Phone Number</label>
              <input {...register('phone')} type='phone' id='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='8408965701' />
              <p className='text-red-600 text-xs mt-1'>{errors.phone?.message}</p>
            </div>
            <div>
              <label htmlFor='dob' className='block mb-2 text-sm font-regular text-gray-900 '>Date of Birth</label>
              <Datepicker
                useRange={false}
                asSingle
                value={dob}
                onChange={handleValueChange}
                displayFormat='DD-MM-YYYY'
                startFrom={new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate())}
                maxDate={new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate())}
                minDate={new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate())}
              />
            </div>
            <div>
              <label htmlFor='state' className='block mb-2 text-sm font-regular text-gray-900 '>State</label>
              <input {...register('address.state')} type='input' id='state' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Maharashtra' />
              <p className='text-red-600 text-xs mt-1'>{errors.address?.state?.message}</p>
            </div>
            <div>
              <label htmlFor='city' className='block mb-2 text-sm font-regular text-gray-900 '>City</label>
              <input {...register('address.city')} type='input' id='city' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Nagpur' />
              <p className='text-red-600 text-xs mt-1'>{errors.address?.city?.message}</p>
            </div>
            <div>
              <label htmlFor='street' className='block mb-2 text-sm font-regular text-gray-900 '>Street</label>
              <input {...register('address.street')} type='input' id='street' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='Gali' />
              <p className='text-red-600 text-xs mt-1'>{errors.address?.street?.message}</p>
            </div>
            <div>
              <label htmlFor='gender' className='block mb-2 text-sm font-regular text-gray-900'>Gender</label>
              <select {...register('gender')} onChange={(e) => setValue('gender', e.target.value, { shouldValidate: true })} id='gender' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                <option value=''>Choose Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='sigma male'>Sigma Male</option>
                <option value='others'>others</option>
              </select>
              <p className='text-red-600 text-xs mt-1'>{errors.gender?.message}</p>
            </div>
            <div>
              <label htmlFor='pincode' className='block mb-2 text-sm font-regular text-gray-900 '>Pincode</label>
              <input {...register('pincode')} type='input' id='pincode' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='400000' />
              <p className='text-red-600 text-xs mt-1'>{errors.pincode?.message}</p>
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-regular text-gray-900 '>Password</label>
              <input {...register('password')} type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='•••••••••' />
              <p className='text-red-600 text-xs mt-1'>{errors.password?.message}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button loading={loading} label='Submit' icon='pi pi-check' className='text-base font-regular leading-6' />
          </div>
          <p className='text-sm mt-3'>
            alreday have an account?
            {' '}
            <a className='text-primary-800 hover:underline' href='/login'>Login here</a>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Register;
