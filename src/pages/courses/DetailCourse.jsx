import React, { useEffect, useRef, useState } from "react";
import Alert from "../../components/Alert";
import Breadcrumb from "../../components/courses/Breadcrumb";
import EditCourse from "../../components/courses/EditCourse";
import Section from "../../components/courses/Section";
import Swal from "sweetalert2";
import { Button, Form } from "react-bootstrap";
import { fileReader } from "../../utils/fileReader";
import { Link, useParams } from "react-router-dom";
import { RiPencilFill } from "react-icons/ri";
import { useGetAssignmentByCourseQuery } from "../../store/features/courses/assignmentSlice";
import { useGetDetailCourseQuery, useUpdateCourseMutation } from "../../store/features/courses/courseSlice";

export default function DetailCourse() {
  // consume api
  const { id } = useParams();

  const { data: detailCourse, isSuccess } = useGetDetailCourseQuery(id);
  const { data: assignment } = useGetAssignmentByCourseQuery(id);

  // state
  const [thumbnail, setThumbnail] = useState();
  const [previewThumbnail, setPreviewThumbnail] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);

  // handler change
  const onThumbnailChange = (e) => setThumbnail(e.target.files[0]);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onCategoryIdChange = (e) => setCategoryId(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  // update
  const [updateCourse] = useUpdateCourseMutation();

  const updateThumbnail = thumbnail ? thumbnail : detailCourse?.thumbnail;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("thumbnail", updateThumbnail);
    payload.append("title", title);
    payload.append("category_id", categoryId);
    payload.append("description", description);

    await updateCourse({ course_id: id, data: payload })
      .unwrap()
      .then(() => {
        Alert.updateSuccess("Course berhasil diperbarui");
        setToggleEdit(false);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sepertinya terjadi kesalahan",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // utils
  useEffect(() => {
    fileReader(setPreviewThumbnail, thumbnail);
  }, [thumbnail]);

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
        <Form onSubmit={handleUpdate}>
          <div
            className="upload-gambar"
            style={{ backgroundImage: `url(${previewThumbnail ? previewThumbnail : detailCourse?.thumbnail})` }}
          >
            <Form.Group className="mb-3 text-center">
              <Form.Control type="file" className="d-none" ref={hiddenFileInput} onChange={onThumbnailChange} />
              {toggleEdit && (
                <Button variant="warning" onClick={handleClick}>
                  Ganti Gambar
                </Button>
              )}
            </Form.Group>
          </div>

          <div className="ps-5 pt-5 pe-5">
            {!toggleEdit && (
              <>
                <p className="m-0 fw-semibold text-decoration-underline">{detailCourse?.category}</p>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3>{detailCourse?.title}</h3>
                  <Button variant="outline-dark p-1" onClick={() => setToggleEdit(true)}>
                    <RiPencilFill size="25px" />
                  </Button>
                </div>
                <p>{detailCourse?.description}</p>
              </>
            )}

            {toggleEdit && (
              <EditCourse
                title={title}
                categoryId={categoryId}
                description={description}
                onTitleChange={onTitleChange}
                onCategoryIdChange={onCategoryIdChange}
                onDescriptionChange={onDescriptionChange}
                setToggleEdit={setToggleEdit}
                setPreviewThumbnail={setPreviewThumbnail}
                setTitle={setTitle}
                setCategoryId={setCategoryId}
                setDescription={setDescription}
                isSuccess={isSuccess}
                detailCourse={detailCourse}
              />
            )}
          </div>
        </Form>
        <div className="ps-5 pe-5 pb-5">
          <div className="d-flex my-4 gap-3">
            <Button variant="warning" as={Link} to={`/add-section/${detailCourse?.course_id}`}>
              + Tambah Section
            </Button>
            <Button
              variant="outline-secondary"
              as={Link}
              to={`/add-assignment/${detailCourse?.course_id}`}
              disabled={assignment}
            >
              + Tambah Assignment
            </Button>
          </div>
          <div>
            <Section id={detailCourse?.course_id} modules={detailCourse?.modules} assignment={assignment} />
          </div>
        </div>
      </div>
    </>
  );
}
