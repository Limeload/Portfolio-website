import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';

function Footer(){
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md="12">
            <div className="social-icons">
           <a href="https://www.linkedin.com/in/shraddharaom"><img src={linkedin} alt={linkedin} /></a>
           <a href="https://www.instagram.com/freedinfinery"><img src={instagram} alt={instagram} /></a>
           <a href="https://github.com/Limeload"><img src={github} alt={github} /></a>
           </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 by Shraddha Rao. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
