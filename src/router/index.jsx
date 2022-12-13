import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAssignment from "../pages/courses/AddAssignment";
import AddCourses from "../pages/courses/AddCourse";
import AddMaterial from "../pages/courses/AddMaterial";
import AddSection from "../pages/courses/AddSection";
import Courses from "../pages/courses/Courses";
import DetailCourse from "../pages/courses/DetailCourse";
import EditMaterial from "../pages/courses/EditMaterial";
import EditSection from "../pages/courses/EditSection";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export default function SetupRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/login" element={<SignIn />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/courses" element={<Courses />} />
            <Route path="/detail-course/:id" element={<DetailCourse />} />
            <Route path="/add-course" element={<AddCourses />} />
            <Route path="/add-section/:id" element={<AddSection />} />
            <Route path="/edit-section/" element={<EditSection />} />
            <Route path="/add-material/" element={<AddMaterial />} />
            <Route path="/edit-material/" element={<EditMaterial />} />
            <Route path="/add-assignment/:id" element={<AddAssignment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
