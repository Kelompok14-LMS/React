import React, { useState, useEffect } from "react";
import { Container, Button, Table, Form } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import elipseImage from "../../assets/img/Ellipse-3.png";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { dataAssignments } from "../../dummy-data/data-assignments";

export default function DetailAssignments() {
  const location = useLocation();
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [dummyData, setdummyData] = useState(dataAssignments);

  // useEffect(() => {
  //   console.log(location.state.course_id);
  // }, [location]);
  

  const handleValueChange = (e, index) => {
    setdummyData(prev => {
      const newData = [...prev]
      newData[index].value = e.target.value
      return newData
    })
  }

  return (
    <Container>
      <div className="my-5">
        <div className="d-flex my-3">
          <h3 className="mx-outo text-white">
            <Link 
              to={{
                pathname: "/assignments",
              }}
              style={{ color: "white", textDecoration: "none" }}
              
            >Daftar Assignment / </Link>
            <span style={{ color: "#E4B548" }}>{location.state.title}</span>
          </h3>
        </div>

        <div style={{ flex: 1 }} className=" shadow-lg rounded-2 bg-white">
          <Table border hover>
            <tbody>
              {dummyData.map((data, index) => (
                <div
                  key={index}
                  style={{ marginBottom: 12 }}
                  className="mt-2 px-3"
                >
                  <div
                    style={{
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                      borderBottomColor: "#bdc3c7",
                    }}
                    className="d-flex justify-content-between align-items-center "
                  >
                    <div
                      style={{ flex: 1 }}
                      className="d-flex align-items-center"
                    >
                      <img
                        className="rounded-circle mb-5"
                        style={{
                          width: "40px",
                          height: "40px",
                          marginRight: "10px",
                        }}
                        src={elipseImage}
                      ></img>
                      <div style={{ flex: 1 }} className="pt-0">
                        <div
                          className="mb-3"
                          style={{
                            width: "284px",
                            height: "19px",
                            fontSize: "15px",
                          }}
                        >
                          <strong>{data.name}</strong>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            style={{
                              backgroundColor: "#E4B548",
                              borderColor: "#E4B548",
                              color: "black",
                            }}
                          >
                            Buka File
                          </Button>
                          <div className="d-flex">
                            <div
                              style={{ marginRight: 58 }}
                              className="d-flex align-items-center "
                            >
                              <p className="mb-0">Nilai</p>

                              <Form.Group
                                style={{
                                  borderStyle: "solid",
                                  borderWidth: 1,
                                  borderColor: !data.value
                                    ? "#E4B548"
                                    : "black",
                                  width: 40,
                                  height: 40,
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "row",
                                  padding: 0,
                                }}
                                className="rounded mx-2 "
                              >
                                <Form.Control
                                  maxLength={3}
                                  value={data.value > 100 ? 100 : data.value}
                                  onChange={(e) => {
                                    handleValueChange(e, index);
                                  }}
                                  className="px-0 text-center"
                                />
                              </Form.Group>
                              <p className="mb-0">/100</p>
                            </div>
                            <Button
                              variant="outline-dark"
                              style={{ color: "#E4B548" }}
                            >
                              Simpan
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </tbody>
          </Table>
          <div style={{ height: 2, backgroundColor: "black" }} />
          <div
            style={{
              paddingBottom: 17.5,
              marginLeft: 26,
              marginRight: 26,
              marginTop: 17.5,
            }}
            className="d-flex px-3 mb-3 justify-content-between align-items-center"
          >
            <p style={{ fontSize: 18, color: "#8896A6" }} className="mb-0">
              1 - 10 of 30 mentees
            </p>
            <p style={{ fontSize: 16, color: "#8896A6" }} className="mb-0">
              1 of 3 pages
            </p>

            <div className="d-flex">
              <AiOutlineLeft
                style={{
                  cursor: "pointer",
                  color: hoverLeft ? "gray" : "#E4B548",
                }}
                size={26.85}
                onClick={() => {
                  console.log("Holla komostas");
                }}
                onMouseEnter={() => {
                  setHoverLeft(true);
                }}
                onMouseLeave={() => {
                  setHoverLeft(false);
                }}
              />
              <div style={{ width: 18 }} />
              <AiOutlineRight
                style={{
                  cursor: "pointer",
                  color: hoverRight ? "gray" : "#E4B548",
                }}
                size={26.85}
                onClick={() => {
                  console.log("Holla komostas");
                }}
                onMouseEnter={() => {
                  setHoverRight(true);
                }}
                onMouseLeave={() => {
                  setHoverRight(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
