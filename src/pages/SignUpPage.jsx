import "../assets/css/register.css";

import { Row, Col, Container } from "react-bootstrap";
import logoLogin from "../assets/img/logo-login.png";
import Loading from "../components/Loading/Loading";
import { useState } from "react";
import { useRegisterMentorMutation } from "../store/features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const navigate = useNavigate();

  const passRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [registerMentor, { isLoading }] = useRegisterMentorMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name && !form.email && !form.pass) {
      setErr("Form Tidak Boleh Ada Yang Kosong");
    } else if (!emailRegex.test(form.email)) {
      setErr("Format email salah");
    } else if (!passRegex.test(form.password)) {
      setErr("Password harus menggunakan huruf besar dan minimal 8 karakter");
    } else {
      await registerMentor({
        fullname: form.name,
        email: form.email,
        password: form.password,
      })
        .unwrap()
        .then((_) => {
          Swal.fire({
            icon: "success",
            title: "Daftar Berhasil",
            text: "Silahkan Login",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        })
        .catch((err) => {
          Swal.fire({
            title: "Login Gagal",
            text: `${err.data.message}`,
            icon: "error",
          });
        });
    }
  };

  return (
    <div id="register">
      {isLoading ? <Loading /> : ""}
      <section className="section-hide p-0 overflow-hidden">
        <Row className="align-items-center h-100vh bg-white">
          <Col>
            <Container className="d-flex justify-content-center">
              <img src={logoLogin} style={{ width: "300px" }} alt="" />
            </Container>
          </Col>
          <Col className="bg-dark-blue h-100 d-flex align-items-center justify-content-start text-white px-3">
            <Container>
              <h1 className="main-title text-start">Ayo Jadi Mentor!</h1>
              <form action="" className="form-control text-start bg-dark-blue border-0">
                <label className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control main-input mt-0"
                  placeholder="Nama Lengkap"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control main-input mt-0"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control main-input mt-0"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  required
                />
                <p className="pass-info text-white text-uppercase">
                  Password harus menggunakan huruf besar dan minimal 8 karakter
                </p>
                <p className="text-uppercase text-danger">{err}</p>
                <button type="submit" className="btn-submit w-100 mt-4" onClick={handleSubmit}>
                  Daftar
                </button>
                <p className="main-info text-center mt-3">
                  Sudah punya akun?{" "}
                  <Link to={"/login"} className="text-decoration-none text-gold">
                    Masuk
                  </Link>
                </p>
              </form>
            </Container>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SignUpPage;
