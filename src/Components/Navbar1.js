import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar1() {
  return (
    
    <Navbar bg="success" expand="lg" >
    <Container >
      <Navbar.Brand className='text-white' >Novruz.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Ana Səhifə</Nav.Link>
          <Nav.Link href="/haqqımızda">Haqqımızda</Nav.Link>
          <Nav.Link href="/xidmətlər">Xidmətlər</Nav.Link>
          <Nav.Link href="/portfel">Portfel</Nav.Link>
          <Nav.Link href="/komanda">Komanda</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <NavDropdown  title="Açılanlar" id="basic-nav-dropdown">
            <NavDropdown.Item href="/hərəkət/3.1">Hərəkət</NavDropdown.Item>
            <NavDropdown.Item href="/hərəkət/3.2">Başqa bir hərəkət</NavDropdown.Item>
            <NavDropdown.Item href="/hərəkət/3.3">Bir şey</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/əlaqə">Əlaqə</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Navbar1
