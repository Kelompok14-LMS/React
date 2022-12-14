import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ProfileImg from "../assets/img/img-profile.png";

export default function Profile() {
  return (
    <div className="my-5">
      <Row className="gap-2 gy-2">
        <Col>
          <div>
            <div className="bg-body p-4 rounded mb-4 text-center body-profile">
              <div className="image-profile mx-auto">
                <img
                  src={ProfileImg}
                  alt=""
                  className="img-fluid rounded-circle mb-4"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <h5>Mentor</h5>
                <p className="fs-5 text-primary">mentor@gmail.com</p>
              </div>
            </div>
            <div className="bg-body p-4 rounded">
              <Form>
                <h5>Ubah Kata Sandi</h5>
                <Form.Group className="my-3">
                  <Form.Label>Kata Sandi Lama</Form.Label>
                  <Form.Control type="password" placeholder="Masukkan kata sandi lama" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Kata Sandi Baru</Form.Label>
                  <Form.Control type="password" placeholder="Masukkan kata sandi baru" />
                </Form.Group>
                <div className="text-end">
                  <Button variant="warning" type="submit">
                    Ubah
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col>
          <div className="bg-body p-4 rounded">
            <Form>
              <h4>Detail Profil</h4>
              <div className="d-flex align-items-center my-3">
                <div style={{ width: "100px", height: "100px" }}>
                  <img
                    src={ProfileImg}
                    alt=""
                    className="rounded-circle"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Form.Group className="mb-3 text-center ms-4">
                  <Form.Control type="file" />
                </Form.Group>
              </div>

              <p style={{ fontSize: "13px" }}>
                Foto profil disarankan memiliki rasio 1 : 1 atau berukuran tidak lebih dari 2MB
              </p>

              <Form.Group className="mb-3">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bidang yang Dikuasai</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select>
                    <option>Pilih disini</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Tempat Lahir</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <div className="text-end">
                <Button variant="warning" type="submit">
                  Ubah
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
