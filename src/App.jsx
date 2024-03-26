/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home';




const App = () => {
  

  return (
      <div className="app">
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      
  );
};

export default App;