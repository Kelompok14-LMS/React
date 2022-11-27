import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../utils/Auth";

export default function PrivateRoute() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
