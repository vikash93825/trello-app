import React,{useEffect} from "react"
import {
    Card,
    CardContent,
    Divider,
    Typography,
    FormControlLabel,
    Checkbox,
  } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoTask, getTodoData } from "../Redux/TodoRedux/actionCreator";
import EditIcon from "@material-ui/icons/Edit"
import {useHistory} from "react-router-dom"
import DeleteIcon from '@material-ui/icons/Delete';

const Category = ({category}) =>{
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTodoData());
    }, []);
  
    const tododata = useSelector((state) => state.app.todo);
    console.log(tododata);
  
    const todos = tododata.filter((item) => item.status === category)

    //Edit
    const history = useHistory()
    const handleEdit = (id,payload)=>{
        history.push({
            pathname:`/edit_task/${id}`,
            state:payload
        })
    }

    const handleDelete = (id) =>{
      console.log(id)
      dispatch(deleteTodoTask(id)).then(()=>dispatch(getTodoData()))
    }

    return(
        <>
            <Typography variant="h4" style={{ textAlign:"center", color: "red" }}>
        {category}
        </Typography>
        <Divider />
        <div>
          {todos && todos?.map((item) => {
            return (
              <Card key={item.id}>
                <CardContent>
                  <Typography
                    // className={classes.title}
                    variant="h5"
                    component="h6"
                    color="textSecondary"
                  >
                    {item.title}
                    <EditIcon onClick={()=>handleEdit(item.id,item)}/>
                    <DeleteIcon onClick={()=>handleDelete(item.id)}/>
                    
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {item.date}
                  </Typography>
                  <Typography  color="textSecondary">
                    Description: {item.description}
                  </Typography>
                  <Typography variant="body2" component="p">
                  {item.subtask?.map(({ id, title, status }) => {
                      return (
                        <div key={id}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={status}
                                // onChange={handleChange}
                                name="status"
                              />
                            }
                            label={title}
                          />
                        </div>
                      );
                    })}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
        </>
    )

}
export {Category}