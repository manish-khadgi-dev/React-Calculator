import React from "react";
import Logo from "../assets/manish-img-logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const TopNav = () => {
  return (
    <Navbar expand="md" className="topNav" id="navbar" collapseOnSelect>
      <Container fluid>
        <motion.img
          src={Logo}
          alt=""
          width="80px"
          whileHover={{ scale: 1.5 }}
        />

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle-bar"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 fs-5">
            <Link id="rectangle" className="nav-link text-info " to="/">
              <motion.div whileHover={{ scale: 1.5, originX: 0 }}>
                Home
              </motion.div>
            </Link>
            <Link id="rectangle" className="nav-link text-info " to="/skills">
              <motion.div whileHover={{ scale: 1.5, originX: 0 }}>
                Skills
              </motion.div>
            </Link>
            <Link id="rectangle" className="nav-link text-info" to="/projects">
              <motion.div whileHover={{ scale: 1.5, originX: 0 }}>
                Projects
              </motion.div>
            </Link>
            <Link id="rectangle" className="nav-link text-info" to="/about-me">
              <motion.div whileHover={{ scale: 1.5, originX: 0 }}>
                About
              </motion.div>
            </Link>
            <Link id="rectangle" className="nav-link text-info" to="/contactme">
              <motion.div whileHover={{ scale: 1.5, originX: 0 }}>
                Contact
              </motion.div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
