import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
