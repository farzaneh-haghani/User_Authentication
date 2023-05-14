import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app home-app">
      <div className="container">
        <h1>Welcome to my first App</h1>
        <Link to="/login">
          <button className="home-button button">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-button button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
