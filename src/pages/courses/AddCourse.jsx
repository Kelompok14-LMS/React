import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BgAddCourse from "../../assets/img/bg-add-course.png";
import { useAddCourseMutation } from "../../store/features/courseSlice";

export default function AddCourse() {
  const navigate = useNavigate();

  const [thumbnail, setThumbnail] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");

  const onThumbnailChange = (e) => setThumbnail(e.target.files[0]);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryIdChange = (e) => setCategoryId(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const [addCourse] = useAddCourseMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("thumbnail", thumbnail);
    payload.append("title", title);
    payload.append("categoryId", categoryId);
    payload.append("description", description);

    addCourse(payload);

    navigate("/courses");
  };

  const hiddenFileInput = useRef();

  const handleClick = (e) => {
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
            <li className="breadcrumb-item active fs-5 text-warning">Tambah Course</li>
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
                Upload Gambar
              </Button>
            </Form.Group>
          </div>

          <div className="p-5">
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
              <Form.Control
                as="textarea"
                placeholder="Klik disini"
                rows={7}
                value={description}
                onChange={onDescriptionChange}
              />
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
