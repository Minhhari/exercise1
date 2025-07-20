// components/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, idx) => (
            <li key={idx} className="list-group-item">
              <div><strong>ID:</strong> {item.id}</div>
              <div><strong>Name:</strong> {item.name}</div>
              <div><strong>Price:</strong> ${item.price.toFixed(2)}</div>
              <div><strong>Catalogs:</strong> {item.catalogs.join(', ')}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;