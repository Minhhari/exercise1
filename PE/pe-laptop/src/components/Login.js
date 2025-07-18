import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const navigate = useNavigate();

  const userAccounts = [
    {
      id: 1,
      username: "admin",
      password: "123",
      account_type: "admin",
      status: "active"
    },
    {
      id: 2,
      username: "jane",
      password: "123",
      account_type: "user",
      status: "inactive"
    },
    {
      id: 3,
      username: "alice",
      password: "123",
      account_type: "user",
      status: "active"
    },
    {
      id: 4,
      username: "bob",
      password: "1234567",
      account_type: "guest",
      status: "active"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      navigate('/*'); // Chuyển sang route 404 - Not Found
      return;
    }
    
    const user = userAccounts.find(
      account => account.username === username && 
                 account.password === password &&
                 account.status === 'active'
    );

    if (user) {
      setCurrentUser(user.username);
      setShowModal(true);
      setUser(user);
    } else {
      navigate('/*');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/laptops');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>           
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome, {currentUser} login Successful!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

// PropTypes validation
Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;