import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { useUpdateCourseMutation } from "../../store/features/courseSlice";
import BgAddCourse from "../../assets/img/bg-add-course.png";
import Section from "../../components/courses/Section";
import Breadcrumb from "../../components/courses/Breadcrumb";

export default function DetailCourse() {
  const navigate = useNavigate();

  const [toggleEdit, setToggleEdit] = useState(false);

  const [thumbnail, setThumbnail] = useState();
  const [previewThumbnail, setPreviewThumbnail] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");

  const onThumbnailChange = (e) => setThumbnail(e.target.files[0]);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryIdChange = (e) => setCategoryId(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewThumbnail(reader.result);
    };
    if (thumbnail) {
      reader.readAsDataURL(thumbnail);
    }
  }, [thumbnail]);

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
    <>
      <div className="my-4">
        <Breadcrumb prev1="Daftar Courses" link1="/courses" current="Detail Course" />
      </div>
      <div className="shadow-lg bg-body rounded-3 mb-5">
        <Form onSubmit={handleSubmit}>
          <div
            className="upload-gambar"
            style={{ backgroundImage: `url(${previewThumbnail ? previewThumbnail : BgAddCourse})` }}
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
                <p className="m-0 fw-semibold text-decoration-underline">Programming</p>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3>Front-end Developer</h3>
                  <Button variant="outline-dark p-1" onClick={() => setToggleEdit(true)}>
                    <RiPencilFill size="25px" />
                  </Button>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
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
    </>
  );
}
