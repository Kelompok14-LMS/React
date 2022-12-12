import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import elipseImage from "../../assets/img/Ellipse-3.png";

export default function DetailAssignments() {
  return (
    <Container>
      <div className="d-flex my-4">
        <h2 className="mx-outo text-white">Digital Marketing 101</h2>
      </div>

        <div className="d-flex mt-4 align-item-center shadow-lg bg-body rounded-2 mb-1 py-3 px-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center px-26 py-8">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                  src={elipseImage}
                ></img>
              </div>
              <h4 className="mb-1">
                <small style={{ fontSize: 15 }}>
                  Xhaxhya Rena Benink Philia Nan Jingga
                </small>
              </h4>
            </div>
          </div>
          <Button
            variant="warning w-7 py-3 px-3"
            type="submit"
            size="md"
            as={Link}
            to="/detailAssignments"
          >
            Detail Assignment
          </Button>
        </div>
    </Container>
  );
}
