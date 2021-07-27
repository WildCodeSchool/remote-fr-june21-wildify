import React from "react";
import { NavLink } from "react-router-dom";
import home from "./home.png";
import explore from "./explore.png";
import myLibrary from "./mylibrary.png";
import UserProfile from "./userprofile.png";

import "./Navbar.css";

const Navbar = () => (
  <div className="navbar-container">
    <nav>
      <NavLink className="nav-buttons" to="/Home">
        <img className="nav-logo" src={home} alt="Home" />
      </NavLink>
      <NavLink className="nav-buttons" to="/Explore">
        <img className="nav-logo" src={explore} alt="explore" />
      </NavLink>
      <NavLink className="nav-buttons" to="/MyLibrary">
        <img className="nav-logo" src={myLibrary} alt="My Library" />
      </NavLink>
      <NavLink className="nav-buttons" to="/UserProfile">
        <img className="nav-logo" src={UserProfile} alt="Profil" />
      </NavLink>
    </nav>
  </div>
);

export default Navbar;
