import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
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
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
