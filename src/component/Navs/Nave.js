
import React from 'react'
import './Nave.css'
import { Navbar,Nav, Container } from 'react-bootstrap';
import logooo from '../../logooo.png'





const Navs=()=>{
    return(
        <Navbar expand="lg  fixed-top" >
          <Container>
             <Navbar.Brand href="#home"><img src={logooo} title='logooo' alt="logoo"/></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" id='allbuttons' />
             <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">About Us</Nav.Link>
                      <Nav.Link href="#home">Explore Foods</Nav.Link>
                      <Nav.Link href="#link">Review</Nav.Link>
                      <Nav.Link href="#home">FAQ</Nav.Link>
                      <Nav.Link id='lastnav' >01056843866</Nav.Link>
                   </Nav>
               </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}


export default Navs;
