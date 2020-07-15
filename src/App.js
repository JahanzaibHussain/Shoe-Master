import React from 'react';
import './assets/output.css';
import Navbar from './layouts/navbar'
import Footer from './layouts/footer'
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Shop from './pages/shop'
import Product from './pages/product'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
