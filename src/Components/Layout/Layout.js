import React from "react";
import styles from "./layout.module.css";
import Container from "react-bootstrap/Container";
import Footer from "react-bootstrap/ModalFooter";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Navbar justify className="mb-4 p-4" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">DND 5E Character Generator</Navbar.Brand>
        </Nav>
        <Button id="btnGenerator" className="mr-sm-2" variant="outline-success">
          Generate
        </Button>
      </Navbar>
      <Container className={styles.container}>{children}</Container>
    </div>
  );
};

export default Layout;
