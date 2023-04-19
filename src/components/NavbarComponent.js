import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="whitesmoke" expand="lg">
      <Navbar.Brand href="/" className='logo'>
       <h4> SHRADDHA RAO </h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          {/* <Nav.Link href="/about">About</Nav.Link> */}
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/more">More</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
