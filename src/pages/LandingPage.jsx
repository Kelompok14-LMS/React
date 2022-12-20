import React from "react";
import logoBg from "./../assets/img/logo-bg.png";
import card1 from "./../assets/img/card1.png";
import card2 from "./../assets/img/card2.png";
import card3 from "./../assets/img/card3.png";
import card4 from "./../assets/img/card4.png";
import card5 from "./../assets/img/card5.png";
import point1 from "./../assets/img/point1.png";
import point2 from "./../assets/img/point2.png";
import point3 from "./../assets/img/point3.png";
import quote from "./../assets/img/quote1.png";
import section1 from "../assets/img/section1.png";
import "../assets/css/landing.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  window.jQuery = $;
  window.$ = $;
  global.jQuery = $;

  return (
    <>
      <section className="bg-dark-blue">
        <div className="container">
          <div className="row align-items-center">
            <div className="col text-start">
              <h1 className="section-title">
                Ubah <span className="text-gold">Ambisi Mu Menjadi</span> Kisah Sukses
              </h1>
              <p className="section-subtitle">
                Bergabunglah bersama kami menjadi mentor berkulitas dan bangun kisah sukses mu bersama Eduworld
              </p>
              <Link to="/register" className="section-btn">
                Ayo Gabung
              </Link>
            </div>
            <div className="col" style={{ maxWidth: "52%" }}>
              <img className="image-section1" src={section1} style={{ width: "37em" }} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="point bg-white">
        <div className="container">
          <div className="wrap-point d-flex justify-content-between text-start">
            <div className="point-item">
              <img src={point1} alt="" style={{ width: "9.125em" }} />
              <h1 className="point-title">Pembelajaran Efektif</h1>
              <p className="point-subtitle">
                Buat kelasmu menyenangkan dan mudah dipahami, kendalikan kelasmu dari mana saja.
              </p>
            </div>
            <div className="point-item">
              <img src={point2} alt="" style={{ width: "9.125em" }} />
              <h1 className="point-title">Pendengar yang menginspirasi</h1>
              <p className="point-subtitle">
                Bantu pelajar menjelajahi minat mereka, mendapatkan skill baru dan memajukan karier
              </p>
            </div>
            <div className="point-item">
              <img src={point3} alt="" style={{ width: "9.125em" }} />
              <h1 className="point-title">Dapatkan Reward</h1>
              <p className="point-subtitle">
                Perluas jaringan mentor profesional anda, tingkatkan skill dan dapatkan uang dari kelas berbayar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="motto bg-dark-blue">
        <div className="container mt-5">
          <div className="row mt-2">
            <div className="col-7">
              <h1 className="section-title text-white fw-bold">Mentor Profesional dengan Pengalaman dibidangnya</h1>
            </div>
            <div className="col">
              <p className="section-subtitle text-white">
                Mentor kami datang dari berbagai latar belakang pendidikan, jaringan mengajar yang luas serta pengalaman
                bekerja selama lebih dari 3 tahun<br></br>
                <br></br>
                Kami memilih mereka berdasarkan pengalaman, pencapaian dan juga keterampilan praktis yang mereka miliki
                berdasarkan pengalaman dunia nyata.
              </p>
            </div>
          </div>
        </div>
        <div id="mentor"></div>
      </div>
      <section className="d-flex align-items-center justify-content-center bg-white">
        <div className="container">
          <OwlCarousel
            className="quote-slide"
            center={true}
            items={1}
            loop
            nav
            navText={[
              '<svg width="59" height="99" viewBox="0 0 59 99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59 8.85L50.0514 0L0 49.5L50.0514 99L59 90.15L17.8972 49.5L59 8.85Z" fill="#E4B548"/></svg>',
              '<svg width="59" height="99" viewBox="0 0 59 99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.85L8.94859 0L59 49.5L8.94859 99L0 90.15L41.1028 49.5L0 8.85Z" fill="#E4B548"/></svg>',
            ]}
          >
            <div className="row align-items-center">
              <div className="col position-relative">
                <div
                  className="bg-dark-blue"
                  style={{ width: "31.250em", height: "25.375em", borderRadius: "1em", marginBottom: "3.438em" }}
                ></div>
                <img
                  src={quote}
                  alt=""
                  style={{ width: "31.250em", position: "absolute", bottom: "0", left: "3.438em" }}
                />
              </div>
              <div className="col text-start">
                <h1 className="quote">
                  “Saya bangga mengetahui bahwa pekerjaan saya banyak membantu orang-orang diseluruh dunia untuk
                  meningkatkan karir mereka dan membangun hal-hal hebat. Meskipun menjadi mentor penuh waktu adalah
                  kerja keras, ini memungkinkan anda bekerja kapan pun, dimana pun dan sesuka anda”
                </h1>
                <p className="quote-name">Edward Kellen</p>
                <p className="quote job">Android Developer</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col position-relative">
                <div
                  className="bg-dark-blue"
                  style={{ width: "31.250em", height: "25.375em", borderRadius: "1em", marginBottom: "3.438em" }}
                ></div>
                <img
                  src={quote}
                  alt=""
                  style={{ width: "31.250em", position: "absolute", bottom: "0", left: "3.438em" }}
                />
              </div>
              <div className="col text-start">
                <h1 className="quote">
                  “Saya bangga mengetahui bahwa pekerjaan saya banyak membantu orang-orang diseluruh dunia untuk
                  meningkatkan karir mereka dan membangun hal-hal hebat. Meskipun menjadi mentor penuh waktu adalah
                  kerja keras, ini memungkinkan anda bekerja kapan pun, dimana pun dan sesuka anda”
                </h1>
                <p className="quote-name">Edward Kellen</p>
                <p className="quote job">Android Developer</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="kategori bg-dark-blue" id="kelas">
        <div className="container">
          <h1 className="section-title text-white text-center">Kategori Kursus Populer</h1>
          <p className="section-subtitle text-white text-center">
            Kami memliki banyak kursus yang diajarkan oleh mentor-mentor profesional dengan kurikulum yang dibuat
            bersama pelaku industri ternama
          </p>
        </div>
        <OwlCarousel
          center={true}
          items={4}
          margin={40}
          autoWidth
          loop
          autoplay
          autoplayTimeout={3000}
          style={{ marginTop: "5em", width: "100%" }}
        >
          <Card style={{ width: "17.813em" }}>
            <Card.Img variant="top" src={card1} />
            <Card.Body className="text-start">
              <Card.Title>Android Developer</Card.Title>
              <Card.Text>
                Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
              </Card.Text>
              <p className="card-info">
                <svg
                  className="me-2"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z"
                    fill="black"
                  />
                </svg>
                9 Kursus
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "17.813em" }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body className="text-start">
              <Card.Title>Back-End Developer</Card.Title>
              <Card.Text>
                Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
              </Card.Text>
              <p className="card-info">
                <svg
                  className="me-2"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z"
                    fill="black"
                  />
                </svg>
                9 Kursus
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "17.813em" }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body className="text-start">
              <Card.Title>Front-End Developer</Card.Title>
              <Card.Text>
                Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
              </Card.Text>
              <p className="card-info">
                <svg
                  className="me-2"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z"
                    fill="black"
                  />
                </svg>
                9 Kursus
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "17.813em" }}>
            <Card.Img variant="top" src={card4} />
            <Card.Body className="text-start">
              <Card.Title>UI/UX Design</Card.Title>
              <Card.Text>
                Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
              </Card.Text>
              <p className="card-info">
                <svg
                  className="me-2"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z"
                    fill="black"
                  />
                </svg>
                9 Kursus
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "17.813em" }}>
            <Card.Img variant="top" src={card5} />
            <Card.Body className="text-start">
              <Card.Title>React Developer</Card.Title>
              <Card.Text>
                Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
              </Card.Text>
              <p className="card-info">
                <svg
                  className="me-2"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z"
                    fill="black"
                  />
                </svg>
                9 Kursus
              </p>
            </Card.Body>
          </Card>
        </OwlCarousel>
        <div className="container mt-5">
          <div className="wrap-subcribe text-start bg-white">
            <div className="subcribe-text">
              <h1 className="subcribe-title">Berlangganan Buletin</h1>
              <p className="subcribe-subtitle">Kami akan mengirimkan update terbaru</p>
            </div>
            <form className="position-relative">
              <input className="subcribe-input" type="text" placeholder="Klik email mu disini" />
              <button type="submit" className="subcribe-btn">
                Langganan
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="footer bg-white" id="kontak">
        <div className="container">
          <div className="row text-start">
            <div className="col-4 ">
              <div className="footer-logo">
                <img src={logoBg} alt="" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="col">
              <h1 className="footer-menu">Kursus Eduworld</h1>
              <a href="#foo" className="footer-link">
                Android Developer
              </a>
              <a href="#foo" className="footer-link">
                Back-end Developer
              </a>
              <a href="#foo" className="footer-link">
                Front-end Developer
              </a>
              <a href="#foo" className="footer-link">
                React Developer
              </a>
            </div>
            <div className="col">
              <h1 className="footer-menu">Kontak</h1>
              <a href="#foo" className="footer-link">
                support@eduworld.co.id
              </a>
              <a href="#foo" className="footer-link">
                +62 21 6754 4234
              </a>
            </div>
            <div className="col">
              <h1 className="footer-menu">Ikuti kami</h1>
              <a href="#foo" className="footer-link">
                Instagram
              </a>
              <a href="#foo" className="footer-link">
                Facebook
              </a>
              <a href="#foo" className="footer-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
