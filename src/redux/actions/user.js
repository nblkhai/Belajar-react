import { API_URL } from "../../constants/API";
import Axios from "axios";

export const usernameInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text,
  };
};

export const loginHandler = (userData) => {
  return (dispatch) => {
    const { username, password } = userData;

    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0],
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username / Password Salah!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
