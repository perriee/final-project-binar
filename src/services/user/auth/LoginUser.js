// Service Login User
import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http from "../../../utils/http";

export const reduxLoginUser = async (input) => {
  return await http.post(API_ENDPOINT.USER_LOGIN, input);
};

export const reduxGoogleLoginUser = async () => {
  return await http.get(API_ENDPOINT.GOOGLE);
};
