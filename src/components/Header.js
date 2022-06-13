import React, { useState } from "react"
import { NavLink } from 'react-router-dom';
import "./styles/LoginStyle.css";

const Header = (props) => {
  
  return (
    <>
    <div className="header">
      <div id="loginbtn"
        style={{ position: "absolute" }}>
        <NavLink exact activeClassName="active" to="/">
          Login
        </NavLink>
      </div>

      <div id="registerbtn"
        style={{ position: "absolute", left: "10%" }} >
        <NavLink activeClassName="active" to="/user">
          Sign up
        </NavLink>
      </div>

      <div id="registerbtn"
        style={{ position: "absolute", left: "20%" }} >
        <NavLink activeClassName="active" to="/register">
          Register  Company
        </NavLink>
      </div>

      <h2 id="headtext" style=
        {{ display: "inline", left: "81%", position: "relative" }}>
                <NavLink activeClassName="active" to="/">
          Logout
        </NavLink>
      </h2>

    </div>
    </>
  )
}

export default Header;