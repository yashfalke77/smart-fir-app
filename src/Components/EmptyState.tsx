import React from 'react';
import emptyStateImage from '../assets/images/empy-states.png';

interface EmptyStateProps {
  title: string;
}

const EmptyState = ({ title }: EmptyStateProps) => (
  <main className='h-screen flex flex-col justify-center items-center'>
    <img className='w-1/3' src={emptyStateImage} alt='empty state' />
    <p className='text-center text-xl text-gray-400'>
      No
      {' '}
      {title}
      {' '}
      Found
    </p>
  </main>
);

export default EmptyState;
