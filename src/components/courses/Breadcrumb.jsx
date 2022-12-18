import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ prev1, link1, prev2, link2, prev3, link3, current }) {
  const breadcrumb2 = prev2 || link2;
  const breadcrumb3 = prev3 || link3;

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-3 fw-semibold">
            <Link to={`${link1}`}>{prev1}</Link>
          </li>
          {breadcrumb2 && (
            <li className="breadcrumb-item fs-3 fw-semibold">
              <Link to={`${link2}`}>{prev2}</Link>
            </li>
          )}
          {breadcrumb3 && (
            <li className="breadcrumb-item fs-3 fw-semibold">
              <Link to={`${link3}`}>{prev3}</Link>
            </li>
          )}
          <li className="breadcrumb-item active fs-3 fw-semibold text-warning">{current}</li>
        </ol>
      </nav>
    </div>
  );
}
