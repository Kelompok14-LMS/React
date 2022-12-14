import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/landingPage/Layout";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoute";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
