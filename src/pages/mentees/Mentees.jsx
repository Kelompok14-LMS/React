import React, { useRef } from "react";
import { Button, Container, Accordion, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import yasminImage from "../../assets/img/yasmin-image.png";
import feryImage from "../../assets/img/fery-image.png";
import ritaImage from "../../assets/img/rita-image.png"; 
import zacharyImage from "../../assets/img/zachary-image.png"; 

export default function Mentees() {
  return (
    <Container>
      <div className="d-flex my-4">
        <h2 className="mx-outo text-white">Daftar Mentees</h2>
      </div>
      <div className=" align-item-center shadow-lg bg-body rounded-3 mb-5 py-4 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle"
              style={{ width: "38px", height: "38px", marginRight: "16px" }}
              src={yasminImage}
            ></img>
            <h4 className="mb-0">Yasmin Lemere</h4>
          </div>
          <Button variant="icon-white" size="lg">
            <FaTrashAlt />
          </Button>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Digital Marketing 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1" type="text" >90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">85</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 4</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 5</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 6</p>
                          {/* <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div> */}
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 7</p>
                          {/* <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div> */}
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 8</p>
                          {/* <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div> */}
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 9</p>
                          {/* <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div> */}
                      </div>
                    </tr>

                    {/* <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 10</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr> */}

                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Programming 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">80</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">85</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    {/* <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 4</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 5</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 6</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 7</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 8</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 9</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 10</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr> */}
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className=" align-item-center shadow-lg bg-body rounded-3 mb-5 py-4 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle"
              style={{ width: "38px", height: "38px", marginRight: "16px" }}
              src={feryImage}
            ></img>
            <h4 className="mb-0">Fery Sugianto</h4>
          </div>
          <Button variant="icon-white" size="lg">
            <FaTrashAlt />
          </Button>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Programming 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 4</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 5</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 6</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 7</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 8</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 9</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 10</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Mathematics 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          {/* <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div> */}
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Digital Marketing 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className=" align-item-center shadow-lg bg-body rounded-3 mb-5 py-4 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle"
              style={{ width: "38px", height: "38px", marginRight: "16px" }}
              src={ritaImage}
            ></img>
            <h4 className="mb-0">Rita Flemming</h4>
          </div>
          <Button variant="icon-white" size="lg">
            <FaTrashAlt />
          </Button>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Programming 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 4</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 5</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 6</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 7</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 8</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 9</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 10</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Mathematics 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr> */}
                      {/* <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div> */}
              {/* </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div> */}
        {/* <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Digital Marketing 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div> */}
      </div>

      <div className=" align-item-center shadow-lg bg-body rounded-3 mb-5 py-4 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle"
              style={{ width: "38px", height: "38px", marginRight: "16px" }}
              src={zacharyImage}
            ></img>
            <h4 className="mb-0">Zachary Honda</h4>
          </div>
          <Button variant="icon-white" size="lg">
            <FaTrashAlt />
          </Button>
        </div>
        <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Programming 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">85</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    {/* <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 4</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 5</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 6</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 7</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 8</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 9</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 10</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr> */}
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Mathematics 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr> */}
                      {/* <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 3</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div> */}
              {/* </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div> */}
        {/* <div className="my-4">
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Digital Marketing 101</Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <tbody>
                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 1</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-dark">
                              Buka
                            </Button>
                            <Button variant="outline-dark">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-dark rounded mx-2">
                            <p className="mx-2 my-1">90</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>

                    <tr>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Taks 2</p>
                          <div className="d-flex mx-5 justify-content-between">
                            <Button className="mx-5" variant="outline-warning">
                              Buka
                            </Button>
                            <Button variant="outline-warning">Download</Button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="mb-0">Nilai</p>
                          <span className="border border-warning rounded mx-2">
                            <p className="mx-2 my-1">--</p>
                          </span>
                          <p className="mb-0">/100</p>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </Table>
                <div className="text-center">
                  <Button variant="warning w-50" type="submit">
                    Simpan perubahan
                  </Button>
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div> */}
      </div>
    </Container>
  );
}
