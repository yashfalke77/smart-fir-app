import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
