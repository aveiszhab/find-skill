import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Skills</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-skills">Add a Skill</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
