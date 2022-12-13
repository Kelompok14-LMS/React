import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Breadcrumb from "../../components/courses/Breadcrumb";
import { useUpdateAssignmentMutation } from "../../store/features/courses/assignmentSlice";

export default function EditAssignment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state.title);
  const [description, setDescription] = useState(state.description);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const [updateAssignment] = useUpdateAssignmentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAssignment({
      assignment_id: state.assignment_id,
      course_id: state.course_id,
      title: title,
      description: description,
    })
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Assignment berhasil diperbarui",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/detail-course/${state.course_id}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "Data tidak boleh ada yang kosong!",
          confirmButtonColor: "#3085d6",
        });
      });
  };

  return (
    <>
      <div className="my-4">
        <Breadcrumb
          link1="/courses"
          prev1="Daftar Courses"
          link2={`/detail-course/${state.course_id}`}
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
