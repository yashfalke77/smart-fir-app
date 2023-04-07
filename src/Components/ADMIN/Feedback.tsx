import React from 'react';

const Feedback = () => (
  <div className='mx-16 my-14'>
    <div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Feedback from users</h3>
      </div>
      {/* <!-- Chat --> */}
      <form className='overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit'>
        <article className='mb-5'>
          <footer className='flex items-center justify-between mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white'>
                <img className='w-6 h-6 mr-2 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-2.jpg' alt='Michael Gough' />
                Michael Gough
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'><time title='February 8th, 2022'> 01/03/2023 4:15 PM</time></p>
            </div>
          </footer>
          <p className='mb-2 text-gray-900 dark:text-white'>
            Hello
            {' '}
            <a href='/' className='font-medium hover:underline text-primary-600 dark:text-primary-500'>@designteam</a>
            {' '}
            Let&apos;s schedule a kick-off meeting and workshop this week. It would be great to gather everyone involved in the design project. Let me know about your availability in the thread.
          </p>
          <p className='mb-3 text-gray-900 dark:text-white'>Looking forward to it! Thanks.</p>
        </article>
        <article className='mb-5'>
          <footer className='flex items-center justify-between mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white'>
                <img className='w-6 h-6 mr-2 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-3.jpg' alt='Bonnie avatar' />
                Bonnie Green
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'><time title='February 8th, 2022'> 01/03/2023 4:15 PM</time></p>
            </div>
          </footer>
          <p className='mb-3 text-gray-900 dark:text-white'>Hello everyone,</p>
          <p className='mb-2 text-gray-900 dark:text-white'>
            Thank you for the workshop, it was very productive meeting. I can&apos;t wait to start working on this new project with you guys. But first things first, I&apos;am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
          </p>
          <p className='mb-3 text-gray-900 dark:text-white'>Cheers!</p>
        </article>
        <article className='mb-5'>
          <footer className='flex items-center justify-between mb-2'>
            <div className='flex items-center'>
              <p className='inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white'>
                <img className='w-6 h-6 mr-2 rounded-full' src='https://flowbite.com/docs/images/people/profile-picture-5.jpg' alt='Jese avatar' />
                Jese Leos
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-400'><time title='February 8th, 2022'> 01/03/2023 4:15 PM</time></p>
            </div>
          </footer>
          <p className='mb-2 text-gray-900 dark:text-white'>
            Ok
            {' '}
            <a href='/' className='font-medium hover:underline text-primary-600 dark:text-primary-500'>@team</a>
            {' '}
            I&apos;am attaching our offer and pitch deck. Take your time to review everything. I&apos;am looking forward to the next steps! Thank you.
          </p>
          <p className='mb-3 text-gray-900 dark:text-white'>Looking forward to it! Thanks.</p>
        </article>
      </form>
    </div>
  </div>
);

export default Feedback;
