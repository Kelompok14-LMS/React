import React from "react";
import { Accordion, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteMaterialByIdMutation,
  useDeleteMaterialByModuleMutation,
  useDeleteModuleMutation,
} from "../../store/features/courses/courseSlice";
import { BsGearFill } from "react-icons/bs";
import { useDeleteAssignmentMutation } from "../../store/features/courses/assignmentSlice";

export default function Section({ id, modules, assignment }) {
  const navigate = useNavigate();

  const [deleteModule] = useDeleteModuleMutation();
  const [deleteMaterialByModule] = useDeleteMaterialByModuleMutation();
  const [deleteMaterialById] = useDeleteMaterialByIdMutation();

  const handleDeleteModule = (module_id) =>
    Swal.fire({
      title: "Yakin untuk menghapus?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteModule(module_id);
        deleteMaterialByModule(module_id);
        Swal.fire({
          title: "Terhapus!",
          text: "File telah terhapus!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  const handleDeleteMaterial = (material_id) =>
    Swal.fire({
      title: "Yakin untuk menghapus?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMaterialById(material_id);
        Swal.fire({
          title: "Terhapus!",
          text: "File telah terhapus!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  const [deleteAssignment] = useDeleteAssignmentMutation();

  const handleDeleteAssignment = (assignment_id) =>
    Swal.fire({
      title: "Yakin untuk menghapus?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteAssignment(assignment_id)
          .unwrap()
          .then(() => {
            Swal.fire({
              title: "Terhapus!",
              text: "File telah terhapus!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.reload();
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Sepertinya terjadi kesalahan",
            });
          });
      }
    });

  return (
    <div className="section">
      {modules?.map((item) => (
        <Accordion className="mb-3" key={item.module_id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{item.title}</Accordion.Header>

            <Accordion.Body>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>Deskripsi Section</h6>
                  <Dropdown align="end">
                    <Dropdown.Toggle size="sm" variant="outline-warning border-dark">
                      <BsGearFill />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() =>
                          navigate(`/edit-section`, {
                            state: {
                              course_id: id,
                              module_id: item.module_id,
                              title: item.title,
                              description: item.description,
                            },
                          })
                        }
                      >
                        Edit Section
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteModule(item.module_id)}>Hapus Section</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <p>{item.description}</p>

                <Button
                  variant="warning"
                  onClick={() =>
                    navigate(`/add-material`, {
                      state: {
                        course_id: id,
                        module_id: item.module_id,
                      },
                    })
                  }
                >
                  + Tambah Materi
                </Button>
              </div>

              {item?.materials && <hr />}

              {item?.materials?.map((item) => (
                <div key={item.material_id}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>{item.title}</h6>
                      <Dropdown align="end">
                        <Dropdown.Toggle size="sm" variant="outline-warning border-dark">
                          <BsGearFill />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() =>
                              navigate(`/edit-material`, {
                                state: {
                                  course_id: id,
                                  module_id: item.module_id,
                                  material_id: item.material_id,
                                  title: item.title,
                                  description: item.description,
                                  video: item.url,
                                },
                              })
                            }
                          >
                            Edit Materi
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDeleteMaterial(item.material_id)}>
                            Hapus Materi
                          </Dropdown.Item>
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

      {assignment?.id && (
        <Accordion className="mb-3" key={assignment?.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Assignment</Accordion.Header>
            <Accordion.Body>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>{assignment?.title}</h6>
                  <Dropdown align="end">
                    <Dropdown.Toggle size="sm" variant="outline-warning border-dark">
                      <BsGearFill />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() =>
                          navigate(`/edit-assignment`, {
                            state: {
                              course_id: assignment?.course_id,
                              assignment_id: assignment?.id,
                              title: assignment?.title,
                              description: assignment?.description,
                            },
                          })
                        }
                      >
                        Edit Assignment
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteAssignment(assignment?.id)}>
                        Hapus Assignment
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <p>{assignment?.description}</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
}
