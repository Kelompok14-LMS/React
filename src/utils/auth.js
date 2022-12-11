import Cookies from "js-cookie"

const Auth = {
    setLogin: (token) => {
        console.log(token)
        Cookies.set("token", token)
    },
    cekLogin: () => {
        console.log(Cookies.get("token"))
        return Cookies.get("token")
    },
    logout: () => {
        Cookies.remove("token")
    }
}

export const {setLogin, cekLogin} = Auth