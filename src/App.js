import React from 'react';
//import react router dom
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Product from './pages/ProductDetails';
import PersistentDrawerLeft from './components/Sidebar';
// import Header from './components/Header';
import Footer from './components/Footer';
const App = () => 
{
  return <div className='overflow-hidden'>
    <Router>
      <PersistentDrawerLeft/>
      <Routes>
        {/* <Header/> */}
        <Route path = '/' element={<Home/>}/>
        <Route path = '/product/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
    </Router>
  </div>;
};

export default App;
