import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Section from "../../components/courses/Section";
import BgAddCourse from "../../assets/img/bg-add-course.png";
import { RiPencilFill } from "react-icons/ri";
import { BsChevronLeft } from "react-icons/bs";

export default function DetailCourse() {
  const hiddenFileInput = useRef();
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleClick = () => {
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
        <h3 className="mx-auto text-white">Detail Course</h3>
      </div>
      <div className="shadow-lg bg-body rounded-3 mb-5">
        <Form>
          <div className="upload-gambar" style={{ backgroundImage: `url(${BgAddCourse})` }}>
            <Form.Group className="mb-3 text-center">
              <Form.Control type="file" ref={hiddenFileInput} className="d-none" />
              <Button variant="outline-warning" onClick={handleClick}>
                Ganti Gambar
              </Button>
            </Form.Group>
          </div>

          <div className="ps-5 pt-5 pe-5">
            {!toggleEdit && (
              <>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3>Web Programming 101</h3>
                  <Button variant="outline-dark p-1" onClick={() => setToggleEdit(true)}>
                    <RiPencilFill size="25px" />
                  </Button>
                </div>
                <p>
                  Web programming refers to the writing, markup and coding involved in Web development, which includes
                  Web content, Web client and server scripting and network security. The most common languages used for
                  Web programming are XML, HTML, JavaScript, Perl 5 and PHP. Web programming refers to the writing,
                  markup and coding involved in Web development, which includes Web content, Web client and server
                  scripting and network security. The most common languages used for Web programming are XML, HTML,
                  JavaScript, Perl 5 and PHP. Web programming refers to the writing, markup and coding involved in Web
                  development, which includes Web content, Web client and server scripting and network security. The
                  most common languages used for Web programming are XML, HTML, JavaScript, Perl 5 and PHP.
                </p>
              </>
            )}

            {toggleEdit && (
              <>
                <div className="text-end">
                  <Button variant="outline-warning" onClick={() => setToggleEdit(false)}>
                    Cancel
                  </Button>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Judul Course</Form.Label>
                  <Form.Control type="text" placeholder="Klik disini" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control as="textarea" placeholder="Klik disini" rows={7} />
                </Form.Group>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit" onClick={() => setToggleEdit(false)}>
                    Simpan perubahan
                  </Button>
                </div>
              </>
            )}
          </div>
        </Form>
        <div className="ps-5 pe-5 pb-5">
          <div className="my-4">
            <Button variant="warning" as={Link} to="/add-section">
              + Tambah Section
            </Button>
          </div>
          <div>
            <Section />
          </div>
        </div>
      </div>
    </Container>
  );
}
