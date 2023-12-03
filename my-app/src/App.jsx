import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from "react-router-dom";
import TopNav from './components/TopNav';
import Destinations from './components/Destinations';
import Tips from './components/Tips';
import Blogs from './components/Blogs';
import About from './components/About';
import Home from './components/Home';
import Sign from './components/Sign';
import LayOut from './components/LayOut';
import Footer from './components/chek';

function App() {


  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="tips" element={<Tips />} />
        <Route path="sign" element={<Sign />} />
      </Routes>
    </LayOut>
    // <><Footer></Footer></>    
  )
}

export default App



