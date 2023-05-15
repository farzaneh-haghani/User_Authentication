import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  return (
    <div className="app login-app">
      <Link to="/">
        <Header />
      </Link>
      <form method="POST" className="form container">
        <h1>Register</h1>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" />

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
