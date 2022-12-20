import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import DefaultAvatar from "../../assets/img/default-avatar.png";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useGetAssignmentByCourseQuery } from "../../store/features/courses/assignmentSlice";
import { useGetMenteeAssignmentsQuery } from "../../store/features/mentees/menteeAssignmentSlice";
import Breadcrumb from "../../components/courses/Breadcrumb";
import Grade from "../../components/mentees/Grade";

export default function DetailAssignments() {
  const { state } = useLocation();
  const [page, setPage] = useState(1);

  const { data: getAssignment } = useGetAssignmentByCourseQuery(state.course_id);
  const { data: menteeAssignments } = useGetMenteeAssignmentsQuery({ assignment_id: getAssignment?.id, page: page });

  const [grade, setGrade] = useState(0);
  const [name, setName] = useState("");
  const [menteeAssignmentId, setMenteeAssignmentId] = useState("");

  const handleChange = (e) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setGrade(value);
  };

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setGrade(item.grade);
    setName(item.name);
    setMenteeAssignmentId(item.id);
  };

  return (
    <div className="mb-5">
      <div className="my-4">
        <Breadcrumb link1="/assignments" prev1="Daftar Assignments" current={`${state.title}`} />
      </div>
      <div style={{ flex: 1 }} className="rounded-2 bg-white">
        <div className="p-4">
          {menteeAssignments?.result?.map((item) => (
            <div key={item.id}>
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle me-3"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  src={item.profile_picture ? item?.profile_picture : DefaultAvatar}
                  alt=""
                />
                <div>
                  <strong>{item.name}</strong>
                </div>
              </div>

              <div className="my-2">
                <div className="d-flex justify-content-between align-items-center">
                  <a href={item.pdf} rel="noopener noreferrer" target="_blank" style={{ marginLeft: "56.5px" }}>
                    <Button variant="warning">Buka File</Button>
                  </a>
                  <div className="d-flex">
                    <div style={{ marginRight: 58 }} className="d-flex align-items-center">
                      <p className="mb-0">Nilai</p>
                      <Form.Group
                        style={{
                          borderStyle: "solid",
                          borderWidth: 1,
                          borderColor: !item.grade ? "#E4B548" : "black",
                          width: 40,
                          height: 40,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          padding: 0,
                        }}
                        className="rounded mx-2 "
                      >
                        <Form.Control maxLength={3} value={item.grade} className="px-0 text-center bg-white" disabled />
                      </Form.Group>
                      <p className="mb-0">/100</p>
                    </div>
                    <Button variant="outline-warning border-dark" onClick={() => handleShow(item)}>
                      Nilai
                    </Button>
                    <Grade
                      show={show}
                      handleClose={handleClose}
                      id={menteeAssignmentId}
                      assignment_id={getAssignment?.id}
                      grade={grade}
                      handleChange={handleChange}
                      name={name}
                    />
                  </div>
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
            1 - {menteeAssignments?.limit} of {menteeAssignments?.total_rows} mentees
          </p>
          <p style={{ fontSize: 16, color: "#8896A6" }} className="mb-0">
            {menteeAssignments?.page} of {menteeAssignments?.total_pages} pages
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
              disabled={page === menteeAssignments?.total_pages}
            >
              <AiOutlineRight
                style={{
                  color: page === menteeAssignments?.total_pages && "gray",
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
