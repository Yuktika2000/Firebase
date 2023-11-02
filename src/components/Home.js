import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home(props) {
  return (
    <div className="container">
      <div className="link-container">
        <h1>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </h1>
        <h1>
          <Link to="/signup" className="login-link">
            Signup
          </Link>
        </h1>
      </div>
      <div>
        <p className="welcome">
          {props.name ? `Welcome, ${props.name}` : "Please log in"}
        </p>
      </div>
    </div>
  );
}

export default Home;
