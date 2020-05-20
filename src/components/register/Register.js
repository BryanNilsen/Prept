import React, { useState } from "react";
import logo from "../../images/logo.svg";
import email from "../../images/email.png";
import key from "../../images/key.png";
import APIManager from "../../modules/APIManager";

function Register(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });

  const checkIfEmailExists = () => {
    return APIManager.getUserByEmail(credentials.email);
  };

  // EVENT HANDLERS
  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };
  // Check for matching email/password and set userId to sessionStorage
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("You clicked register");
    // findUserFromLogin().then((result) => {
    //   if (result.length > 0) {
    //     sessionStorage.setItem("userId", result[0].id);
    //     props.setIsAuthenticated(true);
    //     props.history.push("/welcome");
    //   }
    // });
  };

  return (
    <>
      <div className="login_container-top center">
        <h1 className="logo_login">
          <img src={logo} alt="checklist" className="logo-lg" />
          Prept
        </h1>
        <p className="logo_tagline">your emergency inventory manager</p>
        <div className="login_form_container">
          <form className="login_form">
            <h2>Register</h2>
            <div className="login_inputs">
              <img src={email} alt="email" className="input_icon" />
              <input
                type="email"
                id="email"
                placeholder="email"
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="login_inputs">
              <img src={email} alt="username" className="input_icon" />
              <input
                type="text"
                id="username"
                placeholder="username"
                onChange={handleFieldChange}
                required
              />
            </div>
            <div className="login_inputs">
              <img src={key} alt="password" className="input_icon" />
              <input
                id="password"
                type="password"
                placeholder="password"
                onChange={handleFieldChange}
                required
              />
            </div>
            <p className="forgot_pwd">forgot password?</p>
            <button type="submit" className="btn-pink" onClick={handleRegister}>
              register
            </button>
          </form>
        </div>
      </div>
      <div className="center">
        <p>already registered?</p>
        <h4 className="login_create_link">
          <button
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Log In
          </button>
        </h4>
      </div>
    </>
  );
}

export default Register;
