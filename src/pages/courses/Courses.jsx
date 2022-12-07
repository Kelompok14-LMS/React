import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseImg1 from "../../assets/img/course-img-1.svg";
import Swal from "sweetalert2";

export default function Courses() {
  const handleDelete = () =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }
    });

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h2 className="text-white">Daftar Courses</h2>
        <div>
          <Button variant="warning" as={Link} to="/add-course">
            {" "}
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
            <p className="m-0 fw-semibold text-decoration-underline">Programming</p>
            <div className="d-flex justify-content-between align-items-center">
              <h2>Front-end Developer</h2>
              <Button variant="outline-dark" size="sm" style={{ height: "35px" }} onClick={() => handleDelete()}>
                <FaTrashAlt />
              </Button>
            </div>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
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
    </>
  );
}
