import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import home from './home.png';
import explore from './explore.png';
import myLibrary from './mylibrary.png';
import UserProfile from './userprofile.png';

import './Navbar.css'

const Navbar = () => {

    return (
    <BrowserRouter>
    
        <div className="navbar-items">
            <nav>
                <NavLink className="nav-buttons" to="/Home" >
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
  
       <Switch>
         <Route exact path="/">
         </Route>
         <Route path="/Explore">
         </Route>
         <Route path="/MyLibrary">
         </Route>
         <Route path="/UserProfile">
         </Route>
       </Switch>
    
    </BrowserRouter>
    )

}

export default Navbar;