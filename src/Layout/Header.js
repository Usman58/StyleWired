import React from 'react'
import { Navbar, Nav, Container,Image} from 'react-bootstrap'
//import { Link} from 'react-router-dom'

import logo from '../images/Frame.png'


 


    



function Header() {
    return (
        <header>
            <Navbar bg="white" expand="lg">
  <Container className="p-4">
    <Navbar.Brand href=""><Image src={logo} fluid alt="No image"  style={{width: 220,height: 40,}} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ni">
        <Nav.Link href="/" className='px-4'>Home</Nav.Link>
        
        <Nav.Link href="#location" className='px-4'>Location</Nav.Link>
        <Nav.Link href="#works" className='px-4'>How it Works</Nav.Link>
        <Nav.Link href="#aboutus" className='px-4'>About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header