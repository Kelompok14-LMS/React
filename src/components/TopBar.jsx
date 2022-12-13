import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { useGetProfileQuery } from "../store/features/profileSlice";
import Auth from "../utils/Auth";

export default function TopBar() {
  const navigate = useNavigate();
  const { data: profile } = useGetProfileQuery();

  console.log(profile);

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
          <NavDropdown title={profile?.fullname} align="end" className="fw-semibold">
            <NavDropdown.Item className="text-center p-2">
              <BsPersonFill className="me-2" size="25px" />
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <div className="text-center mt-2 p-2">
              <Button variant="danger" onClick={() => Auth.signOut(navigate)}>
                Sign Out
              </Button>
            </div>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
