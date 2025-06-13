import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const SearchFilter = () => {
  const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'];
  const [search, setSearch] = useState('');

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search fruits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListGroup className="mt-3">
        {filtered.map((item, idx) => (
          <ListGroup.Item key={idx}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SearchFilter;
