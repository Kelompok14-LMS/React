import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetCoursesQuery } from "../../services/coursesService";

export default function Assignments() {
  const navigate = useNavigate();
  const { data: courses } = useGetCoursesQuery();


  return (
    <Container>
      <div className="d-flex my-4">
        <h2 className="mx-outo text-white">Daftar Assignments</h2>
      </div>
      {courses?.data?.map((course) => (
        <div
          key={course.course_id}
          className=" align-item-center shadow-lg bg-body rounded-3 mb-3 py-3 px-5"
        >
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ color: "#112D4E" }}
          >
            <div className="d-flex align-items-center">
              <h4 className="mb-0">{course.title}</h4>
            </div>
            <Button
              variant="warning w-7 py-3 px-3"
              type="submit"
              size="md"
              onClick={() =>
                navigate(`/detailAssignments`, {
                  state: { course_id: course.course_id, title: course.title },
                })
              }
            >
              Detail Assignment
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
}
