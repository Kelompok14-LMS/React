import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/courses/Breadcrumb";
import { useAddModuleMutation } from "../../store/features/courses/moduleSlice";

export default function AddAssignment() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const [addModule] = useAddModuleMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    addModule({
      title: title,
      description: description,
    });

    navigate("/detail-course");
  };

  return (
    <>
      <div className="my-4">
        <Breadcrumb
          link1="/courses"
          prev1="Daftar Courses"
          link2={`/detail-course/${id}`}
          prev2="Detail Course"
          current="Tambah Assignment"
        />
      </div>
      <div className="shadow-lg bg-body p-5 rounded-3 mb-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Judul Assignment</Form.Label>
            <Form.Control type="text" placeholder="Klik disini" value={title} onChange={onTitleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Deskripsi Assignment</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="Klik disini"
              value={description}
              onChange={onDescriptionChange}
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
