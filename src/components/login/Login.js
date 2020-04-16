import React, { useState } from "react";
import logo from "../../images/logo.svg";
import email from "../../images/email.png";
import key from "../../images/key.png";
import APIManager from "../../modules/APIManager"

function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    findUserFromLogin()
    .then(result => {
      console.log(result)
      if( result.length > 0){
        console.log("We have a user", result[0].username)
        sessionStorage.setItem("userId", result[0].id);
      }
    });
    sessionStorage.setItem("credentials", JSON.stringify(credentials));
    props.setIsAuthenticated(true);
    props.history.push("/");
  };

  const findUserFromLogin = ()=>{
    return APIManager.getUserByEmail(credentials.email, credentials.password)
  }


  return (
    <>
      <div className="login_container-top center">
        <h1 className="logo_login">
          <img src={logo} alt="checklist" className="logo-lg" />Prept
        </h1>
        <p className="logo_tagline">your emergency inventory manager</p>
        <div className="login_form_container">
          <form className="login_form">
            <h2>Login</h2>
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
            <button type="submit" className="btn-pink" onClick={handleLogin}>
              login
            </button>
          </form>
        </div>
      </div>
      <div className="center">
        <p>not registered?</p>
        <h4 className="login_create_link">Create New Account</h4>
      </div>
    </>
  );
}

export default Login;
