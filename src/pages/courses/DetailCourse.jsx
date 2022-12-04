import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { useUpdateCourseMutation } from "../../store/features/courseSlice";
import BgAddCourse from "../../assets/img/bg-add-course.png";
import Section from "../../components/courses/Section";

export default function DetailCourse() {
  const navigate = useNavigate();

  const [toggleEdit, setToggleEdit] = useState(false);

  const [thumbnail, setThumbnail] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");

  const onThumbnailChange = (e) => setThumbnail(e.target.files[0]);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryIdChange = (e) => setCategoryId(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const [updateCourse] = useUpdateCourseMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("thumbnail", thumbnail);
    payload.append("title", title);
    payload.append("categoryId", categoryId);
    payload.append("description", description);

    updateCourse(payload);

    navigate("/detail-course");
  };

  const hiddenFileInput = useRef();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <div className="my-4">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item fs-5">
              <Link to="/courses">Daftar Courses</Link>
            </li>
            <li className="breadcrumb-item active fs-5 text-warning">Detail Course</li>
          </ol>
        </nav>
      </div>
      <div className="shadow-lg bg-body rounded-3 mb-5">
        <Form onSubmit={handleSubmit}>
          <div
            className="upload-gambar"
            style={{ backgroundImage: `url(${thumbnail ? URL.createObjectURL(thumbnail) : BgAddCourse})` }}
          >
            <Form.Group className="mb-3 text-center">
              <Form.Control type="file" className="d-none" ref={hiddenFileInput} onChange={onThumbnailChange} />
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
                  <Form.Control type="text" placeholder="Klik disini" onChange={onTitleChange} />
                </Form.Group>

                <Form.Label>Kategori</Form.Label>
                <Form.Select value={categoryId} onChange={onCategoryIdChange}>
                  <option>Pilih disini</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Group className="mt-3 mb-4">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control as="textarea" placeholder="Klik disini" rows={7} onChange={onDescriptionChange} />
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
