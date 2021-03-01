import {
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
  FormControlLabel,
  FormControl,
  Checkbox,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../Redux/TodoRedux/actionCreator";
import { makeStyles } from "@material-ui/core/styles";
import { Category } from "./Category";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(4),
      width: theme.spacing(36),
      height: theme.spacing(36),
    },
  },
}));

const Dashboard = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  const tododata = useSelector((state) => state.app.todo);
  console.log(tododata);
  const classes = useStyles();
  return (
    <div className={classes.root}>
        {
          ["Todo", "InProgress","Done"].map(item=>{
            return(
              <Paper elevation={3} key={item} style={{background:""}}>
                  <Category category={item}/>
              </Paper>
            )
          })
        }
    </div>
  );
};

export { Dashboard };
