import React from "react";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";



const Home = (props) => {


  return (
    <React.Fragment>

      <div className="tag-line">
        <div className="text">
          <h1>Your Todo App</h1>
        </div>
        {props.user.isAuthenticated ? <button onClick={() =>{
          props.history.push(
            `/todo-app`
          );
        }}>View Your Todos</button> : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth
  };
};


export default connect(mapStateToProps, null)(Home);
