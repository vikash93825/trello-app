import React, { useState } from "react";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import { TodoSubTask } from "./TodoSubTask";
import { useDispatch } from "react-redux";
import { addTodoTask } from "../Redux/TodoRedux/actionCreator";
import { useHistory } from "react-router-dom";

const TodoForm = () => {
  const initState = {
    title: "",
    description: "",
    status: "Todo",
    subtask: [],
    official: false,
    personal: false,
    other: false,
    date:""
  };
  const [state, setState] = useState(initState);
  //add sub task
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubTask = (payload) => {
    console.log(payload);
    const value = payload ? payload : [...state.subtask];
    setState((prevState) => ({
      ...prevState,
      subtask: value,
    }));
  };

  const dispatch = useDispatch();
  const history = useHistory()
  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addTodoTask(state)).then(history.push("/"));
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "20px" }}>
            <div style={{ margin: "10px" }}>
              <TextField
                type="text"
                label="Add a title"
                variant="outlined"
                value={state.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField
                type="text"
                label="Description"
                variant="outlined"
                value={state.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="status"
                  name="status"
                  value={state.status}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Todo"
                    control={<Radio />}
                    label="Todo"
                  />
                  <FormControlLabel
                    value="InProgress"
                    control={<Radio />}
                    label="InProgress"
                  />
                  <FormControlLabel
                    value="Done"
                    control={<Radio />}
                    label="Done"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Tags</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.official}
                        onChange={handleChange}
                        name="official"
                      />
                    }
                    label="Official"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.personal}
                        onChange={handleChange}
                        name="personal"
                      />
                    }
                    label="Personal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.other}
                        onChange={handleChange}
                        name="other"
                      />
                    }
                    label="Other"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div style={{ margin: "20px" }}>
            <TodoSubTask handleSubTask={handleSubTask} />
          </div>
          <div style={{ margin: "20px" }}>
            <div style={{ margin: "10px" }}>
              <TextField
                type="date"
                value={state.date}
                onChange={handleChange}
                name="date"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              CREATE A NEW TASK
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { TodoForm };
