import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

export default function TopBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <div className="nav-logo">
            <img src={Logo} alt="" style={{ width: "100%", objectFit: "cover" }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#kelas" className="fs-4 fw-semibold text-black">
              Kelas
            </Nav.Link>
            <Nav.Link href="#mentor" className="fs-4 fw-semibold text-black mx-4">
              Mentor
            </Nav.Link>
            <Nav.Link href="#kontak" className="fs-4 fw-semibold text-black">
              Kontak
            </Nav.Link>
          </Nav>
          <div className="nav-button">
            <Link to={"/login"} className="btn-login">
              Masuk
            </Link>
            <Link to={"/register"} className="btn-register">
              Daftar
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
