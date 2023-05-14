import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="app login-app">
      <form action="" method="post" className="form container">
        <h1>Register</h1>
        <label htmlFor="email">Full Name</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="button">Sign Up</button>
        <small>
          Already have an account?
          <Link to="/login">Login</Link>
        </small>
      </form>
    </div>
  );
}

export default Register;
