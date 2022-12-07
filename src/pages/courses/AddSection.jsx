import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Courses/Breadcrumb";
import { useAddModuleMutation } from "../../store/features/courseSlice";

export default function AddSection() {
  const navigate = useNavigate();

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
          prev1="Daftar Courses"
          link1="/courses"
          prev2="Detail Course"
          link2="/detail-course"
          current="Tambah Section"
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
