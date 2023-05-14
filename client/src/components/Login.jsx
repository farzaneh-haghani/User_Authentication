import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="app login-app">
      <form action="" method="post" className="form container">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="button">Sign In</button>
        <small>
          Don't have an account yet?
          <Link to="/register">Register</Link>
        </small>
      </form>
    </div>
  );
}

export default Login;
