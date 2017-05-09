import React from 'react';
import './formlogin.css';

const FormLogin = ()=>
  <div className="login-codemargonda">
    <form className="input-login">
      <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
        <input id="email" type="text" className="form-control" name="email" placeholder="Email"/>
      </div>
      <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
        <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
      </div>
        <a href="#"><p>Lupa Password?</p></a>
        <button type="submit" className="btn btn-signin red">Sign In</button>
    </form>
    
    <div className="login-via text-center">
      <p>Atau Masuk Menggunakan</p>
      <a href="#">
          <img className="login-media" src="assets/001-facebook.png" alt="facebook"/>
      </a>
      <a href="#">
          <img className="login-media" src="assets/google.png" alt="instagram"/>
      </a>
      <a href="#">
          <img className="login-media" src="assets/github.png" alt="instagram"/>
      </a>
    </div>
  </div>

export {FormLogin};
