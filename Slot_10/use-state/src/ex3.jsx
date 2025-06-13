import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function ProductSelector() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const id = parseInt(e.target.value, 10);
    if (e.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter(pid => pid !== id));
    }
  };

  return (
    <Container className="mt-4">
      <Form>
        {products.map(product => (
          <Form.Check
            key={product.id}
            type="checkbox"
            label={product.name}
            value={product.id}
            checked={selected.includes(product.id)}
            onChange={handleChange}
          />
        ))}
      </Form>
      {selected.length > 0 && (
        <p className="mt-3">
          Bạn đã chọn: {selected.map(id => products.find(p => p.id === id).name).join(', ')}
        </p>
      )}
    </Container>
  );
}

export default ProductSelector;
