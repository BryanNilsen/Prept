import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navbar = (props) => {
  const handleLogout = () => {
    sessionStorage.removeItem("credentials");
    props.setIsAuthenticated(false);
    props.history.push("/login");
  };
  return (
    <nav>        
      <h1 className="logo_nav"><img src={logo} alt="checklist" className="logo-sm" />Prept</h1>
      <ul className="navlinks">
        <li>Household</li>
        <li>Food</li>
        <li>Water</li>
        <li>Supplies</li>
      </ul>
      <button className="btn-pink" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default withRouter(Navbar);
