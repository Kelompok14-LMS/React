import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteCourseMutation, useGetCoursesQuery } from "../../store/features/courses/courseSlice";
import { useGetProfileQuery } from "../../store/features/user/profileSlice";

export default function ListCourses() {
  const { data: getProfile } = useGetProfileQuery();

  const { data: courses } = useGetCoursesQuery(getProfile?.id);

  const [deleteCourse] = useDeleteCourseMutation();

  const handleDelete = (id) =>
    Swal.fire({
      title: "Yakin untuk menghapus?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCourse({
          course_id: id,
        })
          .unwrap()
          .then((_) => {
            Swal.fire({
              icon: "success",
              title: "Berhasil!",
              text: "Course berhasil terhapus",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((_) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Sepertinya terjadi kesalahan",
            });
          });
      }
    });

  return (
    <>
      {!courses && (
        <div className="d-flex justify-content-between border border-white rounded mt-5 p-5">
          <h4 className="text-white">Ayo mulai buat course anda</h4>
          <Button variant="warning fw-semibold" as={Link} to="/add-course">
            + Buat Course
          </Button>
        </div>
      )}

      {courses && (
        <div className="d-flex justify-content-between my-4">
          <h3 className="text-white">Daftar Courses</h3>
          <div>
            <Button variant="warning" as={Link} to="/add-course">
              + Tambah Course
            </Button>
          </div>
        </div>
      )}

      {courses?.map((item) => (
        <div className="shadow bg-body rounded mb-5" key={item.course_id}>
          <Row>
            <Col lg={6}>
              <img
                src={item.thumbnail}
                alt="Course"
                className="thumbnail-course"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Col>
            <Col lg={6}>
              <div className="p-5" style={{ display: "flex", flexDirection: "column", minHeight: "400px" }}>
                <p className="m-0 fw-semibold text-decoration-underline">{item.category}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{item.title}</h2>
                  <Button
                    variant="outline-dark me-2"
                    size="sm"
                    style={{ height: "35px" }}
                    onClick={() => handleDelete(item.course_id)}
                  >
                    <FaTrashAlt />
                  </Button>
                </div>
                <p className="my-3">{item?.description}</p>

                <div className="mt-auto text-end">
                  <Button variant="warning" as={Link} to={`/detail-course/${item.course_id}`}>
                    Lihat Selengkapnya
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
}
