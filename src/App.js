import React from 'react';
import './assets/output.css';
import Navbar from './layouts/navbar'
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Shop from './pages/shop'
import Contact from './pages/contact'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
