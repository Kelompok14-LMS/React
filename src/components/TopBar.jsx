import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/img/logo.svg";

export default function TopBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" className="img-fluid" />
        </Navbar.Brand>
        <Form className="ms-3 w-25">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1" className="fw-bold text-black me-5">
              Courses
            </Nav.Link>
            <Nav.Link href="#action2" className="fw-bold text-black">
              Meentees
            </Nav.Link>
          </Nav>
          <Nav.Link href="#action2" className="fw-bold text-black">
            Admin
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
