import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_FAILURE
} from "./actionType";
import axios from "axios";

export const fetchRequest = (payload) => ({
  type: FETCH_REQUEST,
  payload,
});

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchFailure = (payload) => ({
  type: FETCH_FAILURE,
  payload,
});

export const getTodoData = (payload) => {
  return (dispatch) => {
    dispatch(fetchRequest);
    return axios({
      url: "https://trello-task-mocker.herokuapp.com/todo",
    })
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => dispatch(fetchFailure(err)));
  };
};

//CREATE DATA

export const addTodoRequest = (payload) => ({
  type: ADD_TODO_REQUEST,
  payload,
});

export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});

export const addTodoFailure = (payload) => ({
  type: ADD_TODO_FAILURE,
  payload,
});

export const addTodoTask = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  return axios({
    method: "post",
    url: "https://trello-task-mocker.herokuapp.com/todo",
    data: payload,
  })
    .then((res) => {
      dispatch(addTodoSuccess(res.data));
    })
    .catch((err) => dispatch(addTodoFailure(err)));
};

//Edit data

export const editTodoRequest = (payload) => ({
  type: EDIT_TODO_REQUEST,
  payload,
});

export const editTodoSuccess = (payload) => ({
  type: EDIT_TODO_SUCCESS,
  payload,
});

export const editTodoFailure = (payload) => ({
  type: EDIT_TODO_FAILURE,
  payload,
});

export const editTodoTask = (payload, taskId) => (dispatch) => {
  console.log(payload, taskId);
  dispatch(editTodoRequest());
  return axios({
    method: "patch",
    url: "https://trello-task-mocker.herokuapp.com/todo/" + taskId,
    data: payload,
  })
    .then((res) => {
      dispatch(editTodoSuccess({ message: "Edit successfully" }));
    })
    .catch((err) => dispatch(editTodoFailure(err)));
};

//DELETE DATA

export const deleteTodoRequest = (payload) => ({
  type: DELETE_TODO_REQUEST,
  payload,
});

export const deleteTodoSuccess = (payload) => ({
  type: DELETE_TODO_SUCCESS,
  payload,
});

export const deleteTodoFailure = (payload) => ({
  type: DELETE_TODO_FAILURE,
  payload,
});

export const deleteTodoTask = (payload) => (dispatch) => {
  console.log(payload,"delete");
  dispatch(deleteTodoRequest());
  return axios({
    method: "delete",
    url: "https://trello-task-mocker.herokuapp.com/todo/" + payload
  })
    .then((res) => {
      dispatch(deleteTodoSuccess({ message: "delete successfully" }));
    })
    .catch((err) => dispatch(deleteTodoFailure(err)));
};
