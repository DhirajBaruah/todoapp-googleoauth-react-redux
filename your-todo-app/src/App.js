import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//style
import './App.css';

//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import UpdateTodo from "./components/UpdateTodo";

//redux
import { connect } from "react-redux";
import { loadUser } from "./redux/app/actions/authAction";

function App(props) {

  useEffect(() => {
    props.loadUser();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route
        path="/signup"
        component={props.user.isAuthenticated ? Home : Signup}
      />
      <Route
        path="/todo-app"
        component={props.user.isAuthenticated ? Todo : Signup}
      />
      <Route
        path="/updateTodo/:id/:task"
        component={props.user.isAuthenticated ? UpdateTodo : Signup}
      />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps, { loadUser })(App);
