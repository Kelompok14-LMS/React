import "../assets/css/login.css";

import { Row, Col, Container } from "react-bootstrap";
import logoLogin from "../assets/img/logo-login.png";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { useState } from "react";
import { useLoginMentorMutation } from "../store/features/user/userSlice";
import Alert from "../components/Alert";

const SignInPage = () => {
  const navigate = useNavigate();

  const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [loginMentor, { isLoading }] = useLoginMentorMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(form.email)) {
      setErr("Email yang dimasukkan tidak sesuai format");
    } else {
      await loginMentor(form)
        .unwrap()
        .then(() => {
          Alert.signInSuccess();
          navigate("/courses");
        })
        .catch((err) => {
          Alert.signInError(err);
        });
      setErr("");
    }
  };

  return (
    <div id="login">
      {isLoading ? <Loading /> : ""}
      <section className="section-hide p-0 overflow-hidden">
        <Row className="align-items-center h-100vh bg-white">
          <Col>
            <Container className="d-flex justify-content-center">
              <img src={logoLogin} style={{ width: "300px" }} alt="logo" />
            </Container>
          </Col>
          <Col className="h-100 d-flex align-items-center justify-content-start bg-dark-blue px-3">
            <Container>
              <h1 className="main-title text-start">Selamat datang!</h1>
              <form action="" className="form-control text-start bg-dark-blue form-login" onSubmit={handleSubmit}>
                <span className="text-danger">{err}</span>
                <br></br>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control main-input mt-0"
                  placeholder="Masukkan email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control main-input mt-0"
                  placeholder="Masukkan password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn-submit w-100 mt-5">
                  Masuk
                </button>
              </form>
              <p className="main-info text-center mt-4">
                Belum punya akun?{" "}
                <Link to={"/register"} className="text-decoration-none text-gold">
                  Daftar
                </Link>
              </p>
            </Container>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SignInPage;
