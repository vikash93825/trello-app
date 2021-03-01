import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from "./actionType";
import axios from "axios";

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload) => {
  console.log(payload);
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const loginOut = (payload) => ({
  type: LOG_OUT,
  payload,
});

export const loginFetch = (payload) => {
  return (dispatch) => {
    dispatch(loginRequest);
    return axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: {
        email: payload.email,
        password: payload.password,
      },
    })
      .then((res) => {
        return dispatch(loginSuccess(res.data.token));
      })
      .catch((err) => dispatch(loginFailure(err)));
  };
};
