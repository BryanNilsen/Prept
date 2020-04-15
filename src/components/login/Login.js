import React from 'react';
import logo from '../../images/logo.svg'
import email from '../../images/email.png'
import key from '../../images/key.png'

function Login() {

  return (
    <>
    <div className="login_container-top">
      <h1 className="logo_login"><img src={logo} alt="checklist" className="logo-lg" /> Prept</h1>
      <p className="logo_tagline">your emergency inventory manager</p>
      <div className="login_form_container">
        <div className="login_form">
          <h2>Login</h2>
          <div className="login_inputs">
            <img src={email} alt="email" className="input_icon"/>
            <input type="text" placeholder="email"/>
          </div>
          <div className="login_inputs">
            <img src={key} alt="password" className="input_icon"/>
            <input type="text" placeholder="password" />
          </div>
          <p className="forgot_pwd">forgot password?</p>
          <button className="btn-pink">login</button>
          </div>
        </div>
    </div>
    <p>not registered?</p>
    <h4 className="login_create_link">Create New Account</h4>
    </>
  );
}

export default Login;