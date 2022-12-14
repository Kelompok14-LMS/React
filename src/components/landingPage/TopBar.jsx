import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

export default function TopBar() {
  return (
    <div className="navbar d-flex justify-content-between">
      <div className="container nav">
        <div className="d-flex align-items-center">
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={Logo} alt="" style={{ width: "100%", objectFit: "cover" }} />
            </Link>
          </div>
        </div>
        <div className="nav-menu d-flex">
          <a href="#kelas" className="nav-link">
            Kelas
          </a>
          <a href="#mentor" className="nav-link">
            Mentor
          </a>
          <a href="#kontak" className="nav-link">
            Kontak
          </a>
        </div>
        <div className="nav-button">
          <Link to={"/login"} className="btn-login">
            Masuk
          </Link>
          <Link to={"/register"} className="btn-register">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}
