import { showErrorToast } from "../../../helper/ToastHelper";
import { reduxGetUser } from "../../../services/user/auth/GetUser";
import { reduxUpdateProfile } from "../../../services/user/auth/UpdateProfile";
import { setUserProfile } from "../../reducer/auth/loginSlice";

export const getUserProfileAction = () => (dispatch) => {
  return reduxGetUser()
    .then((result) => {
      console.log(
        "result -> reduxGetUserProfile",
        result.data.data.user.userProfile,
      );
      console.log(
        "result -> reduxGetUserProfile",
        result.data.data.user,
      );
      dispatch(setUserProfile(result.data.data.user.userProfile));
      return true;
    })
    .catch((err) => {
      console.error("reduxGetUser", err);
    });
};

export const putUpdateProfile = (formData) => async (dispatch) => {
  return reduxUpdateProfile(formData)
    .then((result) => {
      console.log("result -> reduxUpdateProfile", result);
      dispatch(setUserProfile(result.data.data.newUserProfile));
      return true;
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status >= 400 && err.response.status <= 500) {
          showErrorToast(err.response.data.message);
        } else {
          console.error("unexpected Error", err);
        }
      }
    });
};
