// components/ProductForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    catalogs: ''
  });

  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: uuidv4(),
      price: parseFloat(product.price),
      catalogs: product.catalogs.split(',').map(c => c.trim()),
    };

    dispatch(addProduct(newProduct)).then(() => {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate('/');
      }, 1500);
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      {success && (
        <div className="alert alert-success" role="alert">
          Product added successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input 
            className="form-control" 
            placeholder="Name" 
            value={product.name} 
            onChange={e => setProduct({ ...product, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <input 
            type="number" 
            className="form-control" 
            placeholder="Price" 
            value={product.price} 
            onChange={e => setProduct({ ...product, price: e.target.value })}
            required
            step="0.01"
            min="0"
          />
        </div>
        <div className="mb-2">
          <textarea 
            className="form-control" 
            placeholder="Description"
            value={product.description} 
            onChange={e => setProduct({ ...product, description: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input 
            className="form-control" 
            placeholder="Catalogs (comma separated)" 
            value={product.catalogs} 
            onChange={e => setProduct({ ...product, catalogs: e.target.value })}
            required
          />
        </div>
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;