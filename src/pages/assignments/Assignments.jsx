import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useGetCoursesQuery } from "../../store/features/courses/courseSlice";
import { useGetProfileQuery } from "../../store/features/user/profileSlice";

export default function Assignments() {
  const navigate = useNavigate();
  const { data: getProfile } = useGetProfileQuery();

  const { data: courses } = useGetCoursesQuery(getProfile?.id);

  return (
    <div className="mb-5">
      <div className="d-flex my-4">
        <h3 className="mx-outo text-white">Daftar Assignments</h3>
      </div>

      {!courses && (
        <div className="d-flex justify-content-between border border-white rounded p-5">
          <h4 className="text-white">Anda belum mempunyai Course</h4>
          <Button variant="warning fw-semibold" as={Link} to="/add-course">
            + Buat Course Sekarang
          </Button>
        </div>
      )}

      {courses?.map((item) => (
        <div key={item.course_id} className="bg-body rounded-3 mb-3 py-3 px-5">
          <Row className="gy-3 align-items-center">
            <Col lg={10} md={9} sm={9}>
              <h5 style={{ color: "#112D4E", margin: "0px" }}>{item.title}</h5>
            </Col>
            <Col lg={2} md={3} sm={3}>
              <div className="text-end">
                <Button
                  variant="warning"
                  onClick={() =>
                    navigate(`/detailAssignments`, {
                      state: { course_id: item.course_id, title: item.title },
                    })
                  }
                >
                  Detail Assignment
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
