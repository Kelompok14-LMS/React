import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  signOut(navigate) {
    Cookies.remove("token");
    navigate("/login");
  },
  storeUserInfoToCookie(data) {
    if (!data.token) return null;
    const { token } = data;
    Cookies.set("token", token);
    return data;
  },
};

export default Auth;
