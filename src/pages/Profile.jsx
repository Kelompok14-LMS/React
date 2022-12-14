import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  useGetProfileQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "../store/features/profileSlice";
import { useEffect } from "react";
import { fileReader } from "../utils/fileReader";
import DefaultAvatar from "../assets/img/default-avatar.png";
import Swal from "sweetalert2";
import moment from "moment/moment";

export default function Profile() {
  const { data: profile, isSuccess } = useGetProfileQuery();

  const [profilePicture, setProfilePicture] = useState();
  const [previewProfilePicture, setPreviewProfilePicture] = useState();
  const [fullname, setFullname] = useState("");
  const [jobs, setJobs] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setFullname(profile?.fullname);
      setJobs(profile?.jobs);
      setEmail(profile?.email);
      setPhone(profile?.phone);
      setGender(profile?.gender);
      setBirthPlace(profile?.birth_place);
      setBirthDate(moment(new Date(profile?.birth_date).toISOString()).format("YYYY-MM-DD"));
    }
  }, [
    isSuccess,
    profile?.birth_date,
    profile?.birth_place,
    profile?.email,
    profile?.fullname,
    profile?.gender,
    profile?.jobs,
    profile?.phone,
  ]);

  const onProfilePictureChange = (e) => setProfilePicture(e.target.files[0]);
  const onFullnameChange = (e) => setFullname(e.target.value);
  const onJobsChange = (e) => setJobs(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);
  const onGenderChange = (e) => setGender(e.target.value);
  const onBirthPlaceChange = (e) => setBirthPlace(e.target.value);
  const onBirthDateChange = (e) => setBirthDate(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);

  const [updateProfile] = useUpdateProfileMutation();

  const updateProfilePicture = profilePicture ? profilePicture : profile?.profile_picture;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("user_id", profile?.user_id);
    payload.append("profile_picture", updateProfilePicture);
    payload.append("fullname", fullname);
    payload.append("jobs", jobs);
    payload.append("email", email);
    payload.append("phone", phone);
    payload.append("gender", gender);
    payload.append("birth_place", birthPlace);
    payload.append("birth_date", birthDate);
    payload.append("address", address);

    await updateProfile({ id: profile?.id, data: payload })
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Profil berhasil diperbarui",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Data tidak boleh ada yang kosong!",
          confirmButtonColor: "#3085d6",
        });
      });
  };

  useEffect(() => {
    fileReader(setPreviewProfilePicture, profilePicture);
  }, [profilePicture]);

  const hiddenFileInput = useRef();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  // password
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onOldPasswordChange = (e) => setOldPassword(e.target.value);
  const onNewPasswordChange = (e) => setNewPassword(e.target.value);

  const [updatePassword] = useUpdatePasswordMutation();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    await updatePassword({
      user_id: profile?.user_id,
      old_password: oldPassword,
      new_password: newPassword,
    })
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Password berhasil diperbarui",
          showConfirmButton: false,
          timer: 1500,
        });
        setOldPassword("");
        setNewPassword("");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Data tidak boleh ada yang kosong!",
          confirmButtonColor: "#3085d6",
        });
      });
  };

  return (
    <div className="my-5">
      <Row className="gap-2 gy-2">
        <Col>
          <div>
            <div className="bg-body p-4 rounded mb-4 text-center body-profile">
              <div className="image-profile mx-auto">
                {previewProfilePicture && (
                  <img
                    src={previewProfilePicture}
                    alt=""
                    className="img-fluid rounded-circle mb-4"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                {!previewProfilePicture && (
                  <img
                    src={profile?.profile_picture ? profile?.profile_picture : DefaultAvatar}
                    alt=""
                    className="img-fluid rounded-circle mb-4"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                <h5>{profile?.fullname}</h5>
                <p className="fs-5 text-primary">{profile?.email}</p>
              </div>
            </div>
            <div className="bg-body p-4 rounded">
              <Form onSubmit={handleUpdatePassword}>
                <h5>Ubah Kata Sandi</h5>
                <Form.Group className="my-3">
                  <Form.Label>Kata Sandi Lama</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan kata sandi lama"
                    value={oldPassword}
                    onChange={onOldPasswordChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Kata Sandi Baru</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan kata sandi baru"
                    value={newPassword}
                    onChange={onNewPasswordChange}
                  />
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
            <Form onSubmit={handleUpdateProfile}>
              <h4>Detail Profil</h4>
              <div className="d-flex align-items-center my-3">
                <div style={{ width: "100px", height: "100px" }}>
                  {previewProfilePicture && (
                    <img
                      src={previewProfilePicture}
                      alt=""
                      className="rounded-circle"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                  {!previewProfilePicture && (
                    <img
                      src={profile?.profile_picture ? profile?.profile_picture : DefaultAvatar}
                      alt=""
                      className="rounded-circle"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <Form.Group className="mb-3 text-center ms-4">
                  <Form.Control
                    type="file"
                    className="d-none"
                    ref={hiddenFileInput}
                    onChange={onProfilePictureChange}
                  />
                  <Button variant="warning" onClick={handleClick}>
                    Unggah Foto
                  </Button>
                </Form.Group>
              </div>

              <p style={{ fontSize: "13px" }}>
                Foto profil disarankan memiliki rasio 1 : 1 atau berukuran tidak lebih dari 2MB
              </p>

              <Form.Group className="mb-3">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" value={fullname} onChange={onFullnameChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bidang yang Dikuasai</Form.Label>
                <Form.Control type="text" value={jobs} onChange={onJobsChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" value={email} onChange={onEmailChange} />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control type="number" value={phone} onChange={onPhoneChange} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select value={gender} onChange={onGenderChange}>
                    <option>Pilih disini</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Tempat Lahir</Form.Label>
                  <Form.Control type="text" value={birthPlace} onChange={onBirthPlaceChange} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="date" value={birthDate} onChange={onBirthDateChange} />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" value={address} onChange={onAddressChange} />
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
