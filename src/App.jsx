import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './components/CartProvider';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <CartProvider>
      <Router basename="/ecomm-app/">
        <div className="container mt-4">
          <h1 className="text-center mb-4">E-Commerce Store</h1>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/Checkout' element={<Checkout/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
