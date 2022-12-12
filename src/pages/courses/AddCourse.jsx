import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BgAddCourse from "../../assets/img/bg-add-course.png";
import { BsChevronLeft } from "react-icons/bs";

export default function AddCourse() {
  const hiddenFileInput = useRef();
    const [hoverImageCourse, setHoverImageCourse] = useState(false);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <div className="d-flex my-4">
        <div>
          <Button variant="outline-warning" as={Link} to="/">
            <BsChevronLeft /> Kembali
          </Button>
        </div>
        <h2 className=" mx-auto text-white">Tambah Course</h2>
        <div style={{ width: 102.91 }}/>
      </div>
      <div className="shadow-lg bg-body rounded-3 mb-5">
        <Form>
          <div
            className="upload-gambar"
            style={{
              backgroundImage: `url(${BgAddCourse})`,
              backgroundColor: hoverImageCourse ? "black" : "transparent",
              transition: hoverImageCourse ? "0.5s" : "0.5s",
            }}
            onMouseEnter={() => {
              setHoverImageCourse(true);
            }}
            onMouseLeave={() => {
              setHoverImageCourse(false);
            }}
          >
            <Form.Group className="mb-3 text-center">
              <Form.Control
                type="file"
                ref={hiddenFileInput}
                className="d-none"
              />
              <Button variant="outline-warning" onClick={handleClick}>
                Upload Gambar
              </Button>
            </Form.Group>
          </div>

          <div className="p-5">
            <Form.Group className="mb-3">
              <Form.Label>Judul Course</Form.Label>
              <Form.Control type="text" placeholder="Klik disini" />
            </Form.Group>

            <Form.Label>Kategori</Form.Label>
            <Form.Select>
              <option>Pilih disini</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Group className="mt-3 mb-4">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" placeholder="Klik disini" rows={7} />
            </Form.Group>

            <div className="text-center">
              <Button variant="warning w-50" type="submit">
                Simpan perubahan
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
}
