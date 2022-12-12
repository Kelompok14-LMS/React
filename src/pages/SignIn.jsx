import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "../assets/img/banner-login.svg";
import { useSignInMutation } from "../store/features/signInSlice";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const [signIn] = useSignInMutation();

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signIn({
      email: email,
      password: password,
    })
      .unwrap()
      .then((_) => {
        Swal.fire({
          icon: "success",
          title: "Sign in berhasil!",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      })
      .catch((err) => {
        alert(`${err?.data?.message}`);
      });
  };

  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col lg={6} className="d-flex justify-content-center bg-white" style={{ height: "100vh" }}>
          <img src={Banner} alt="banner login" className="img-fluid" style={{ width: "300px" }} />
        </Col>
        <Col lg={6} style={{ backgroundColor: "#112D4E", padding: "50px" }}>
          <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" value={email} onChange={onEmailChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={onPasswordChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" className="text-white" label="Ingat Saya?" />
            </Form.Group>

            <Button variant="warning w-100" type="submit">
              Masuk
            </Button>
          </Form>

          <p className="text-white mt-3">
            Belum punya akun?{" "}
            <Link to="/register" className="text-warning">
              Daftar
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
