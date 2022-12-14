import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAssignment from "../pages/courses/AddAssignment";
import AddCourses from "../pages/courses/AddCourse";
import AddMaterial from "../pages/courses/AddMaterial";
import AddSection from "../pages/courses/AddSection";
import Courses from "../pages/courses/Courses";
import DetailCourse from "../pages/courses/DetailCourse";
import EditAssignment from "../pages/courses/EditAssignment";
import EditMaterial from "../pages/courses/EditMaterial";
import EditSection from "../pages/courses/EditSection";
import PrivateRoute from "./PrivateRoute";

export default function SetupRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/courses" element={<Courses />} />
            <Route path="/detail-course/:id" element={<DetailCourse />} />
            <Route path="/add-course" element={<AddCourses />} />
            <Route path="/add-section/:id" element={<AddSection />} />
            <Route path="/edit-section/" element={<EditSection />} />
            <Route path="/add-material/" element={<AddMaterial />} />
            <Route path="/edit-material/" element={<EditMaterial />} />
            <Route path="/add-assignment/:id" element={<AddAssignment />} />
            <Route path="/edit-assignment" element={<EditAssignment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
