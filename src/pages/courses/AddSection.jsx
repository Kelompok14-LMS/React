import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

export default function AddSection() {
  return (
    <Container>
      <div className="d-flex my-4">
        <div>
          <Button variant="outline-warning" as={Link} to="/detail-course">
            <BsChevronLeft /> Kembali
          </Button>
        </div>
        <h3 className="mx-auto text-white">Tambah Section</h3>
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
