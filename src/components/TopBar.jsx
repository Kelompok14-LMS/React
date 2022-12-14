import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { useGetProfileQuery } from "../store/features/profileSlice";
import Auth from "../utils/Auth";

export default function TopBar() {
  const navigate = useNavigate();
  const { data: profile } = useGetProfileQuery();

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link} to="/courses" className="fw-semibold text-black me-5">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/mentees" className="fw-semibold text-black me-5">
              Meentees
            </Nav.Link>
            <Nav.Link href="#action2" className="fw-semibold text-black">
              Assignments
            </Nav.Link>
          </Nav>

          <NavDropdown
            title={
              <img
                src={profile?.profile_picture}
                className="rounded-circle"
                style={{ width: "30px", height: "30px", objectFit: "cover" }}
                alt=""
              />
            }
            align="end"
            className="fw-semibold"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item disabled className="text-black mb-2">
              <img
                src={profile?.profile_picture}
                className="rounded-circle"
                style={{ width: "20px", height: "20px", objectFit: "cover", marginRight: "20px" }}
                alt=""
              />
              {profile?.fullname}
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/profile">
              <BsPersonCircle className="me-4" />
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => Auth.signOut(navigate)}>
              <BsBoxArrowRight className="me-4" />
              Sign Out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
