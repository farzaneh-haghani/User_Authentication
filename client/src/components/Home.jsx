import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app home-app">
      <img src="/images/Farzaneh-designstyle-friday-m.png" alt="Farzaneh" />
      <div className="container">
        <h1>Welcome to my App</h1>
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
