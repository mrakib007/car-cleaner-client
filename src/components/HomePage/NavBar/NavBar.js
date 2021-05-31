import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="" className="container-fluid" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home" className = "ml-5">Fix My Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to="/" className = "pr-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
            <Nav.Link as={Link} to="/dashBoard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
