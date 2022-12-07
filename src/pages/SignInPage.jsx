import '../assets/css/login.css'

import { Row, Col, Container } from "react-bootstrap"
import logoLogin from '../assets/img/logo-login.png'
import { Link } from 'react-router-dom'

import Loading from '../components/Loading/Loading'

import { useState } from 'react'

const SignInPage = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState("")

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!emailRegex.test(form.email)){
            setErr("Email yang dimasukkan tidak sesuai format")
        } else {
            setLoading(true)
            setErr("")
        }
    }

    return(
        <>
            {loading ? <Loading/> : ''}
            <section className="section-hide p-0 overflow-hidden">
                <Row className="align-items-center h-100vh">
                    <Col>
                        <Container>
                            <img src={logoLogin} style={{ "width": "35.188em"}} />
                        </Container>
                    </Col>
                    <Col className="bg-dark h-100 d-flex align-items-start justify-content-start">
                        <Container>
                            <h1 className="main-title text-start">Selamat datang!</h1>
                            <form action="" className="form-control text-start" onSubmit={handleSubmit}>
                                <span className="text-danger">{err}</span>
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control main-input mt-4" placeholder="Masukkan email" name="email" value={form.email} onChange={handleChange} required/>
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control main-input mt-4" placeholder="Masukkan password" name="password"value={form.password} onChange={handleChange} required/>
                                <div className="form-check d-flex align-items-center p-0 mt-4">
                                <input type="checkbox" id="vehicle1" name="remind" value="Bike" style={{ "width": "26px", "height": "26px" }}/>
                                <label for="remind" className="ms-2"> Ingat Aku ?</label>
                                </div>
                                <button type='submit' className="btn-submit w-100 mt-4">Masuk</button>
                            </form>
                            <p className="main-info mt-4">Belum Punya Akun? <Link to={'/register'} className="text-decoration-none text-gold">Daftar</Link></p>
                        </Container>
                    </Col>
                </Row>    
            </section>
        </>
    )
}

export default SignInPage