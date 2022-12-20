import Swal from "sweetalert2";

const signInSuccess = () => {
  Swal.fire({
    icon: "success",
    title: "Login Berhasil",
    text: "Selamat Datang",
    showConfirmButton: false,
    timer: 1500,
  });
};

const signInError = (err) => {
  Swal.fire({
    title: "Login Gagal",
    text: `${err?.data?.message}`,
    icon: "error",
  });
};

const signUpSuccess = (navigate) => {
  Swal.fire({
    icon: "success",
    title: "Daftar Berhasil",
    text: "Silahkan Login",
    showConfirmButton: false,
    timer: 1500,
  });
  navigate("/login");
};

const signUpError = (err) => {
  Swal.fire({
    title: "Registrasi Gagal",
    text: `${err?.data?.message}`,
    icon: "error",
  });
};

const addSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: "Berhasil!",
    text: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

const addError = () => {
  Swal.fire({
    icon: "error",
    title: "Gagal!",
    text: "Data tidak boleh ada yang kosong!",
    confirmButtonColor: "#3085d6",
  });
};

const updateSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: "Berhasil!",
    text: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

const updateError = () => {
  Swal.fire({
    icon: "error",
    title: "Gagal!",
    text: "Data tidak boleh ada yang kosong!",
    confirmButtonColor: "#3085d6",
  });
};

const Alert = {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
  addSuccess,
  addError,
  updateSuccess,
  updateError,
};

export default Alert;
