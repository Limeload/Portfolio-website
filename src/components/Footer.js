import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Footer(){
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md="12">
            <div className="social-icons">
           <a href="https://www.linkedin.com/in/shraddharaom" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt={linkedin} /></a>
           <a href="https://github.com/Limeload" target="_blank" rel="noopener noreferrer"><img src={github} alt={github} /></a>
           </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12" className="text-center">
            <p>
              <strong>Contact:</strong> <a href="mailto:raoshraddham@gmail.com">raoshraddham@gmail.com</a> | 
              <a href="tel:+18153336718"> +1(815) 333 6718</a>
            </p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2025 by Manikonda Shraddha Rao. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
