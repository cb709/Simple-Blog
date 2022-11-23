import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Simple Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to={'/'}>Home</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
