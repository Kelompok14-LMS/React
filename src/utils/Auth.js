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
    if (!data.access) return null;
    const { access } = data;
    const accessExpires = new Date(access.expires);
    Cookies.set("token", access.token, { expires: accessExpires });
    return data;
  },
};

export default Auth;
