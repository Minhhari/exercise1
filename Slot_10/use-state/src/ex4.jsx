import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function ProductRadio() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container className="mt-4">
      <Form>
        {products.map(product => (
          <Form.Check
            key={product.id}
            type="radio"
            name="product"
            label={product.name}
            value={product.id}
            checked={selectedId === product.id}
            onChange={() => setSelectedId(product.id)}
          />
        ))}
      </Form>
      {selectedId && (
        <p className="mt-3">
          Bạn đã chọn: {products.find(p => p.id === selectedId).name}
        </p>
      )}
    </Container>
  );
}

export default ProductRadio;
