import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BgAddCourse from "../../assets/img/bg-add-course.png";
import Alert from "../../components/Alert";
import Breadcrumb from "../../components/courses/Breadcrumb";
import { useGetCategoriesQuery } from "../../store/features/courses/categorySlice";
import { useAddCourseMutation } from "../../store/features/courses/courseSlice";
import { useGetProfileQuery } from "../../store/features/user/profileSlice";
import { fileReader } from "../../utils/fileReader";

export default function AddCourse() {
  const navigate = useNavigate();

  const { data: getCategories } = useGetCategoriesQuery();

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
    fileReader(setPreviewThumbnail, thumbnail);
  }, [thumbnail]);

  const [addCourse] = useAddCourseMutation();
  const { data: getProfile } = useGetProfileQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("thumbnail", thumbnail);
    payload.append("title", title);
    payload.append("category_id", categoryId);
    payload.append("description", description);
    payload.append("mentor_id", getProfile?.id);

    await addCourse(payload)
      .unwrap()
      .then((_) => {
        Alert.addSuccess("Course berhasil dibuat");
        navigate("/courses");
      })
      .catch((_) => {
        Alert.addError();
      });
  };

  const hiddenFileInput = useRef();

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <div className="my-4">
        <Breadcrumb prev1="Daftar Courses" link1="/courses" current="Tambah Course" />
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
              {getCategories?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
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
    </>
  );
}
