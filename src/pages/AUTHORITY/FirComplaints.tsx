import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import firService from '../../services/fir.service';
import wrapAsyncFunction from '../../utils/catchAsync';
import { IFir } from '../../models/fir.model';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import StatusModel from '../../Components/AUTHORITY/StatusModel';

const FirComplaints = () => {
  const [firs, setFirs] = useState<IFir[]>([]);
  const [addStatus, setAddStatus] = useState(false);
  const [statusFir, setStatusFir] = useState({
    id: '',
    previousStatus: '',
  });

  const handleUpdateStatus = (id: string, previousStatus: string) => {
    setStatusFir({ id, previousStatus });
    setAddStatus(true);
  };

  const { policeStationId } = useParams();

  const getFirByPoliceStation = async () => {
    const FirResponse = await firService.getFirByPoliceStation(policeStationId);
    setFirs(FirResponse.data.data);
  };

  useEffect(wrapAsyncFunction(getFirByPoliceStation), []);
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
                      <a href='/police-station' className='ml-1 text-gray-700 hover:text-primary-600 md:ml-2 '>Police Stations</a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /></svg>
                      <a href='/' className='ml-1 text-gray-700 hover:text-primary-600 md:ml-2 '>FIR Complaints</a>
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
              <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl'>All FIRs</h1>
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
                        Subject
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Status
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Phone No.
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        City
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Pincode
                      </th>
                      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase '>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {firs.map((fir) => (
                      <tr className='hover:bg-gray-100'>
                        <td className='w-4 p-4'>
                          <div className='flex items-center'>
                            <input id='checkbox' aria-describedby='checkbox-1' type='checkbox' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-400' />
                            <label htmlFor='checkbox' className='sr-only'>checkbox</label>
                          </div>
                        </td>
                        <td className='flex items-center p-4 mr-12 space-x-6 whitespace-nowrap'>
                          <div className='text-sm font-normal text-gray-500 '>
                            <div className='text-base font-medium text-gray-900 '>{fir.user.name}</div>
                            <div className='text-sm font-normal text-gray-500 '>
                              FIR No:
                              {fir.FIRnumber}
                            </div>
                          </div>
                        </td>
                        <td className='max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs '>{fir.subject}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{fir.status[fir.status.length - 1].status}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{fir.user.phone}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>{fir.user.address.city}</td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>
                          <div className='flex items-center'>
                            {fir.user.pincode}
                          </div>
                        </td>
                        <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap '>
                          <button type='button' onClick={() => (handleUpdateStatus(fir._id as string, fir.status[fir.status.length - 1].status))} className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto'>
                            Update FIR Status
                          </button>
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
      <StatusModel open={addStatus} setOpen={setAddStatus} firId={statusFir} />
      <Footer />
    </>

  );
};

export default FirComplaints;
