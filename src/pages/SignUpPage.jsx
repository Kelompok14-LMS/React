import '../assets/css/register.css'

import { Row, Col, Container } from "react-bootstrap"
import logoLogin from '../assets/img/logo-login.png'

import Loading from '../components/Loading/Loading'

import { useState } from 'react'

const SignUpPage = () => {
    const passRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name && !form.email && !form.pass && !form.pass2){
            setErr("Form Tidak Boleh Ada Yang Kosong")
        } else if (!passRegex.test(form.password)){
            setErr("Password harus menggunakan huruf besar dan minimal 8 karakter")
        } else if(form.password != form.password2) {
            setErr("Password & Konfirmasi Berbeda")
        } else {
            setLoading(true)
        }
    }

    return(
        <>
            {loading ? <Loading/> : ""}
            <section className="section-hide p-0 overflow-hidden">
                <Row className="align-items-center h-100vh bg-white">
                    <Col>
                        <Container className="d-flex justify-content-center">
                            <img src={logoLogin} style={{ "width": "35.188em"}} />
                        </Container>
                    </Col>
                    <Col className="bg-dark-blue h-100 d-flex align-items-start justify-content-start text-white px-3">
                        <Container>
                            <h1 className="main-title text-start">Ayo Bergabung</h1>
                            <p className="main-subtitle text-start">Coba banyak  kelas gratis yang dapat diakses kapanpun</p>
                            <form action="" className="form-control text-start bg-dark-blue">
                                <input type="text" className="form-control main-input mt-4" placeholder="Nama Lengkap" name="name" value={form.name} onChange={onChange} required/>
                                <input type="email" className="form-control main-input mt-4" placeholder="Email" name="email" value={form.email} onChange={onChange} required/>
                                <input type="password" className="form-control main-input mt-4" placeholder="Password" name="password" value={form.password} onChange={onChange} required/>
                                <p className="text-white text-uppercase">Password harus menggunakan huruf besar dan minimal 8 karakter</p>
                                <input type="password" className="form-control main-input mt-4" placeholder="Konfirmasi Password" name="password2" value={form.password2} onChange={onChange} required/>
                                <p className="text-uppercase text-danger">{err}</p>
                                <button type="submit" className="btn-submit w-100 mt-4" onClick={handleSubmit}>Daftar</button>
                            </form>
                        </Container>
                    </Col>
                </Row>    
            </section>
        </>
    )
}

export default SignUpPage