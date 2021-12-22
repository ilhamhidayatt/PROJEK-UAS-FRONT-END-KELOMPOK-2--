import React from "react";
import {Nav, Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar >
      <Container>
      <Navbar.Brand href="Home"><strong>Happy</strong> Pet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="Home">Shop</Nav.Link>
          <Nav.Link href="Home2">Home</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
