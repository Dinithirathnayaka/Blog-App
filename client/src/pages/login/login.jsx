import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
        />
        <button className="loginButton">
          <Link to="/login">Login</Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
