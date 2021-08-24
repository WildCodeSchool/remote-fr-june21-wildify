import React from "react";
import { NavLink } from "react-router-dom";

import explore from "./search-solid.svg";
import myLibrary from "./star-regular.svg";
import UserProfile from "./user-regular.svg";

import WildifyLogo from './wildify-logo-nav.png';

import "./Navbar.css";

const Navbar = () => (
  <div className="navbar-container">
    {/* <div className="w-logo-container">
    <img className="Wlogo" src={WildifyLogo} alt="wildify-logo"></img>
    <p className="logo-title">Wildify</p>
    </div>  */}
    <nav>
      <NavLink className="nav-buttons" to="/">
          <img className="nav-logo" src={WildifyLogo} alt="home" activeClassName="nav-active" />
          <p className="nav-title">Home</p>
      </NavLink>
    </nav>

    <div className="navbar">
      <nav>
        <NavLink className="nav-buttons" to="/Explore">
          <img className="nav-logo" src={explore} alt="explore" activeClassName="nav-active" />
          <p className="nav-title">Explore</p>
        </NavLink>
        <NavLink className="nav-buttons" to="/MyLibrary">
          <img className="nav-logo" src={myLibrary} alt="My Library" activeClassName="nav-active" />
          <p className="nav-title">My Library</p>
        </NavLink>
        <NavLink className="nav-buttons" to="/UserProfile">
          <img className="nav-logo" src={UserProfile} alt="Profil" activeClassName="nav-active" />
          <p className="nav-title">My Profile</p>
        </NavLink>
      </nav>
    </div>
  </div>
);

export default Navbar;
