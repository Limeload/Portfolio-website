import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../profilePic.jpeg';

function About() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src={profilePic} alt={profilePic} roundedCircle fluid />
        </Col>
        <Col md={8} className="about">
          <p>
            Hi there! My name is Shraddha Rao and I'm a Software Engineer based in Chicago. I specialize in [Your Area of Expertise] and have [Number of Years of Experience] of experience in the field.
          </p>
          <p>
            I graduated from [Your University] with a degree in [Your Field of Study] and have since worked with a variety of clients and companies in both the [Your Industry] and [Related Industry].
          </p>
          <p>
            In my free time, I enjoy [Your Hobbies or Interests] and [Another Hobby or Interest].
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
