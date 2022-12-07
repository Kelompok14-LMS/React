import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Courses/Breadcrumb";
import { useAddModuleMutation } from "../../store/features/courseSlice";

export default function AddModule() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [video, setVideo] = useState();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onVideoChange = (e) => setVideo(e.target.files[0]);

  const [addModule] = useAddModuleMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("title", title);
    payload.append("description", description);
    payload.append("video", video);

    addModule(payload);

    navigate("/courses");
  };

  return (
    <>
      <div className="my-4">
        <Breadcrumb
          prev1="Daftar Courses"
          link1="/courses"
          prev2="Detail Course"
          link2="/detail-course"
          current="Tambah Materi"
        />
      </div>
      <div className="shadow-lg bg-body p-5 rounded-3 mb-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Judul Section</Form.Label>
            <Form.Control type="text" placeholder="Klik disini" value={title} onChange={onTitleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Deskripsi Section (Opsional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="Klik disini"
              value={description}
              onChange={onDescriptionChange}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <div className="d-flex justify-content-between">
              <Form.Label>Video Materi</Form.Label>
            </div>
            {video && (
              <video width="100%" height="500px" controls className="my-3">
                <source src={URL.createObjectURL(video)} />
              </video>
            )}
            <Form.Control
              type="file"
              name="video"
              onChange={onVideoChange}
              onClick={(e) => (e.target.value = null) || setVideo()}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="warning w-50" type="submit">
              Simpan perubahan
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
