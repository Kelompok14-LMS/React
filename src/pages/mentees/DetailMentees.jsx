import React, { useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import elipseImage from "../../assets/img/Ellipse-3.png";
import { dataMentees } from "../../dummy-data/data-mentees";
import Swal from "sweetalert2";

export default function () {
  const [datas, setDatas] = useState(dataMentees);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const swallAlert = () => {
    Swal.fire({
      title: "Yakin hapus?",
      text: "Anda tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D6EFD",
      cancelButtonColor: "#DC3545",
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Terhapus!",
          text: "Mentees lu dah ke hapus",
          icon: "success",
          confirmButtonColor: "#0D6EFD",
          confirmButtonText: "Menyebalkan",
        });
      }
    });
  }

  return (
    <Container>
      <div className="d-flex mt-4 align-item-center shadow-lg bg-body rounded-top mb-1 py-3 px-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center px-26 py-8">
            <h4 className="mb-0">
              Semua Mentees |{" "}
              <small style={{ fontSize: 15 }}>{datas.length} Totals</small>
            </h4>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} className=" shadow-lg rounded-bottom bg-white">
        <Table border hover>
          <tbody>
            <div style={{ marginBottom: 12 }} className="mt-2 px-3">
              {datas.map((data) => (
                <div
                  style={{
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid",
                    borderBottomColor: "#bdc3c7",
                  }}
                  className="d-flex justify-content-between align-items-center "
                >
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
                    <div className="pt-2">
                      <h5 className="mb-1">
                        {data.name}
                        <div className="mb-0 mt-0">
                          <small style={{ fontSize: 13, color: "#8896A6" }}>
                            {data.email}
                          </small>
                        </div>
                      </h5>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button
                      variant="warning"
                      type="submit"
                      onClick={swallAlert}
                    >
                      <FaTrashAlt className="pe-1 mb-1" />
                      Hapus Akses
                    </Button>
                  </div>
                </div>
              ))}
            </div>
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
                console.log("Hello Asu");
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
                console.log("Hello Asu");
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
    </Container>
  );
}
