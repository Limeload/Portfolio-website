import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../linkedin.png';
import instagram from '../instagram.png';
import github from '../github.png';

function Footer(){
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md="6">
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
