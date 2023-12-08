import { showErrorToast } from "../../../helper/ToastHelper";
import { reduxForgetPass } from "../../../services/user/auth/ForgetPass";
import { reduxUpdatePass } from "../../../services/user/auth/UpdatePass";
import { setForget, setUpdate } from "../../reducer/auth/Password";

export const getForgetPass = (email) => async (dispatch) => {
  return reduxForgetPass(email).then((result) => {
    dispatch(setForget(result.data.data));
    return true
    }).catch((err) => {
      if (err.response) {
        if (err.response.status >= 400 && err.response.status <= 500) {
          showErrorToast(err.response.data.message);
          console.log(err.response.status = 500, "error")
        } else {
          console.error("unexpected Error", err)
        }
      }
    });
  }

export const getUpdatePass = (input, token) => async (dispatch) => {
  reduxUpdatePass(input, token).then((result) => {
    console.log("result -> reduxUpdatePass", result)
    dispatch(setUpdate(result.data.data))
    return result
  }).catch((err)=>{
    if (err.response) {
      if (err.response.status >= 400 && err.response.status <= 500) {
        showErrorToast(err.response.data.message);
      } else {
        console.error("unexpected Error", err)
      }
    }
  })
}