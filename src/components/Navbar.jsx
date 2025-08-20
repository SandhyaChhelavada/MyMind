// src/App.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaSearch, FaHeart } from "react-icons/fa";
import logo from "../assets/images/mymind.png";

function App() {
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="main-navbar" fixed="top">
          <Container>
            <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "40px", width: "auto" }}
              />
              <span className="brand-gradient">MyMind</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle-custom" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link className="nav-link-custom " href="/">Home</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#about">About</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#promptbank">Prompt Bank</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#portfolio">Portfolio</Nav.Link>
                {/* <Nav.Link className="nav-link-custom" href="#blog">Blog</Nav.Link> */}
                <Nav.Link className="nav-link-custom" href="#contact">Contact</Nav.Link>
                {/* <Nav.Link className="icon-link"><FaSearch /></Nav.Link> */}
                <Nav.Link className="icon-link"><FaHeart /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>


    </>
  );
}

export default App;