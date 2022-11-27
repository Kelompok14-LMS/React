import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Share/Layout";
import AddCoursesPage from "../pages/AddCoursesPage";
import CoursesPage from "../pages/CoursesPage";
import LandingPage from "../pages/LandingPage";
import MenteesPage from "../pages/MenteesPage";
import ProfilePage from "../pages/ProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export default function SetupRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/add-course" element={<AddCoursesPage />} />
          <Route path="/mentees" element={<MenteesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
