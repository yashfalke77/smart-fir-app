import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import EmptyState from '../Components/EmptyState';
import { IFir } from '../models/fir.model';
import firService from '../services/fir.service';
import wrapAsyncFunction from '../utils/catchAsync';
import Footer from '../Components/Footer';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';
import { UserModel } from '../models/user.model';
import { PoliceStation } from '../models/policeStation.model';
import policeStationService from '../services/policeStation.service';

const Fir = () => {
  const [firs, setFirs] = useState<IFir[]>([]);

  const getFirs = async () => {
    const currentUser = localStorageService.getCurrentUser();
    const FirResponse = await firService.getFirByUser(currentUser?._id);
    setFirs(FirResponse.data.data);
  };

  useEffect(wrapAsyncFunction(getFirs), []);

  return (
    <div>
      <Navbar />
      {firs.length === 0 && (
        <EmptyState title='fir' />
      )}
      {firs.length > 0 && (
        <main className='px-52 py-20 h-screen'>
          <h2 className='text-4xl tracking-tight font-semibold text-gray-900 mb-12'>Your Filed FIRs and Their Status</h2>
          <section className='flex flex-col'>
            {[...firs].reverse().map((fir) => (
              <div key={fir._id} className='bg-gray-50 p-6 mb-4 rounded'>
                <div className='flex justify-between'>
                  <div className='left'>
                    <h3 className='text-xl text-primary-800 mb-2'>{fir.subject}</h3>
                    <p className='text-sm'>
                      {fir.user.address.city}
                      ,
                      {' '}
                      {fir.user.address.state}
                    </p>
                  </div>
                  <div className='right'>
                    <h3 className='text-xl mb-2'>
                      Status:
                      {' '}
                      {fir.status[fir.status.length - 1].status}
                    </h3>
                    <ul className='flex list-disc justify-end'>
                      <li>
                        <p className='text-sm mr-10'>
                          Station -
                          {' '}
                          {fir.policeStation.area}
                        </p>
                      </li>
                      <li>
                        <p className='text-sm'>
                          Applied on
                          {' '}
                          {fir.status[fir.status.length - 1].updatedAt.slice(0, 10)}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='text-base mt-3'>
                  <b>Transaction Hash:</b>
                  <span className='text-primary-400'>
                    {' '}
                    {fir.transactionHash}
                  </span>
                </div>
              </div>
            ))}
          </section>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Fir;
