import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          React App
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              active={location.pathname === '/about'}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/posts" 
              active={location.pathname === '/posts'}
            >
              Posts
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Button 
              as={Link} 
              to="/login" 
              variant="outline-light" 
              size="sm"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;