import React from "react";
import Logo from "../assets/manish-img-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Items = () => {
  return (
    <Navbar expand="md" className="topNav" id="navbar" collapseOnSelect>
      <Container>
        <Link to="/">
          <img src={Logo} alt="" width="80px" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-5">
            <Link className="nav-link text-info " to="/skills">
              Skills
            </Link>
            <Link className="nav-link text-info" to="/projects">
              Projects
            </Link>
            <Link className="nav-link text-info" to="/about-me">
              About Me
            </Link>
            <Link className="nav-link text-info" to="/contactme">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
