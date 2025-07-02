import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <Card.Title as="h2" className="text-primary mb-4">
                About Us
              </Card.Title>
              <Row className="mt-3">
                <Col sm={6} className="mb-2">
                  <Button
                    variant="primary"
                    className="p-2 w-100"
                    onClick={() => navigate('/quiz')}
                  >
                    Quizzes
                  </Button>
                </Col>
                <Col sm={6} className="mb-2">
                  <Button
                    variant="info"
                    className="p-2 w-100"
                    onClick={() => navigate('/news')}
                  >
                    News Category
                  </Button>
                </Col>
                <Col sm={6} className="mb-2">
                  <Button
                    variant="success"
                    className="p-2 w-100"
                    onClick={() => navigate('/contact')}
                  >
                    Contact
                  </Button>
                </Col>
                <Col sm={6} className="mb-2">
                  <Button
                    variant="warning"
                    className="p-2 w-100"
                    disabled
                  >
                    Responsive Design
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;