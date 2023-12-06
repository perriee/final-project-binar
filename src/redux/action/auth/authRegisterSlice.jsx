import { CookiesKeys, CookieStorage } from "../../../utils/cookie";
import { setToken } from "../../reducer/auth/Login";
import { reduxRegisterUser } from "../../../services/user/auth/RegisterUser";
import toast from "react-hot-toast";

export const RegisterUser = (input) => async (dispatch) => {
    return reduxRegisterUser(input).then((result)=>{
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token))
      return true
      }).catch((err)=>{
        if (err.response) {
          if (err.response.status >= 400 && err.response.status <= 500) {
            toast.error(err.response.data.message);
          } else {
            console.error("unexpected Error", err)
          }
        }
      })
  }