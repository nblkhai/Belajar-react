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

export const registerHandler = (userData) => {
  return (dispatch) => {
    const { username, password, repPassword, fullName, role } = userData;
    Axios.get(`${API_URL}/users`, {
      params: {
        username,
      },
    })
      .then((res) => {
        if (res.data.length == 0) {
          if (password == repPassword) {
            Axios.post(`${API_URL}/users`, {
              username,
              password,
              fullName,
              role,
            })
              .then((res) => {
                alert("BISAA!");
                dispatch({
                  type: "ON_REGISTER_SUCCESS",
                  payload: res.data,
                });
              })
              .catch((err) => {
                dispatch({
                  type: "ON_REGISTER_FAIL",
                  payload: "Username Sudah Terpakai",
                });
              });
          } else {
            alert("gakbisa!");
            dispatch({
              type: "ON_REGISTER_FAIL",
              payload: "Username Sudah Terpakai",
            });
          }
        } else {
          dispatch({
            type: "ON_REGISTER_FAIL",
            payload: "ISI SEMUA INPUTAN YA!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const userKeepLogin = (userData) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/users`, {
      params: {
        id: userData.id,
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

export const logoutHandler = (userData) => {
  return {
    type: "ON_CHANGE_LOGOUT",
    payload: userData,
  };
};
