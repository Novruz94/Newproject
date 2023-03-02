import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar1() {
  return (
    
    <Navbar style={{backgroundColor:'#205E61'}} expand="lg" >
    <Container >
      <Navbar.Brand style={{color:'#F9F54B'}}  href="/" >Novruz.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={{color:'#F9F54B'}} href="/">Ana Səhifə</Nav.Link>
          <Nav.Link style={{color:'#F9F54B'}} href="/about">Haqqımızda</Nav.Link>
          <Nav.Link style={{color:'#F9F54B'}} href="/services">Xidmətlər</Nav.Link>
          <Nav.Link style={{color:'#F9F54B'}} href="/portfolio">Portfel</Nav.Link>
          <Nav.Link style={{color:'#F9F54B'}} href="/team">Komanda</Nav.Link>
          <Nav.Link style={{color:'#F9F54B'}} href="/blog">Blog</Nav.Link>
          <Nav.Link style={{color:'#F9F54B'}} href="/contact">Əlaqə</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Navbar1
