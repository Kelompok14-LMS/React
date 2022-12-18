import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useUpdateGradeMutation } from "../../store/features/mentees/menteeAssignmentSlice";

export default function Grade({ show, handleClose, id, assignment_id, grade, handleChange, name }) {
  const [updateGrade] = useUpdateGradeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("assignment_id", assignment_id);
    payload.append("grade", grade);

    await updateGrade({ id: id, data: payload })
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Section berhasil diperbarui",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Berhasil!",
          text: "Data tidak boleh ada yang kosong!",
          confirmButtonColor: "#3085d6",
        });
      });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <h5>{name}</h5>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Nilai</Form.Label>
            <Form.Control type="number" value={grade} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Batal
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
