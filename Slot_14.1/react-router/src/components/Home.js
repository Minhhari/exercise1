import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="text-center">
            <Card.Header as="h1" className="bg-primary text-white">
              Welcome to Our Application
            </Card.Header>
            <Card.Body>
              <Card.Title>Home Page</Card.Title>
              <Card.Text>
                This is the main landing page of our React application. 
                Navigate through the menu to explore different features.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;