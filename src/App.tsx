import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

import Footer from './conponents/Footer/Footer';
import Header from './conponents/Header/Header'
import Home from './conponents/Home/Home';
import About from './conponents/About/About';
import Blog from './conponents/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
