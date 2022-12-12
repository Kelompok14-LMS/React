import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import Section from "../../components/courses/Section";
import Breadcrumb from "../../components/courses/Breadcrumb";
import { useGetCourseQuery, useUpdateCourseMutation } from "../../store/features/courses/courseSlice";
import { useGetCategoriesQuery } from "../../store/features/courses/categorySlice";
import Swal from "sweetalert2";

export default function DetailCourse() {
  const { id } = useParams();

  // consume api
  const { data: course, isSuccess } = useGetCourseQuery(id);
  const { data: getCategories } = useGetCategoriesQuery();

  const [toggleEdit, setToggleEdit] = useState(false);

  // state
  const [thumbnail, setThumbnail] = useState();
  const [previewThumbnail, setPreviewThumbnail] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");

  // set state for edit
  useEffect(() => {
    if (isSuccess) {
      setTitle(course?.title);
      setCategoryId(course?.category); // category_id
      setDescription(course?.description);
    }
  }, [course?.category, course?.description, course?.thumbnail, course?.title, isSuccess]);

  // handler change
  const onThumbnailChange = (e) => setThumbnail(e.target.files[0]);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryIdChange = (e) => setCategoryId(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  // preview image
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewThumbnail(reader.result);
    };
    if (thumbnail) {
      reader.readAsDataURL(thumbnail);
    }
  }, [thumbnail]);

  // update
  const [updateCourse] = useUpdateCourseMutation(id);

  const updateThumbnail = thumbnail ? thumbnail : course?.thumbnail;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("thumbnail", updateThumbnail);
    payload.append("title", title);
    payload.append("category_id", categoryId);
    payload.append("description", description);

    await updateCourse({ course_id: id, data: payload })
      .unwrap()
      .then((_) => {
        Swal.fire({
          icon: "success",
          title: "Course berhasil diperbarui",
          showConfirmButton: false,
          timer: 1500,
        });
        setToggleEdit(false);
      })
      .catch((_) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan",
          showConfirmButton: false,
          timer: 1500,
        });
      });
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
        <Form onSubmit={handleUpdate} key={course?.course_id}>
          <div
            className="upload-gambar"
            style={{ backgroundImage: `url(${previewThumbnail ? previewThumbnail : course?.thumbnail})` }}
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
                <p className="m-0 fw-semibold text-decoration-underline">{course?.category}</p>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3>{course?.title}</h3>
                  <Button variant="outline-dark p-1" onClick={() => setToggleEdit(true)}>
                    <RiPencilFill size="25px" />
                  </Button>
                </div>
                <p>{course?.description}</p>
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
                  <Form.Control type="text" placeholder="Klik disini" value={title} onChange={onTitleChange} />
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
                    value={description}
                    rows={7}
                    onChange={onDescriptionChange}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </>
            )}
          </div>
        </Form>
        <div className="ps-5 pe-5 pb-5">
          <div className="d-flex my-4 gap-3">
            <Button variant="warning" as={Link} to={`/add-section/${course?.course_id}`}>
              + Tambah Section
            </Button>
            <Button variant="outline-secondary" as={Link} to={`/add-assignment/${course?.course_id}`}>
              + Tambah Assignment
            </Button>
          </div>
          <div>
            <Section id={course?.course_id} />
          </div>
        </div>
      </div>
    </>
  );
}
