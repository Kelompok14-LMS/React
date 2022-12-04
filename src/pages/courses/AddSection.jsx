import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/courses/Breadcrumb";
import { useAddModuleMutation } from "../../store/features/courseSlice";

export default function AddSection() {
  const navigate = useNavigate();

  const [video, setVideo] = useState();
  const [slide, setSlide] = useState();
  const [assignment, setAssignment] = useState();

  const onVideoChange = (e) => setVideo(e.target.files[0]);
  const onSlideChange = (e) => setSlide(e.target.files[0]);
  const onAssignmentChange = (e) => setAssignment(e.target.files[0]);

  const [addModule] = useAddModuleMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("video", video);
    payload.append("slide", slide);
    payload.append("assignment", assignment);

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
          current="Tambah Section"
        />
      </div>
      <div className="shadow-lg bg-body p-5 rounded-3 mb-5">
        <Form onSubmit={handleSubmit}>
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
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Slide Materi</Form.Label>
            <Form.Control type="file" onChange={onSlideChange} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-4">
            <Form.Label>Assignment</Form.Label>
            <Form.Control type="file" onChange={onAssignmentChange} />
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
