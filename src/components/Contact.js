import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Footer from './Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: 'shraddharaom@gmail.com',
      subject: subject,
      message_html: message
    };
    emailjs.send('service_yt48h8o', 'template_zou424f', templateParams, 'IrjOiVlkIT_HB96FB')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Container className="contact-form">
      <h1>Drop me a line - Let's get in touch!</h1>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
<br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
<br />
        <Form.Group controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter the subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </Form.Group>
<br />
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
<br />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </Container>
  );
}

export default Contact;
