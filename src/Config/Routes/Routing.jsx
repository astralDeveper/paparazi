import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from '../../component/Home/Navbar'
import Footer from '../../component/Home/Footer'
import Home from '../../pages/Home'
import Career from '../../pages/Career'
import Services from '../../pages/Services'
import About from '../../pages/About'
import Top from '../../pages/Top'


const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />     
        <Route path="/career" element={<Career/>} />  
        <Route path="/career2" element={<Top/>} />    
        <Route path="/services" element={<Services/>} />  
      </Routes>
      <Footer/>
   </BrowserRouter>
    </>
  )
}

export default Routing
