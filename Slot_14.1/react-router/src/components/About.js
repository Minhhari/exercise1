import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h2" className="text-center">
              About Us
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Welcome to our React application! This is a sample about page 
                built with React Bootstrap components for better styling and responsiveness.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;