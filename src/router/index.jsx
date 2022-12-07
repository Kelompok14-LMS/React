import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import AddCourses from "../pages/courses/AddCourse";
import AddModule from "../pages/courses/AddModule";
import AddSection from "../pages/courses/AddSection";
import Courses from "../pages/courses/Courses";
import DetailCourse from "../pages/courses/DetailCourse";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export default function SetupRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/detail-course" element={<DetailCourse />} />
            <Route path="/add-course" element={<AddCourses />} />
            <Route path="/add-section" element={<AddSection />} />
            <Route path="/add-module" element={<AddModule />} />
          </Route>
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
