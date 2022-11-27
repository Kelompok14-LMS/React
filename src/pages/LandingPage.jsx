import logo from './../asset/images/logo.png';
import logoBg from './../asset/images/logo-bg.png';
import card1 from './../asset/images/card1.png'
import card2 from './../asset/images/card2.png'
import card3 from './../asset/images/card3.png'
import card4 from './../asset/images/card4.png'
import card5 from './../asset/images/card5.png'
import mentor1 from './../asset/images/mentor1.png'
import mentor2 from './../asset/images/mentor2.png'
import mentor3 from './../asset/images/mentor3.png'
import mentor4 from './../asset/images/mentor4.png'
import mentor5 from './../asset/images/mentor5.png'
import point1 from './../asset/images/point1.png'
import point2 from './../asset/images/point2.png'
import point3 from './../asset/images/point3.png'
import quote from './../asset/images/quote1.png'
import section1 from '../asset/images/section1.png'
import '../asset/css/landing.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import $ from 'jquery' 
import Card from 'react-bootstrap/Card';

const Landing = () => {
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    return (
        <>
        <div className="navbar d-flex justify-content-between">
            <div className="container nav">
                <div className="nav-logo">
                    <img src={logo} alt="" style={{ "width": "100%", "objectFit" : "cover"}}/>
                </div>
                <div className="nav-search">
                    <svg className="svg-search" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7791 15.0943H16.6951L16.3109 14.7238C17.6556 13.1595 18.4652 11.1286 18.4652 8.91938C18.4652 3.99314 14.4721 0 9.54585 0C4.6196 0 0.626465 3.99314 0.626465 8.91938C0.626465 13.8456 4.6196 17.8388 9.54585 17.8388C11.7551 17.8388 13.786 17.0292 15.3503 15.6844L15.7208 16.0686V17.1527L22.5819 24L24.6265 21.9554L17.7791 15.0943ZM9.54585 15.0943C6.12904 15.0943 3.37089 12.3362 3.37089 8.91938C3.37089 5.50257 6.12904 2.74443 9.54585 2.74443C12.9627 2.74443 15.7208 5.50257 15.7208 8.91938C15.7208 12.3362 12.9627 15.0943 9.54585 15.0943Z" fill="#5F5F5F"/>
                    </svg>
                    <input type="text" className="searchBox" placeholder="Cari kategori atau tools yang ingin kamu pelajari"/>
                </div>
                <div className="nav-menu d-flex">
                    <a href="" className="nav-link">Home</a>
                    <a href="" className="nav-link">Kelas</a>
                    <a href="" className="nav-link">Mentor</a>
                    <a href="" className="nav-link">Kontak</a>
                </div>
                <div className="nav-button">
                    <a href="#" className="btn-login">Masuk</a>
                    <a href="#" className="btn-register">Daftar</a>
                </div>
            </div>
        </div>
        <section className="bg-dark">
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col mt-5">
                        <h1 className="section-title">
                        Telusuri banyaknya kelas terbaik yang dapat diakses secara gratis
                        </h1>
                        <p className="section-subtitle">
                        lebih dari 100 kursus tebaik dapat di akses secara gratis bagi para pemula, mulailah mencoba apa yang anda minati hanya dalam satu klik.
                        </p>
                    </div>
                    <div className="col" style={{ "maxWidth": "52%" }}>
                        <img className="image-section1" src={section1} style={{ "width": "50vw" }} />
                    </div>
                </div>
            </div>
        </section>
        <section className="kategori bg-white">
            <div className="container text-center">
                <h1 className="section-title text-dark">Kategori Kursus Populer</h1>
                <p className="section-subtitle text-dark">Kami memliki banyak kursus yang diajarkan oleh mentor-mentor profesional dengan kurikulum yang dibuat bersama pelaku industri ternama</p>
            </div>
            <OwlCarousel center={true} items={4} margin={40} autoWidth loop autoPlay autoPlayTimeout={3000} style={{ "marginTop": "5em", "width": "100%"}}>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card1} />
                    <Card.Body>
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
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={card2} />
                    <Card.Body>
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
                    <Card.Body>
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
                    <Card.Body>
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
                    <Card.Body>
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
                <div className="row mt-2">
                    <div className="col-7">
                        <h1 className="section-title text-dark fw-bold">Mentor Profesional dengan Pengalaman dibidangnya</h1>
                    </div>
                    <div className="col">
                        <p className="section-subtitle text-dark">
                        Mentor kami datang dari berbagai latar belakang pendidikan, jaringan mengajar yang luas serta pengalaman bekerja selama lebih dari 3 tahun<br></br><br></br>
                        Kami memilih mereka berdasarkan pengalaman, pencapaian dan juga keterampilan praktis yang mereka miliki berdasarkan pengalaman dunia nyata.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-dark">
            <div className="container">
                <div className="wrap-point d-flex justify-content-between">
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
            <OwlCarousel center={true} items={4} margin={40} autoWidth loop autoPlay autoPlayTimeout={3000} style={{ "marginTop": "5em", "width": "100%"}}>
                <Card style={{ width: '17.813em' }}>
                    <Card.Img variant="top" src={mentor1} />
                    <Card.Body>
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
                    <Card.Body>
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
                    <Card.Body>
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
                    <Card.Body>
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
                    <Card.Body>
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
        </section>
        <section className="d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col position-relative">
                        <div className="bg-dark" style={{ "width": "31.250em", "height": "25.375em", "borderRadius": "1em", "marginBottom": "3.438em"}}></div>
                        <img src={quote} alt="" style={{ "width": "31.250em", "position": "absolute", "bottom": "0", "left": "3.438em"}}/>
                    </div>
                    <div className="col">
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
            </div>
        </section>
        <div className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="footer-logo">
                            <img src={logoBg} alt="" style={{ "width": "100%" }}/>
                        </div>
                        <p className="footer-copyright">
                        © 2022 eduworld team
                        </p>
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

export default Landing