import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Card, Alert, InputGroup } from 'react-bootstrap';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    
    if (form.checkValidity()) {
      setShowSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setShowSuccess(false);
        setValidated(false);
        form.reset();
      }, 3000);
    }

    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h2 className="mb-0">Contact Us</h2>
              <small>We'd love to hear from you!</small>
            </Card.Header>
            <Card.Body>
              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  <Alert.Heading>Success!</Alert.Heading>
                  Your message has been sent successfully. We'll get back to you soon!
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Enter your first name" 
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid first name.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                      required 
                      type="text" 
                      placeholder="Enter your last name" 
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid last name.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>@</InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter your city" 
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationState">
                    <Form.Label>State/Province</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="State" 
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationZip">
                    <Form.Label>Zip/Postal Code</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="12345" 
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip code.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="validationMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="I agree to the terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;