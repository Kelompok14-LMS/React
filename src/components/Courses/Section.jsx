import React from "react";
import { Accordion, Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <>
      <Accordion className="mb-3">
        <Accordion.Item eventKey="5">
          <Accordion.Header>Section 1</Accordion.Header>
          <Accordion.Body>
            <div className="text-end">
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-dark py-0 px-1" id="dropdown-basic">
                  <BsThreeDots size="25px" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/add-section">
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Hapus</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <h6>Video Materi</h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Accordion.Body>
          <Accordion.Body>
            <h6>Slide Materi</h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Accordion.Body>
          <Accordion.Body>
            <h6>Assignment</h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Section 2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
