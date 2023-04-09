import React from 'react';

const FAQ = () => (
  <section className='bg-gray-50 px-16'>
    <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
      <h2 className='mb-8 text-3xl tracking-tight font-bold text-gray-900'>Frequently asked questions</h2>
      <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2'>
        <div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900'>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              Can I file an FIR online?
            </h3>
            <p className='text-gray-500'>Yes, you can file an FIR online through our website without having to physically go to a police station.</p>
          </div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900'>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              What information do I need to provide to file an FIR online?
            </h3>
            <p className='text-gray-500'>You will need to provide information about the offense, including the date, time, location, and a brief description of what happened. You will also need to provide your personal information, such as your name, address, and contact details.</p>
          </div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900'>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              Do I need to pay any fees to file an FIR online?
            </h3>
            <p className='text-gray-500  '>No, there are no fees associated with filing an FIR online through our website.</p>
          </div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900'>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500  ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              What happens after I file an FIR online?
            </h3>
            <p className='text-gray-500  '>Once you file an FIR online, it will be forwarded to the concerned police station for further action. The police will investigate the matter and take appropriate action based on the facts of the case.</p>
            <p className='text-gray-500  '>
              Find out more information by
              {' '}
              <a href='https://mumbaipolice.gov.in/' className='font-medium underline text-primary-600   hover:no-underline'>Mumbai Police official website</a>
              .
            </p>
          </div>
        </div>
        <div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900   '>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500  ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              Can I file an anonymous FIR online?
            </h3>
            <p className='text-gray-500  '>
              No, you cannot file an anonymous FIR online. You will need to provide your personal information when filing the FIR.
            </p>
          </div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900   '>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500  ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              How long does it take for the police to take action after I file an FIR?
            </h3>
            <p className='text-gray-500  '>
              The time taken by the police to take action after you file an FIR can vary depending on the nature of the offense and the facts of the case. However, the police are required to take action promptly and complete the investigation as soon as possible.
            </p>
          </div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900   '>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500  ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              Can I track the status of my FIR online?
            </h3>
            <p className='text-gray-500  '>Yes, you can track the status of your FIR online through our website. You will need to enter the FIR number provided to you when you filed the FIR.</p>
          </div>
          <div className='mb-10'>
            <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900   '>
              <svg className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500  ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' /></svg>
              What should I do if I have additional information about the case after filing an FIR online?
            </h3>
            <p className='text-gray-500  '>If you have additional information about the case after filing an FIR online, you should contact the concerned police station and provide them with the information.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
