import React from "react";
import logo from './../assets/img/logo.png';
import logoBg from './../assets/img/logo-bg.png';
import card1 from './../assets/img/card1.png'
import card2 from './../assets/img/card2.png'
import card3 from './../assets/img/card3.png'
import card4 from './../assets/img/card4.png'
import card5 from './../assets/img/card5.png'
import mentor1 from './../assets/img/mentor1.png'
import mentor2 from './../assets/img/mentor2.png'
import mentor3 from './../assets/img/mentor3.png'
import mentor4 from './../assets/img/mentor4.png'
import mentor5 from './../assets/img/mentor5.png'
import point1 from './../assets/img/point1.png'
import point2 from './../assets/img/point2.png'
import point3 from './../assets/img/point3.png'
import quote from './../assets/img/quote1.png'
import section1 from '../assets/img/section1.png'
import '../assets/css/landing.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import $ from 'jquery' 
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const LandingPage = () => {
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;

    const navText = () => {
        return [  
          <span key={'1_1'} class='lnr lnr-arrow-up'></span>, 
          <span key={'2_2'} class='lnr lnr-arrow-down'></span>
        ];
      }

    return (
        <>
        <div className="navbar d-flex justify-content-between">
            <div className="container nav">
                <div className="d-flex align-items-center">
                <div className="nav-logo">
                    <a href="#">
                    <img src={logo} alt="" style={{ "width": "100%", "objectFit" : "cover"}}/>
                    </a>
                </div>
                {/* <div className="nav-search ms-3">
                    <svg className="svg-search" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7791 15.0943H16.6951L16.3109 14.7238C17.6556 13.1595 18.4652 11.1286 18.4652 8.91938C18.4652 3.99314 14.4721 0 9.54585 0C4.6196 0 0.626465 3.99314 0.626465 8.91938C0.626465 13.8456 4.6196 17.8388 9.54585 17.8388C11.7551 17.8388 13.786 17.0292 15.3503 15.6844L15.7208 16.0686V17.1527L22.5819 24L24.6265 21.9554L17.7791 15.0943ZM9.54585 15.0943C6.12904 15.0943 3.37089 12.3362 3.37089 8.91938C3.37089 5.50257 6.12904 2.74443 9.54585 2.74443C12.9627 2.74443 15.7208 5.50257 15.7208 8.91938C15.7208 12.3362 12.9627 15.0943 9.54585 15.0943Z" fill="#5F5F5F"/>
                    </svg>
                    <input type="text" className="searchBox" placeholder="Cari kelas..."/>
                </div> */}
                </div>
                <div className="nav-menu d-flex">
                    <a href="#kelas" className="nav-link">Kelas</a>
                    <a href="#mentor" className="nav-link">Mentor</a>
                    <a href="#kontak" className="nav-link">Kontak</a>
                </div>
                <div className="nav-button">
                    <Link to={'/login'} className="btn-login">Masuk </Link>
                    <Link to={'/register'} className="btn-register">Daftar </Link>
                </div>
            </div>
        </div>
        <section className="bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col text-start">
                        <h1 className="section-title">
                        Ubah <span className="text-gold">Ambisi Mu Menjadi</span> Kisah Sukses
                        </h1>
                        <p className="section-subtitle">
                        Bergabunglah bersama kami menjadi mentor berkulitas dan bangun kisah sukses mu bersama Eduworld
                        </p>
                        <a href="#" className="section-btn">Ayo Gabung</a>
                    </div>
                    <div className="col" style={{ "maxWidth": "52%" }}>
                        <img className="image-section1" src={section1} style={{ "width": "37em" }} />
                    </div>
                </div>
            </div>
        </section>
        <div className="point">
            <div className="container">
                <div className="wrap-point d-flex justify-content-between text-start">
                    <div className="point-item">
                        <img src={point1} alt="" style={{ "width": "9.125em" }} />
                        <h1 className="point-title">Pembelajaran Efektif</h1>
                        <p className="point-subtitle">Buat kelasmu menyenangkan dan mudah dipahami, kendalikan kelasmu dari mana saja.</p>
                    </div>
                    <div className="point-item">
                        <img src={point2} alt="" style={{ "width": "9.125em" }} />
                        <h1 className="point-title">Pendengar yang menginspirasi</h1>
                        <p className="point-subtitle">Bantu pelajar menjelajahi minat mereka, mendapatkan skill baru dan memajukan karier</p>
                    </div>
                    <div className="point-item">
                        <img src={point3} alt="" style={{ "width": "9.125em" }} />
                        <h1 className="point-title">Dapatkan Reward</h1>
                        <p className="point-subtitle">Perluas jaringan mentor profesional anda, tingkatkan skill dan dapatkan uang dari kelas berbayar.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="motto bg-dark">
            <div className="container mt-5">
                <div className="row mt-2">
                    <div className="col-7">
                        <h1 className="section-title text-white fw-bold">Mentor Profesional dengan Pengalaman dibidangnya</h1>
                    </div>
                    <div className="col">
                        <p className="section-subtitle text-white">
                        Mentor kami datang dari berbagai latar belakang pendidikan, jaringan mengajar yang luas serta pengalaman bekerja selama lebih dari 3 tahun<br></br><br></br>
                        Kami memilih mereka berdasarkan pengalaman, pencapaian dan juga keterampilan praktis yang mereka miliki berdasarkan pengalaman dunia nyata.
                        </p>
                    </div>
                </div>
            </div>
            <div id="mentor"></div>
        </div>
        <section className="d-flex align-items-center justify-content-center">
        <div className="container">
            <OwlCarousel className="quote-slide" center={true} items={1} loop nav navText={['<svg width="59" height="99" viewBox="0 0 59 99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59 8.85L50.0514 0L0 49.5L50.0514 99L59 90.15L17.8972 49.5L59 8.85Z" fill="#E4B548"/></svg>','<svg width="59" height="99" viewBox="0 0 59 99" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.85L8.94859 0L59 49.5L8.94859 99L0 90.15L41.1028 49.5L0 8.85Z" fill="#E4B548"/></svg>']}>
                    <div className="row align-items-center">
                        <div className="col position-relative">
                            <div className="bg-dark" style={{ "width": "31.250em", "height": "25.375em", "borderRadius": "1em", "marginBottom": "3.438em"}}></div>
                            <img src={quote} alt="" style={{ "width": "31.250em", "position": "absolute", "bottom": "0", "left": "3.438em"}}/>
                        </div>
                        <div className="col text-start">
                            <h1 className="quote">
                                “Saya bangga mengetahui bahwa pekerjaan saya banyak membantu orang-orang diseluruh dunia untuk meningkatkan karir mereka dan membangun hal-hal hebat. Meskipun menjadi mentor penuh waktu adalah kerja keras, ini memungkinkan anda bekerja kapan pun, dimana pun dan sesuka anda”
                            </h1>
                            <p className="quote-name">
                                Edward Kellen
                            </p>
                            <p className="quote job">
                                Android Developer
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col position-relative">
                            <div className="bg-dark" style={{ "width": "31.250em", "height": "25.375em", "borderRadius": "1em", "marginBottom": "3.438em"}}></div>
                            <img src={quote} alt="" style={{ "width": "31.250em", "position": "absolute", "bottom": "0", "left": "3.438em"}}/>
                        </div>
                        <div className="col text-start">
                            <h1 className="quote">
                                “Saya bangga mengetahui bahwa pekerjaan saya banyak membantu orang-orang diseluruh dunia untuk meningkatkan karir mereka dan membangun hal-hal hebat. Meskipun menjadi mentor penuh waktu adalah kerja keras, ini memungkinkan anda bekerja kapan pun, dimana pun dan sesuka anda”
                            </h1>
                            <p className="quote-name">
                                Edward Kellen
                            </p>
                            <p className="quote job">
                                Android Developer
                            </p>
                        </div>
                    </div>
            </OwlCarousel>
            </div>
        </section>
        <section className="kategori bg-dark" id="kelas">
            <div className="container">
                <h1 className="section-title text-white text-center">Kategori Kursus Populer</h1>
                <p className="section-subtitle text-white text-center">Kami memliki banyak kursus yang diajarkan oleh mentor-mentor profesional dengan kurikulum yang dibuat bersama pelaku industri ternama</p>
            </div>
            <OwlCarousel center={true} items={4} margin={40} autoWidth loop autoplay autoplayTimeout={3000} style={{ "marginTop": "5em", "width": "100%"}}>
                <a href="https://www.google.com" target="_blank">
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card1} />
                    <Card.Body className="text-start">
                      <Card.Title>Android Developer</Card.Title>
                      <Card.Text>
                      Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                </a>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card2} />
                    <Card.Body className="text-start">
                      <Card.Title>Back-End Developer</Card.Title>
                      <Card.Text>
                      Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card3} />
                    <Card.Body className="text-start">
                      <Card.Title>Front-End Developer</Card.Title>
                      <Card.Text>
                      Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card4} />
                    <Card.Body className="text-start">
                      <Card.Title>UI/UX Design</Card.Title>
                      <Card.Text>
                      Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card5} />
                    <Card.Body className="text-start">
                      <Card.Title>React Developer</Card.Title>
                      <Card.Text>
                      Kurikulum didesain sesuai dengan standar global untuk mempersiapkan developer Back-End standar Global.
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
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
                        <input className="subcribe-input" type="text" placeholder="Klik email mu disini"/>
                        <button type="submit" className="subcribe-btn">Langganan</button>
                    </form>
                </div>
            </div>
        </section>
        {/* <section className="bg-dark">
            <OwlCarousel center={true} items={4} margin={40} autoWidth loop autoPlay autoPlayTimeout={3000} style={{ "marginTop": "5em", "width": "100%"}}>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={mentor1} />
                    <Card.Body className="text-start">
                      <Card.Title>Samantha Woo</Card.Title>
                      <Card.Text>
                      Software Engineer
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={mentor2} />
                    <Card.Body className="text-start">
                      <Card.Title>Edward Kellen</Card.Title>
                      <Card.Text>
                      Android Developer
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={mentor3} />
                    <Card.Body className="text-start">
                      <Card.Title>Christine Steward</Card.Title>
                      <Card.Text>
                      UI/UX Design
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={mentor4} />
                    <Card.Body className="text-start">
                      <Card.Title>Mohamed Salim</Card.Title>
                      <Card.Text>
                      React Developer
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={mentor5} />
                    <Card.Body className="text-start">
                      <Card.Title>Software Engineer</Card.Title>
                      <Card.Text>
                      UI/UX Design
                      </Card.Text>
                      <p className="card-info">
                        <svg className="me-2" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64156 1.64362H3.21386C2.62466 1.64362 2.14258 2.12569 2.14258 2.7149V11.2852C2.14258 11.8744 2.62466 12.3564 3.21386 12.3564H9.64156C10.2308 12.3564 10.7128 11.8744 10.7128 11.2852V2.7149C10.7128 2.12569 10.2308 1.64362 9.64156 1.64362ZM3.21386 2.7149H5.89207V7.00003L4.55297 6.19657L3.21386 7.00003V2.7149Z" fill="black"/>
                        </svg>
                        9 Kursus
                    </p>
                    </Card.Body>
                </Card>
            </OwlCarousel>
        </section> */}
        <div className="footer" id="kontak">
            <div className="container">
                <div className="row text-start">
                    <div className="col-4 ">
                        <div className="footer-logo">
                            <img src={logoBg} alt="" style={{ "width": "100%" }}/>
                        </div>
                    </div>
                    <div className="col">
                        <h1 className="footer-menu">
                        Kursus Eduworld
                        </h1>
                        <a href="" className="footer-link">Android Developer</a>
                        <a href="" className="footer-link">Back-end Developer</a>
                        <a href="" className="footer-link">Front-end Developer</a>
                        <a href="" className="footer-link">React Developer</a>
                    </div>
                    <div className="col">
                        <h1 className="footer-menu">
                        Kontak
                        </h1>
                        <a href="" className="footer-link">support@eduworld.co.id</a>
                        <a href="" className="footer-link">+62 21 6754 4234</a>
                    </div>
                    <div className="col">
                        <h1 className="footer-menu">
                             Ikuti kami
                        </h1>
                        <a href="" className="footer-link">Instagram</a>
                        <a href="" className="footer-link">Facebook</a>
                        <a href="" className="footer-link">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage