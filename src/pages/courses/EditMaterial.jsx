import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Breadcrumb from "../../components/courses/Breadcrumb";
import { useUpdateMaterialMutation } from "../../store/features/courses/courseSlice";

export default function EditMaterial() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state.title);
  const [description, setDescription] = useState(state.description);
  const [video, setVideo] = useState(state.video);
  const [previewVideo, setPreviewVideo] = useState();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onVideoChange = (e) => setPreviewVideo(e.target.files[0]);

  const [updateMaterial, { isLoading }] = useUpdateMaterialMutation();

  const updateVideo = previewVideo ? previewVideo : video;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("module_id", state.module_id);
    payload.append("title", title);
    payload.append("description", description);
    payload.append("video", updateVideo);

    await updateMaterial({ material_id: state.material_id, data: payload })
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Materi berhasil diperbarui",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/detail-course/${state.course_id}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
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
          current="Edit Materi"
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
              <video width="100%" height="500px" controls className="my-3 rounded">
                <source src={video} />
              </video>
            )}

            {previewVideo && (
              <video width="100%" height="500px" controls className="my-3 rounded">
                <source src={URL.createObjectURL(previewVideo)} />
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
            <Button variant="warning w-50" type="submit" disabled={isLoading}>
              {isLoading ? <Spinner animation="border" size="sm" /> : "Simpan perubahan"}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
