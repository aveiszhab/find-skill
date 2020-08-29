import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import MyLogo from "../MyLogo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={MyLogo} alt="logo" />
      <h2>ShareASkill</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Skills</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-skills">Manage a Skill</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
