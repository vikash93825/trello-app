import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_FAILURE,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_FAILURE
} from "./actionType";

export const initState = {
  auth: false,
  loading: false,
  error: false,
  todo: [],
};
export const todoReducer = (state = initState, { type, payload }) => {
  //console.log(type,payload)
  switch (type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      //console.log("dhsjd",payload)
      return {
        ...state,
        auth: true,
        todo: payload,
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: true,
      };
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: true,
      };
    case EDIT_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case EDIT_TODO_FAILURE:
      return {
        ...state,
        error: true,
      };
      case DELETE_TODO_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_TODO_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case DELETE_TODO_FAILURE:
        return {
          ...state,
          error: true,
        };
    default:
      return state;
  }
};
