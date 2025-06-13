import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function ProfileForm() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <Container className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name}</p>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age:</Form.Label>
        <Form.Control
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
        />
        <p>My age is {age}</p>
      </Form.Group>
    </Container>
  );
}

export default ProfileForm;