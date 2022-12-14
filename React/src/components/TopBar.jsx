import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

export default function TopBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#" className="fw-semibold text-black me-5">
              Courses
            </Nav.Link>
            <Nav.Link href="#" className="fw-semibold text-black me-5">
              Meentees
            </Nav.Link>
            <Nav.Link href="#" className="fw-semibold text-black">
              Assignments
            </Nav.Link>
          </Nav>

          <NavDropdown title={"mentor"} align="end" className="fw-semibold">
            <NavDropdown.Item disabled className="text-black mb-2">
              mentor
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/profile">
              <BsPersonCircle className="me-4" />
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <BsBoxArrowRight className="me-4" />
              Sign Out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
