import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ prev1, link1, prev2, link2, current }) {
  const breadcrumb2 = prev2 || link2;

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-5">
            <Link to={`${link1}`}>{prev1}</Link>
          </li>
          {breadcrumb2 && (
            <li className="breadcrumb-item fs-5">
              <Link to={`${link2}`}>{prev2}</Link>
            </li>
          )}
          <li className="breadcrumb-item active fs-5 text-warning">{current}</li>
        </ol>
      </nav>
    </div>
  );
}
