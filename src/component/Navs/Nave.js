import React from 'react';
import './Nave.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logooo from '../../logooo.png';

const Navs = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logooo} alt="logo" title="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="allbuttons" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#home">Explore Foods</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Item id="lastnav" className="nav-link">
              01056843866
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
