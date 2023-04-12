import React from 'react';

const Statistics = () => (
  <div className='grid grid-cols-2 gap-8 mx-16 my-4'>
    {/* <!-- Activity Card --> */}
    <div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-900'>Latest Activity</h3>
        <a href='/' className='inline-flex items-center p-2 text-sm font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700'>
          View all
        </a>
      </div>
      <ol className='relative border-l border-gray-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400'>April 2023</time>
          <h3 className='text-lg font-semibold text-gray-900'>Application UI design in Figma</h3>
          <p className='mb-4 text-base font-normal text-gray-500'>Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <a href='/' className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 '>
            Learn more
            {' '}
            <svg className='w-3 h-3 ml-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
          </a>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400'>March 2023</time>
          <h3 className='text-lg font-semibold text-gray-900'>Marketing UI code in Flowbite</h3>
          <p className='mb-4 text-base font-normal text-gray-500'>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          <a href='https://flowbite.com/blocks/' className='inline-flex items-center text-xs font-medium hover:underline text-primary-700 sm:text-sm'>
            Go to Flowbite Blocks
            <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </li>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white' />
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 '>February 2023</time>
          <h3 className='text-lg font-semibold text-gray-900'>Marketing UI design in Figma</h3>
          <p className='text-base font-normal text-gray-500 '>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </li>
      </ol>
    </div>
    {/* <!--Carousel widget --> */}
    <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div id='carousel' className='relative' data-carousel=''>
        <div className='relative mx-auto overflow-hidden h-[30rem] lg:h-[24rem]'>
          <div className='duration-700 ease-in-out bg-white' data-carousel-item>
            <div className='flex items-center mb-4 text-lg font-medium text-primary-600'>
              <svg className='w-6 h-6 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path clipRule='evenodd' fillRule='evenodd' d='M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z' />
              </svg>
              Insights
            </div>
            <h3 className='mb-4 text-2xl font-medium text-gray-900'>You are going to grow by 44% next year</h3>
            <p className='mb-4 text-gray-500'>Get started with a free and open-source admin dashboard layout built with Tailwind CSS and Flowbite featuring charts, widgets, CRUD layouts, authentication pages, and more</p>
            <p className='mb-2 text-lg font-medium text-gray-900'>Key Takeaways:</p>
            <ul className='pl-4 mb-4 space-y-3 text-gray-500 list-disc'>
              <li>What are the new challenges in the delivery industry due to new consumer expectations.</li>
              <li>How the online delivery business model is diversifying to meet new demands.</li>
              <li>Which new technology requirements must be met to ensure true retail experiences.</li>
              <li>How a headless commerce architecture solves challenges in the industry.</li>
            </ul>
            <a href='/' className='inline-flex items-center p-2 font-medium rounded-lg text-primary-700 hover:bg-gray-100'>
              Get me there
              <svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path clipRule='evenodd' fillRule='evenodd' d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z' />
              </svg>
            </a>
          </div>
          <div className='duration-700 ease-in-out bg-white' data-carousel-item>
            <div className='flex items-center mb-4 text-lg font-medium text-teal-500'>
              <svg className='w-6 h-6 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path clipRule='evenodd' fillRule='evenodd' d='M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z' />
                <path clipRule='evenodd' fillRule='evenodd' d='M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z' />
              </svg>
              Tips to grow
            </div>
            <p className='mb-4 text-gray-500'>Marketing, sales & business growth for small business. Improve your marketing & promotion results - and grow your sales!</p>
            <p className='mb-4 text-lg font-medium text-gray-900'>What you will learn:</p>
            <ul className='pl-2 mb-4 space-y-3 text-gray-500 list-disc'>
              <li className='flex space-x-2'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' />
                </svg>
                <span className='leading-tight'>Dynamic reports and dashboards</span>
              </li>
              <li className='flex space-x-2'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' />
                </svg>
                <span className='leading-tight'>Learn from competitors about what to do, and not to do</span>
              </li>
              <li className='flex space-x-2'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' />
                </svg>
                <span className='leading-tight'>Take their business to the next level</span>
              </li>
              <li className='flex space-x-2'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' />
                </svg>
                <span className='leading-tight'>Limitless business automation</span>
              </li>
              <li className='flex space-x-2'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' />
                </svg>
                <span className='leading-tight'>Build relationships with other businesses to co-promote</span>
              </li>
              <li className='flex space-x-2'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path clipRule='evenodd' fillRule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' />
                </svg>
                <span className='leading-tight'>Make their customers feel loved and apprecaited</span>
              </li>
            </ul>
            <a href='/' className='inline-flex items-center p-2 font-medium rounded-lg text-primary-700 hover:bg-gray-100'>
              Lets start
              <svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path clipRule='evenodd' fillRule='evenodd' d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z' />
              </svg>
            </a>
          </div>
          <div className='duration-700 ease-in-out bg-white' data-carousel-item>
            <div className='flex items-center mb-4 text-lg font-medium text-purple-600'>
              <svg className='w-6 h-6 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path clipRule='evenodd' fillRule='evenodd' d='M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z' />
              </svg>
              Features
            </div>
            <h3 className='mb-4 text-2xl font-medium text-gray-900'>Go next level with Flowbite</h3>
            <p className='text-gray-500 dark:text-gray-400'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            {/* <!-- List --> */}
            <ul className='pl-2 my-5 mb-4 space-y-3 text-gray-500 list-disc'>
              <li className='flex space-x-3'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-purple-600' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' /></svg>
                <span className='leading-tight'>Dynamic reports and dashboards</span>
              </li>
              <li className='flex space-x-3'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-purple-600' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' /></svg>
                <span className='leading-tight'>Templates for everyone</span>
              </li>
              <li className='flex space-x-3'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-purple-600' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' /></svg>
                <span className='leading-tight'>Development workflow</span>
              </li>
              <li className='flex space-x-3'>
                {/* <!-- Icon --> */}
                <svg className='flex-shrink-0 w-5 h-5 text-purple-600' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' /></svg>
                <span className='leading-tight'>Limitless business automation</span>
              </li>
            </ul>
            <button type='button' className='inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '>
              View more
              <svg className='w-5 h-5 ml-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path clipRule='evenodd' fillRule='evenodd' d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button type='button' className='flex items-center justify-center h-full mr-4 cursor-pointer group focus:outline-none' data-carousel-prev>
            <span className='text-gray-500 dark:text-gray-400 hover:text-gray-700'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clipRule='evenodd' /></svg>
              <span className=''>Previous</span>
            </span>
          </button>
          <button type='button' className='flex items-center justify-center h-full cursor-pointer group focus:outline-none' data-carousel-next>
            <span className='text-gray-500 hover:text-gray-700 '>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
              <span className=''>Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Statistics;
