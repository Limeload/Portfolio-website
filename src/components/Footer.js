import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png'

function Footer(){
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md="6">
          <img className='logo' src={logo} alt={logo}/>
          </Col>
          <Col md="6">
            <div className="social-icons">
           {/* <a href="#"><i className="fab fa-facebook"></i>LinkedIn</a>
           <a href="#"><i className="fab fa-twitter"></i>GitHub</a>
           <a href="#"><i className="fab fa-instagram"></i>Instagram</a> */}
           </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 by Shraddha. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
