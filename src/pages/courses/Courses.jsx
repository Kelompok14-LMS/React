import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseImg1 from "../../assets/img/course-img-1.svg";
import { FaTrashAlt } from "react-icons/fa";

export default function Courses() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between mt-5">
          <h2 className="text-white">Daftar Courses</h2>
          <div>
            <Button variant="warning" as={Link} to="/add-course">
              + Tambah Course
            </Button>
          </div>
        </div>
        <div className="shadow bg-body rounded-2 my-5">
          <Row>
            <Col lg={6}>
              <img src={CourseImg1} alt="Course 1" className="img-fluid" />
            </Col>
            <Col lg={6} className="p-5" style={{ display: "flex", flexDirection: "column" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>Programming 101</h2>
                <Button variant="outline-dark" size="sm" style={{ height: "35px" }}>
                  <FaTrashAlt />
                </Button>
              </div>
              <p className="my-3 ">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>

              <div className="mt-auto text-end">
                <Button variant="warning" as={Link} to="/detail-course">
                  Lihat Selengkapnya
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="shadow bg-body rounded-2 my-5">
          <Row>
            <Col lg={6}>
              <img src={CourseImg1} alt="Course 1" className="img-fluid" />
            </Col>
            <Col lg={6} className="p-5" style={{ display: "flex", flexDirection: "column" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>Programming 101</h2>
                <Button variant="outline-dark" size="sm" style={{ height: "35px" }}>
                  <FaTrashAlt />
                </Button>
              </div>
              <p className="my-3">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>

              <div className="mt-auto text-end">
                <Button variant="warning">Lihat Selengkapnya</Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="shadow bg-body rounded-2 my-5">
          <Row>
            <Col lg={6}>
              <img src={CourseImg1} alt="Course 1" className="img-fluid" />
            </Col>
            <Col lg={6} className="p-5" style={{ display: "flex", flexDirection: "column" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>Programming 101</h2>
                <Button variant="outline-dark" size="sm" style={{ height: "35px" }}>
                  <FaTrashAlt />
                </Button>
              </div>
              <p className="my-3">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>

              <div className="mt-auto text-end">
                <Button variant="warning">Lihat Selengkapnya</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
