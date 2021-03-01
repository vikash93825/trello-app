import React, { useState } from "react"
import {Button,Paper,TextField,Typography} from "@material-ui/core"
import {v4 as uuid} from "uuid"
import DeleteIcon from '@material-ui/icons/Delete';


const TodoSubTask = ({handleSubTask})=>{
    const [task,setTask] = useState("")
    const [subTask,setSubTask] = useState([])
    const handleSubtask = ()=>{
        const payload = {
            id:uuid(),
            title:task,
            status:false
        }
        const new_sub_task =  [...subTask,payload]
        setSubTask(new_sub_task)
        handleSubTask(new_sub_task)
    }

    return(
        <div>
            <div style={{ margin: "10px" }}>
              <TextField label="Add subTask" variant="outlined" value={task} onChange={e=>setTask(e.target.value)}/>
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100px", height: "55px", margin: " -3px 10px" }}
                onClick={handleSubtask}
                >
                Add
              </Button>
            </div>
            <div style={{}}>
            {subTask?.map(({title,id})=>{
                return(
                    <div key={id} >
                        <Paper style={{display:"flex" ,justifyContent:"space-around",width:"220px",margin:"10px"}}>
                            <h3>{title}</h3>
                            <DeleteIcon/>
                        </Paper>
                    
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export {TodoSubTask}