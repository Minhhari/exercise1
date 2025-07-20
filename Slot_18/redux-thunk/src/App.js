// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="/">Shopping Cart</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Products</NavLink>
          <NavLink className="nav-link" to="/add-product">Add Product</NavLink>
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;