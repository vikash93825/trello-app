import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./actionType";

export const initState = {
  isAuth: false,
  isLoading: false,
  error: false,
  token: "",
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: true,
      };
    case LOG_OUT:
        return {
          ...state,
          isAuth: false,
        };
    default:
      return state;
  }
};
