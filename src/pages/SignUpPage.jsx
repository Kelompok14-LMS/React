import '../assets/css/register.css'

import { Row, Col, Container } from "react-bootstrap"
import logoLogin from '../assets/img/logo-login.png'
import Loading from '../components/Loading/Loading'
import { useEffect, useState } from 'react'
import { useRegisterMentorMutation } from '../store/features/userSlice'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Swal from "sweetalert2";

const SignUpPage = () => {
    const navigate = useNavigate()

    const passRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const onLogin = Cookies.get("token")
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

    const [registerMentor, {isLoading, isSuccess, isError, errorRegister}] = useRegisterMentorMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name && !form.email && !form.pass && !form.pass2){
            setErr("Form Tidak Boleh Ada Yang Kosong")
        } else if (!emailRegex.test(form.email)){
            setErr("Format email salah")
        } else if (!passRegex.test(form.password)){
            setErr("Password harus menggunakan huruf besar dan minimal 8 karakter")
        } else if(form.password != form.password2) {
            setErr("Password & Konfirmasi Berbeda")
        } else {
            registerMentor(
                {
                    fullname: form.name,
                    email: form.email,
                    password: form.password
                }
            )
        }
    }

    useEffect(() => {
        if(onLogin){
            navigate('/courses')
        }
        if(isLoading){
            setLoading(true)
        } else {
            setLoading(false)
        }
        if(isSuccess) {
            Swal.fire({
                title: "Daftar Berhasil",
                text: "Silahkan Login",
                icon: "success",
            });
            navigate('/login');
        }
        if(isError) {
            alert(errorRegister.data.message)
        }
    },[isLoading, isSuccess, isError])

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
                    <Col className="bg-dark-blue h-100 d-flex align-items-center justify-content-start text-white px-3">
                        <Container>
                            <h1 className="main-title text-start">Ayo Jadi Mentor</h1>
                            <form action="" className="form-control text-start bg-dark-blue border-0">
                                <input type="text" className="form-control main-input mt-4" placeholder="Nama Lengkap" name="name" value={form.name} onChange={onChange} required/>
                                <input type="email" className="form-control main-input mt-4" placeholder="Email" name="email" value={form.email} onChange={onChange} required/>
                                <input type="password" className="form-control main-input mt-4" placeholder="Password" name="password" value={form.password} onChange={onChange} required/>
                                <p className="pass-info text-white text-uppercase">Password harus menggunakan huruf besar dan minimal 8 karakter</p>
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