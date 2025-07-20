import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

function ProductList() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [successMessage, setSuccessMessage] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSuccessMessage(`Added "${product.name}" to cart!`);

    setTimeout(() => {
      setSuccessMessage('');
    }, 1500);
  };

  return (
    <div className="container mt-4">
      <h2>Product List</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <div className="row">
        {products.map(prod => (
          <div key={prod.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5>{prod.name}</h5>
                <p>{prod.description}</p>
                <p><strong>${prod.price.toFixed(2)}</strong></p>
                <p><small>Catalogs: {prod.catalogs.join(', ')}</small></p>
                <button 
                  className="btn btn-primary mt-auto"
                  onClick={() => handleAddToCart(prod)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;