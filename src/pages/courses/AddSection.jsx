import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddSection() {
  return (
    <Container>
      <div className="my-4">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item fs-5">
              <Link to="/courses">Daftar Courses</Link>
            </li>
            <li className="breadcrumb-item fs-5">
              <Link to="/detail-course">Detail Course</Link>
            </li>
            <li className="breadcrumb-item active fs-5 text-warning">Tambah Section</li>
          </ol>
        </nav>
      </div>
      <div className="shadow-lg bg-body p-5 rounded-3 mb-5">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Video Materi</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Slide Materi</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-4">
          <Form.Label>Assignment</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <div className="text-center">
          <Button variant="warning w-50" type="submit">
            Simpan perubahan
          </Button>
        </div>
      </div>
    </Container>
  );
}
