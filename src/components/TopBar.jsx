import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/img/logo.svg";
import elipseImage from "../assets/img/Ellipse-3.png";

export default function TopBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container className="d-flex justify-content-between py-0 px-0">
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "110px", height: "88px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              style={{ fontSize: 18 }}
              className="fw-bold text-black me-5"
            >
              Courses
            </Nav.Link>
            <Nav.Link
              href="/mentees"
              style={{ fontSize: 18 }}
              className="fw-bold text-black me-5"
            >
              Mentees
            </Nav.Link>
            <Nav.Link
              href="/assignments"
              style={{ fontSize: 18 }}
              className="fw-bold text-black me-5"
            >
              Assignments
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center"> 
            <img
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
            
              }}
              src={elipseImage}
            ></img>
            <Nav.Link
              href="#action2"
              style={{ fontSize: 18 }}
              className="fw-bold text-black mx-3"
            >
              Admin
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
