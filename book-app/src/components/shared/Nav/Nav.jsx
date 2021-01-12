import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">Sign Up</NavLink>
    <NavLink className="link" to="/sign-in">Sign In</NavLink>
  </>
)

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)

const Nav = ({ user }) => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Manga Guy</NavLink>
          <NavLink className="book-link" to="/books">Books</NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
