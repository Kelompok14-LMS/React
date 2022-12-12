import React from "react";
import { Accordion, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Section({ id, modules }) {
  const handleDelete = () =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }
    });

  return (
    <>
      {modules?.map((item, index) => (
        <Accordion className="mb-3" key={index}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{item.title}</Accordion.Header>

            <Accordion.Body>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>Deskripsi Section</h6>
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="outline-dark">Pengaturan</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to={`/add-section/${id}`}>
                        Edit Section
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete()}>Hapus Section</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>

                <Button variant="warning" as={Link} to={`/add-material/${id}`}>
                  + Tambah Materi
                </Button>
              </div>

              {item?.materials?.map((item, index) => (
                <div key={index}>
                  <hr />
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>{item.title}</h6>
                      <Dropdown align="end">
                        <Dropdown.Toggle variant="outline-dark">Pengaturan</Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to={`/add-material/${id}`}>
                            Edit Materi
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDelete()}>Hapus Materi</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <video width="100%" height="500px" controls className="my-3 rounded">
                      <source src={item.url} />
                    </video>

                    <h6>Deskripsi Materi</h6>
                    <p>{item.description}</p>
                    <hr />
                  </div>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Assignment</Accordion.Header>
          <Accordion.Body>
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>Resume Golang Currency</h6>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-dark">Pengaturan</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={`/add-assignment/${id}`}>
                      Edit Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete()}>Hapus Assignment</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
