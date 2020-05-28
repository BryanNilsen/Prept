import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navbar = (props) => {
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    props.setIsAuthenticated(false);
    props.history.push("/login");
    props.clearUserData();
  };
  return (
    <nav>
      <NavLink to="/welcome">
        <div className="flex">
          <img src={logo} alt="checklist" className="logo-sm" />
          <h1 className="logo_nav">Prept</h1>
        </div>
      </NavLink>
      <div className="navlinks">
        <NavLink to="/household" activeClassName="activeLink">
          Household
        </NavLink>
        <NavLink to="/food" activeClassName="activeLink">
          Food
        </NavLink>
        <NavLink to="/water" activeClassName="activeLink">
          Water
        </NavLink>
        <NavLink to="/supplies" activeClassName="activeLink">
          Supplies
        </NavLink>
      </div>
      <button className="btn-pink" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default withRouter(Navbar);
