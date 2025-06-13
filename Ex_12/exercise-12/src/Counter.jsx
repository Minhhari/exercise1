import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h2>Count: {count}</h2>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Increase
      </Button>
    </div>
  );
};

export default Counter;
