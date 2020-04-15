import React from 'react';
import logo from '../../images/logo.svg'

function Login() {

  return (
    <>
    <div className="login_container-top">
      <h1 className="logo_login"><img src={logo} alt="checklist" className="logo-lg" /> Prept</h1>
      <p>your emergency inventory manager</p>
      <div className="login_form_container">
        <div className="login_form">
          <h2>Login</h2>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button className="btn-pink">login</button>
          </div>
        </div>
    </div>
    <p>not registered?</p>
    <h4>Create New Account</h4>
    </>
  );
}

export default Login;