import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import DefaultAvatar from "../../assets/img/default-avatar.png";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useDeleteAccessCourseMutation, useGetMenteesCoursesQuery } from "../../store/features/mentees/menteeSlice";
import Breadcrumb from "../../components/courses/Breadcrumb";

export default function DetailMentees() {
  const { state } = useLocation();
  const [page, setPage] = useState(1);

  const { data: mentees } = useGetMenteesCoursesQuery({ course_id: state.course_id, page: page });

  const [deleteMentees] = useDeleteAccessCourseMutation();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin hapus?",
      text: "Anda tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D6EFD",
      cancelButtonColor: "#DC3545",
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMentees({ course_id: state.course_id, mentee_id: id });
        Swal.fire({
          title: "Terhapus!",
          text: "Mentees berhasil di hapus aksesnya",
          icon: "success",
          confirmButtonColor: "#0D6EFD",
          confirmButtonText: "Oke",
        });
      }
    });
  };

  return (
    <div className="mb-5">
      <div className="my-4">
        <Breadcrumb link1="/mentees" prev1="Daftar Mentees" current={`${state.title}`} />
      </div>
      <div className="d-flex mt-4 align-item-center shadow-lg bg-body rounded-top mb-1 py-3 px-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center px-26 py-8">
            <h4 className="mb-0">
              Semua Mentees | <small style={{ fontSize: 15 }}>{mentees?.total_rows} Totals</small>
            </h4>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} className="rounded-bottom bg-white">
        <div className="p-4">
          {mentees?.result?.map((item) => (
            <div key={item.id}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                    src={item.profile_picture ? item?.profile_picture : DefaultAvatar}
                    alt=""
                  />
                  <div>
                    <small className="fw-semibold">{item.email}</small>
                  </div>
                </div>
                <div className="text-center">
                  <Button variant="warning" onClick={() => handleDelete(item.id)}>
                    <FaTrashAlt className="pe-1 mb-1" />
                    Hapus Akses
                  </Button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div style={{ height: 2, backgroundColor: "black" }} />
        <div
          style={{
            paddingBottom: 17.5,
            marginLeft: 26,
            marginRight: 26,
            marginTop: 17.5,
          }}
          className="d-flex px-3 mb-3 justify-content-between align-items-center"
        >
          <p style={{ fontSize: 18, color: "#8896A6" }} className="mb-0">
            1 - {mentees?.limit} of {mentees?.total_rows} mentees
          </p>
          <p style={{ fontSize: 16, color: "#8896A6" }} className="mb-0">
            {mentees?.page} of {mentees?.total_pages} pages
          </p>

          <div className="d-flex">
            <button className="border-0 bg-white" onClick={() => setPage(page - 1)} disabled={page === 1}>
              <AiOutlineLeft
                style={{
                  color: page === 1 && "gray",
                }}
                size={26.85}
                color="#E4B548"
                className="left-chevron"
              />
            </button>
            <div style={{ width: 18 }} />
            <button
              className="border-0 bg-white"
              onClick={() => setPage(page + 1)}
              disabled={page === mentees?.total_pages}
            >
              <AiOutlineRight
                style={{
                  color: page === mentees?.total_pages && "gray",
                }}
                size={26.85}
                color="#E4B548"
                className="right-chevron"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
