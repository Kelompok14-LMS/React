import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import AddCourses from "../pages/courses/AddCourse";
import AddMaterial from "../pages/courses/AddMaterial";
import AddSection from "../pages/courses/AddSection";
import Courses from "../pages/courses/Courses";
import DetailCourse from "../pages/courses/DetailCourse";

export default function SetupRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/courses" element={<Courses />} />
            <Route path="/detail-course/:id" element={<DetailCourse />} />
            <Route path="/add-course" element={<AddCourses />} />
            <Route path="/add-section/:id" element={<AddSection />} />
            <Route path="/add-material/:id" element={<AddMaterial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
