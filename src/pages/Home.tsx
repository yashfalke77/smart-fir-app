import React from 'react';
import Features from '../Components/Features/Features';
import Navbar from '../Components/Navbar/Navbar';
import logo from '../assets/images/logo.png';
import home from '../assets/images/home.jpeg';
import FAQ from '../Components/FAQ/FAQ';
import Footer from '../Components/Footer/Footer';

const Home = () => (
  <div>
    <Navbar />
    <main className='flex pt-12'>
      <div className='flex flex-col justify-center items-center flex-0 flex-grow-0 flex-shrink-0 w-1/2'>
        <img className='w-auto' src={logo} alt='logo' />
        <h1 className='mt-8 mb-4 text-5xl font-semibold'>Cyber Police</h1>
        <p className='w-1/2 text-center'>
          Welcome to Police Station! Taking stock of your security round the clock! Dial 100 in case of any emergency.
          Help us to help you.
        </p>
      </div>
      <div className='flex-1'>
        <img src={home} className='w-auto' alt='hero' />
      </div>
    </main>
    <Features />
    <FAQ />
    <Footer />
  </div>
);

export default Home;
