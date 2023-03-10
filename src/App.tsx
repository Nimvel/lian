import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

import Footer from './conponents/Footer/Footer';
import Header from './conponents/Header/Header'
import Home from './conponents/Home/Home';
import About from './conponents/About/About';
import Blog from './conponents/Blog/Blog';
import Contact from './conponents/Contact/Contact';
import Portfolio from './conponents/Portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
      <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
      <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
      <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
