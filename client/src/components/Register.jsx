import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="app login-app">
      <Link to="/">
        <Header />
      </Link>
      <form method="POST" className="form container">
        <h1>Register</h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={signUpHandler}>
          Sign Up
        </button>

        <small>
          Already have an account?
          <Link to="/login">Login</Link>
        </small>
      </form>
    </div>
  );
}

export default Register;
