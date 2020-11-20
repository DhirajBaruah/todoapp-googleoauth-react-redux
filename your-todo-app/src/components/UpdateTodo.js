import React, { useState } from "react";
import axios from "axios";



const UpdateTodo = (props) => {

  const [task, settask] = useState(props.match.params.task);
  const updateTodo = (id, task) => {
    axios.put(`/todo/${id}`, { task })
      .then(res => {
        props.history.push(
          `/todo-app`
        )
      })
  }

  return (
    <React.Fragment>
      <div className="update-todo-container">
        <input value={task} onChange={(e) => { settask(e.target.value) }} />
        <button
          onClick={() => {
            updateTodo(props.match.params.id, task);
          }}
        >Update</button>
      </div>


    </React.Fragment>
  );
};



export default UpdateTodo;
