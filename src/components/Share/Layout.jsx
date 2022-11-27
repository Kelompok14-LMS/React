import React from "react";
import TopBarLandingPage from "./TopBarLandingPage";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <TopBarLandingPage />
      <Outlet />
    </div>
  );
}
