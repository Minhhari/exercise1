import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-4 text-center">
      <h4>You clicked {count} times</h4>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </Container>
  );
}

export default Counter;