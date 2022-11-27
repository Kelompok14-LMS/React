import '../asset/css/login.css'

import { Row, Col, Container } from "react-bootstrap"
import logoLogin from '../asset/images/logo-login.png'

const Login = () => {
    return(
        <>
            <section className="p-0">
                <Row className="align-items-center h-100vh">
                    <Col>
                        <Container>
                            <img src={logoLogin} style={{ "width": "35.188em"}} />
                        </Container>
                    </Col>
                    <Col className="bg-dark h-100 d-flex align-items-center">
                        <Container>
                            <h1 className="main-title">Selamat datang!</h1>
                            <form action="" className="form-control p-0 border-0">
                                <input type="text" className="form-control main-input mt-4" placeholder="Username" name="username"/>
                                <input type="password" className="form-control main-input mt-4" placeholder="Password" name="password"/>
                            </form>
                        </Container>
                    </Col>
                </Row>    
            </section>
        </>
    )
}

export default Login