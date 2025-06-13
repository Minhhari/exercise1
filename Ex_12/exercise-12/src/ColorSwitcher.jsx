import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ColorSwitcher = () => {
  const [color, setColor] = useState('white');

  return (
    <div>
      <Form.Select
        onChange={(e) => setColor(e.target.value)}
        className="mb-3"
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </Form.Select>
      <div
        style={{
          height: '100px',
          backgroundColor: color,
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default ColorSwitcher;
