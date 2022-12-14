import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/landingPage/Layout";
import LandingPage from "../pages/LandingPage";
import Profile from "../pages/Profile";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import AddAssignment from "../pages/courses/AddAssignment";
import AddCourses from "../pages/courses/AddCourse";
import AddMaterial from "../pages/courses/AddMaterial";
import AddSection from "../pages/courses/AddSection";
import Assignments from "../pages/assignments/Assignments";
import DetailCourse from "../pages/courses/DetailCourse";
import EditAssignment from "../pages/courses/EditAssignment";
import EditMaterial from "../pages/courses/EditMaterial";
import EditSection from "../pages/courses/EditSection";
import Mentees from "../pages/mentees/Mentees";
import DetailMentees from "../pages/mentees/DetailMentees";
import DetailAssignments from "../pages/assignments/DetailAssignments";
import ListCourses from "../pages/courses/ListCourses";

export default function SetupRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<ListCourses />} />
            <Route path="/detail-course/:id" element={<DetailCourse />} />
            <Route path="/add-course" element={<AddCourses />} />
            <Route path="/add-section/:id" element={<AddSection />} />
            <Route path="/edit-section/" element={<EditSection />} />
            <Route path="/add-material/" element={<AddMaterial />} />
            <Route path="/edit-material/" element={<EditMaterial />} />
            <Route path="/add-assignment/:id" element={<AddAssignment />} />
            <Route path="/edit-assignment" element={<EditAssignment />} />
            <Route path="/mentees" element={<Mentees />} />
            <Route path="/detailmentees" element={<DetailMentees />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/detailAssignments" element={<DetailAssignments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
