import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h1>Contact Me</h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter the subject" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
