import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">View Skills</li>
        <li className="navbar-links-item">Add a Skill</li>
      </ul>
    </div>
  );
};

export default NavBar;
