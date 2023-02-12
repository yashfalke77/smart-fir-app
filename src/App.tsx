import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Fir from './pages/Fir'
import Home from './pages/Home'
import Login from './pages/Login'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-fir" element={<Fir />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
