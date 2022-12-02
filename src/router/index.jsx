import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import AddCourses from "../pages/courses/AddCourse";
import AddSection from "../pages/courses/AddSection";
import Courses from "../pages/courses/Courses";
import DetailCourse from "../pages/courses/DetailCourse";
import Mentees from "../pages/mentees/Mentees";

export default function SetupRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Courses />} />
            <Route path="/add-course" element={<AddCourses />} />
            <Route path="/add-section" element={<AddSection />} />
            <Route path="/detail-course" element={<DetailCourse />} />
            <Route path="/mentees" element={<Mentees />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
