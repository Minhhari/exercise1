import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Alert, Navbar, Nav, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LaptopManagement = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const mockLaptops = [
    {
      id: 1,
      brand: "Dell",
      model: "XPS 13",
      year: 2023,
      price: "$999",
      image: "/images/dell-xps13.jpg",
      description: "Dell XPS 13 is a premium ultrabook with excellent build quality and performance."
    },
    {
      id: 2,
      brand: "Apple",
      model: "MacBook Pro",
      year: 2022,
      price: "$2500",
      image: "/images/macbook-pro.jpg",
      description: "MacBook Pro with M2 chip offers incredible performance for professional users."
    },
    {
      id: 3,
      brand: "HP",
      model: "Spectre x360",
      year: 2021,
      price: "$1800",
      image: "/images/hp-spectre.jpg",
      description: "HP Spectre x360 is a versatile 2-in-1 laptop with touchscreen capability."
    },
    {
      id: 4,
      brand: "Lenovo",
      model: "ThinkPad X1",
      year: 2020,
      price: "$1600",
      image: "/images/lenovo-thinkpad.jpg",
      description: "Lenovo ThinkPad X1 is a business laptop known for its durability and keyboard."
    }
  ];

  useEffect(() => {
    // Simulate fetching data from JSON Server
    const fetchLaptops = async () => {
      try {
        // In real implementation, this would be:
        // const response = await axios.get('http://localhost:3001/Laptops');
        // setLaptops(response.data);
        // setFilteredLaptops(response.data);
        
        // For now, using mock data
        setLaptops(mockLaptops);
        setFilteredLaptops(mockLaptops);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };

    fetchLaptops();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/laptops/${id}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container className="mt-4" style={{ flex: 1 }}>
        {/* Navbar Header */}
        <Navbar bg="light" expand="lg" className="mb-4 rounded">
          <Container>
            <Button 
              variant="outline-primary" 
              onClick={() => navigate('/home')}
              className="ms-3"
            >
              Home
            </Button>
            <Button
             variant="outline-primary" 
              onClick={() => navigate('/link')}
              className="ms-3">
                Link
            </Button>
            <Nav className="ms-auto">
            </Nav>
          </Container>
        </Navbar>

        <h2 className="mb-4 text-center">Laptop List</h2>

        {/* Carousel Section */}
        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              src="/images/dell-xps13.jpg"
              alt="Dell XPS 13"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Dell XPS 13</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/hp-spectre.jpg"
              alt="HP Spectre x360"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>HP Spectre x360</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/lenovo-thinkpad.jpg"
              alt="Lenovo ThinkPad X1"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Lenovo ThinkPad X1</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Search Section */}
        <Row className="mb-4">
          <Col md={12}>
            <Form.Control
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Col>
        </Row>

        {/* Laptop Grid */}
        <Row>
          {filteredLaptops.map(laptop => (
            <Col md={3} key={laptop.id} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={laptop.image} 
                  alt={`${laptop.brand} ${laptop.model}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                  <Card.Text>
                    <strong>Year:</strong> {laptop.year}<br />
                    <strong>Price:</strong> {laptop.price}
                  </Card.Text>
                  <div>
                    <Button 
                      variant="primary" 
                      onClick={() => handleViewDetails(laptop.id)}
                      className="mt-3"
                      style={{
                        borderRadius: '8px',
                        minWidth: '100px',
                        fontWeight: 500,
                        backgroundColor: '#2076fa',
                        border: 'none',
                        textAlign: 'left'
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results Message */}
        {filteredLaptops.length === 0 && (
          <Alert variant="info" className="text-center">
            No laptops found matching your search criteria.
          </Alert>
        )}
      </Container>
      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-4 border-top">
        © 2025 Laptop Management. All rights reserved.
      </footer>
    </div>
  );
};

// PropTypes validation
LaptopManagement.propTypes = {
  // No required props for this component
};

export default LaptopManagement;