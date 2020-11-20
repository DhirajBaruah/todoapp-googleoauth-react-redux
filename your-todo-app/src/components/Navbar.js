import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/app/actions/authAction";
const Navbar = (props) => {

  const renderContent = () => {
    switch (props.user.isAuthenticated) {
      case true:
        return (
          <React.Fragment>
            <li >
              <Link to="/todo-app">TODO</Link>
            </li>
            <li >
              <a onClick={() => props.logout()}>LOGOUT</a>
            </li>
          </React.Fragment>
        );

      case false:
        return (
          <li >
            <Link to="/signup">SIGNUP/LOGIN</Link>
          </li>
        );
      default:
        return (
          <li >
            <Link to="/#">Loading...</Link>
          </li>
        );
    }
  };


  return (
    <React.Fragment>
      <nav >
        <ul className="nav-links">
          <li >
            <Link to="/">HOME</Link>
          </li>
          {renderContent()}
        </ul>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    admin: state.authAdmin,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
