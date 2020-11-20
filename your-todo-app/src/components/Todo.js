import React, { useState, useEffect } from "react";
import axios from "axios";


const Todo = (props) => {

  // States
  const [task, settask] = useState("");
  const [view, updateview] = useState(false);
  const [allTodo, setallTodo] = useState([
    {
      _id: "",
      task: "",
      userID: "",
    }
  ]);

  //Methods
  const addTodo = (task) => {
    axios
      .post("/todo", { task })
      .then((res) => {
        console.log(res);
        settask("");
        updateview(!view);
      })
      .catch((err) => alert(err.message));
  }

  const getAllTodo=()=>{
    axios
    .get("/todo")
    .then((res) => {
      console.log(res);
      setallTodo(res.data);
    })
    .catch((err) => alert(err.message));
  }

  const deleteTodo=(id)=>{
    axios
    .delete(`/todo/${id}`)
    .then((res) => {
      console.log(res.data);
      updateview(!view);
    })
    .catch((err) => alert(err.message));
  }

  const changeTodo=(id, task)=>{
    props.history.push(
      `/UpdateTodo/${id}/${task}`
    );
  }

  
  useEffect(function () {
    getAllTodo();
  }, [view]);


  //Render
  return (
    <React.Fragment>
      <div className="todo-app">
      <div className="todo-app-container">
      {allTodo.map((x, i) =>
        <div className="each-todo" key={i}>
          <h1 key={i}>{i+1}. {x.task} </h1>
          <button
          onClick={() => {
            deleteTodo(x._id);
          }}
          >Delete
          </button>

          <button
          onClick={() => {
            changeTodo(x._id, x.task);
          }}
          >Change
          </button>
        </div>
      )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(task);
        }}
      >
        <div className="input-field ">
          <input
            onChange={(e) => {
              settask(e.target.value);
            }}
            id="task"
            type="task"
            name="task"
            className="validate"
            placeholder="Add new todo"
          />
          
        </div>
        <button
          className="btn waves-effect waves-light blue-grey darken-1"
          type="submit"
          name="action"
        >
          Add              
        </button>
      </form>
      </div>
    </React.Fragment>
  );
};

export default Todo;
