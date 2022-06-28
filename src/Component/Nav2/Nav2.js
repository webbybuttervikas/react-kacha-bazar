import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Nav2/Nav2.css'

const Nav2 = () => {
  return (
    <div>
    <Navbar bg="light" variant="light" className='navbar-text'>
    <Container>
    <NavDropdown title="Categories" id="collasible-nav-dropdown" className=''>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:'black'}}>About us</Nav.Link>
            <Nav.Link href="#features">Contact us</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>

        <NavDropdown title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
      </Nav>
      <Nav.Link href="#home" style={{color:'black'}}>Privacy Policy</Nav.Link>
      <Nav.Link href="#features" style={{color:'black'}} >Terms & Conditions</Nav.Link>
    </Container>
    </Navbar>
    </div>
  )
}

export default Nav2