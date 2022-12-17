import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGetCoursesQuery } from "../../services/coursesService";

export default function Mentees() {
  const navigate = useNavigate()
  const {data: courses } = useGetCoursesQuery();

  return (
    <Container>
      <div className="d-flex my-4">
        <h2 className="mx-outo text-white">Daftar Mentees</h2>
      </div>
      {courses?.data?.map((course) => (
        <div
          key={course.course_id}
          className=" align-item-center shadow-lg bg-body rounded-3 mb-3 py-3 px-5"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center mr-4"
              style={{ color: "#112D4E" }}
            >
              <h4 className="mb-0" style={{overflow: "hidden", textOverflow: "ellipsis"}}>{course.title}</h4>
            </div>
            <Button
              variant="warning w-7 py-3 px-3"
              type="submit"
              size="md"
              onClick={() => navigate(`/detailmentees`, {state: {course_id: course.course_id}})}
            >
              Detail Mentees
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
}
