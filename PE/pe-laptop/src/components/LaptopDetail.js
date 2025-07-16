import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Mock laptops data
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
    const fetchLaptopDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // In real implementation, this would be:
        // const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
        // setLaptop(response.data);
        
        // For now, using mock data
        const foundLaptop = mockLaptops.find(l => l.id === parseInt(id));
        
        // Simulate API delay
        setTimeout(() => {
          if (foundLaptop) {
            setLaptop(foundLaptop);
          } else {
            setError(true);
          }
          setLoading(false);
        }, 500);
        
      } catch (err) {
        console.error('Error fetching laptop details:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchLaptopDetails();
  }, [id]);

  const handleBackToList = () => {
    navigate('/laptops');
  };

  if (loading) {
    return (
      <Container className="mt-4">
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Loading laptop details...</p>
        </div>
      </Container>
    );
  }

  if (error || !laptop) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <Alert.Heading>404 - Laptop Not Found</Alert.Heading>
          <p>The laptop with ID {id} does not exist.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleBackToList}>
              Back to Laptop List
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Row className="g-0">
          <Col md={6}>
            <Card.Img 
              src={laptop.image} 
              alt={`${laptop.brand} ${laptop.model}`}
              style={{ 
                height: '400px', 
                objectFit: 'cover',
                borderRadius: '0.375rem 0 0 0.375rem'
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
              }}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="h-100 d-flex flex-column">
              <Card.Title className="display-6 mb-3">
                {laptop.brand} {laptop.model}
              </Card.Title>
              
              <div className="laptop-details">
                <div className="detail-item mb-2">
                  <strong>Brand:</strong> {laptop.brand}
                </div>
                <div className="detail-item mb-2">
                  <strong>Model:</strong> {laptop.model}
                </div>
                <div className="detail-item mb-2">
                  <strong>Year:</strong> {laptop.year}
                </div>
                <div className="detail-item mb-3">
                  <strong>Price:</strong> {laptop.price}
                </div>
                
                <div className="detail-item">
                  <strong>Description:</strong>
                  <p className="mt-2">{laptop.description || 'No description available.'}</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  variant="primary" 
                  onClick={handleBackToList}
                  className="w-100"
                >
                  Back to Laptop List
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

// PropTypes validation
LaptopDetail.propTypes = {
  // No required props for this component as it uses useParams
};

export default LaptopDetail;