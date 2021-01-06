import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Manga Guy</NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
