import React from 'react';
import {
  ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'File Fir',
    description: 'File a FIR electronically without visiting the local police station.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Check Status',
    description: 'You can check the real-time status of your FIR as we keep them updated.',
    icon: LockClosedIcon,
  },
  {
    name: 'No Fir Tampering',
    description:
      'We do not allow any superiror authority to manipulate your fir / data',
    icon: ArrowPathIcon,
  },
  {
    name: 'No false registration',
    description:
      'We Prevent the false registration of fir on anyone by anyone',
    icon: FingerPrintIcon,
  },
];

const Features = () => (
  <div className='bg-white py-18 sm:py-32'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-primary-800'>Smart FIR</h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Securing e-FIR Data Through Blockchain
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-gray-900'>
                <div className='absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400'>
                  <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Features;
