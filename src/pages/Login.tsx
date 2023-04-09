import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../assets/images/logo.png';
import authImage from '../assets/images/auth.png';
import { LoginUser } from '../models/login.model';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';

const Login = () => {
  const loginSchema = Yup.object().shape({
    phone: Yup.string().required().min(10).max(10)
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\(\d{2,3}\\)[ \\-]*)|(\d{2,4})[ \\-]*)*?\d{3,4}?[ \\-]*\d{3,4}?$/, 'Phone number is not valid'),
    password: Yup.string().min(8).max(100).matches(/^[\da-z]+$/i, 'Password should contain alphabets and numbers only')
      .required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LoginUser>({
    resolver: yupResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm: SubmitHandler<LoginUser> = async (data) => {
    try {
      setLoading(true);
      const userResponse = await authService.loginUser({ ...data });
      localStorageService.setJwt(userResponse.data.data.token);
      setLoading(false);
      toast.success('Welcome to smart fir', {
        style: {
          borderRadius: '10px',
          background: '#000',
          color: '#fff',
        },
      });
      navigate('/');
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <main className='login flex h-screen'>
      <section className='flex-0 flex-grow-0 flex-shrink-0 w-2/5 xl:block lg:block md:hidden sm:hidden'>
        <img className='w-full h-full object-cover' src={authImage} alt='auth' />
      </section>
      <section className='overflow-x-hidden overflow-y-scroll w-full px-48 py-24'>
        <div className='flex justify-center'>
          <img className='w-2/12 mb-4' src={logo} alt='logo' />
        </div>
        <h2 className='mb-8 text-4xl tracking-tight font-semibold text-gray-900 text-center'>Login</h2>
        <form onSubmit={handleSubmit(submitForm)} autoComplete='off'>
          <div className='mb-6'>
            <label htmlFor='phone' className='block mb-2 text-sm font-regular text-gray-900 '>Phone Number</label>
            <input {...register('phone')} minLength={10} maxLength={10} type='phone' id='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='8408965701' />
            <p className='text-red-600 text-xs mt-1'>{errors.phone?.message}</p>
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block mb-2 text-sm font-regular text-gray-900 '>Password</label>
            <input {...register('password')} type='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5 ' placeholder='•••••••••' />
            <p className='text-red-600 text-xs mt-1'>{errors.password?.message}</p>
          </div>
          <div className='flex justify-end mb-6'>
            <label htmlFor='remember' className='text-sm font-regular text-gray-900'>
              <a href='/' className='text-primary-800 hover:underline'>Forgot Password?</a>
            </label>
          </div>
          {/* <button type='submit' className='text-white bg-primary-800 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-regular rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '>Submit</button> */}
          <div className='flex justify-center'>
            <Button loading={loading} label='Submit' icon='pi pi-check' className='text-base font-regular leading-6' />
          </div>
          <p className='text-sm mt-3'>
            don&apos;t have an account?
            {' '}
            <NavLink className='text-primary-800 hover:underline' to='/register'>Register here</NavLink>
          </p>

        </form>
      </section>
    </main>
  );
};

export default Login;
