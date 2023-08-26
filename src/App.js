import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Coins from './component/Coins';
import Exchainges from './component/Exchainges';
import CoinDetails from './component/CoinDetails';

function App() {
  return (
    <Router>
      <Header />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Coins' element={<Coins />} />
        <Route path='/Exchainges' element={<Exchainges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
       
      </Routes>
    </Router>
  );
}

export default App;
