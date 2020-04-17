import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navbar = (props) => {
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    props.setIsAuthenticated(false);
    props.history.push("/login");
  };
  return (
    <nav>        
      <h1 className="logo_nav"><img src={logo} alt="checklist" className="logo-sm" />Prept</h1>
      <div className="navlinks">
      <NavLink to="/household">Household</NavLink>
      <NavLink to="/food">Food</NavLink>
      <NavLink to="/water">Water</NavLink>
      <NavLink to="/supplies">Supplies</NavLink>
      </div>
      <button className="btn-pink" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default withRouter(Navbar);
