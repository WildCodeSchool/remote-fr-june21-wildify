import React from "react";
import { BrowserRouter, NavLink, Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Explore from './Explore';
import MyLibrary from './MyLibrary';
import UserProfile from './UserProfile';

import './Navbar.css'

const Navbar = () => {

    return (
    <Router>
        <div className="navbar">
            <BrowserRouter>
            <nav className="navbar-buttons">
                <ul>
                    <li>
                        <NavLink to="/Home" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Explore">Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/MyLibrary">My Library</NavLink>
                    </li>
                    <li>
                        <NavLink to="/UserProfile">User Profile</NavLink>
                    </li>
                </ul>
            </nav>
            </BrowserRouter>
        </div>
  
       <Switch>
         <Route exact path="/">
          <Home />
         </Route>
         <Route path="/Explore">
          <Explore />
         </Route>
         <Route path="/MyLibrary">
          <MyLibrary/>
         </Route>
         <Route path="/UserProfile">
          <UserProfile />
         </Route>
       </Switch>
    </Router>
    )

}

export default Navbar;