import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ControlledInput = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
};

export default ControlledInput;