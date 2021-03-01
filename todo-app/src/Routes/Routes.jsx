import React from "react";
import { Route } from "react-router-dom";
import { Dashboard} from "../Components/Dashboard";
import { TodoForm } from "../Components/TodoForm";
import { EditTaskPage } from "../Components/EditTaskPage";

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Dashboard} />
      <Route path="/create-todo" component={TodoForm} />
      <Route path="/edit_task/:id" component={EditTaskPage}/>
    </div>
  );
};

export { Routes };
