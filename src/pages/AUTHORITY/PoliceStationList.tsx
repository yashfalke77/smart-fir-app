import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { PoliceStation } from '../../models/policeStation.model';
import policeStationService from '../../services/policeStation.service';
import wrapAsyncFunction from '../../utils/catchAsync';

const PoliceStationList = () => {
  const [policeStation, setPoliceStation] = useState<PoliceStation[]>([]);

  const getPoliceStations = async () => {
    const policeStationResponse = await policeStationService.getAllPoliceStation();
    setPoliceStation(policeStationResponse.data.data);
  };

  useEffect(wrapAsyncFunction(getPoliceStations), []);

  return (
    <>
      <Navbar />
      <main className='h-screen'>
        <div className='p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 w-full'>
          <div className='w-full mb-1'>
            <div className='mb-4'>
              <nav className='flex mb-5' aria-label='Breadcrumb'>
                <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
                  <li className='inline-flex items-center'>
                    <a href='/' className='inline-flex items-center text-gray-700 hover:text-primary-600 '>
                      <svg className='w-5 h-5 mr-2.5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' /></svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
                      <a href='/' className='ml-1 text-gray-700 hover:text-primary-600 md:ml-2 '>Police Stations</a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
                      <span className='ml-1 text-gray-400 md:ml-2' aria-current='page'>List</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl'>All Police Station Under Your Authority</h1>
            </div>
            <div className='sm:flex'>
              <div className='items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0'>
                <form className='lg:pr-3' action='#' method='GET'>
                  <label htmlFor='station-search' className='sr-only'>Search</label>
                  <div className='relative mt-1 lg:w-64 xl:w-96'>
                    <input type='text' name='email' id='station-search' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-400 focus:border-primary-400 block w-full p-2.5' placeholder='Search for police stations' />
                  </div>
                </form>
              </div>
              <div className='flex items-center ml-auto space-x-2 sm:space-x-3'>
                <Link to='/police-station/new' className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto'>
                  <svg className='w-5 h-5 mr-2 -ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z' clip-rule='evenodd' /></svg>
                  Add Police Station
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='overflow-x-auto'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden shadow'>
                <table className='min-w-full divide-y divide-gray-200 table-fixed'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th scope='col' className='p-4'>
                        <div className='flex items-center'>
                          <input id='checkbox-all' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-400' />
                          <label htmlFor='checkbox-all' className='sr-only'>checkbox</label>
                        </div>
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Name
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Address
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Pincode
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Area
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        In Charge Name
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {policeStation.map((p) => (
                      <tr className='hover:bg-gray-100'>
                        <td className='w-4 p-4'>
                          <div className='flex items-center'>
                            <input id='checkbox' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-400' />
                            <label htmlFor='checkbox' className='sr-only'>checkbox</label>
                          </div>
                        </td>
                        <td className='flex items-center p-4 mr-12 space-x-6 whitespace-nowrap'>
                          <div className='text-sm font-normal text-gray-500 '>
                            <div className='text-base font-medium text-gray-900 '>{p.name}</div>
                            <div className='text-sm font-normal text-gray-500 '>{p.area}</div>
                          </div>
                        </td>
                        <td className='max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs '>{p.address}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{p.pincode}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{p.area}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>
                          <div className='flex items-center'>
                            {p.inChargeName}
                          </div>
                        </td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>
                          <Link to={`/police-station/fir/${p._id}`} className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto'>
                            View FIR
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliceStationList;
