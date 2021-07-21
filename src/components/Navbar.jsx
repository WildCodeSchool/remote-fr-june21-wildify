import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Home from './Home';
import Explore from './Explore';
import MyLibrary from './MyLibrary';
import UserProfile from './UserProfile';

import './Navbar.css'

const Navbar = () => {

    return (
    <BrowserRouter>
    
        <div className="navbar-items">
            <nav>
                <NavLink className="nav-buttons" to="/Home" >Home</NavLink>
                <NavLink className="nav-buttons" to="/Explore">Explore</NavLink>
                <NavLink className="nav-buttons" to="/MyLibrary">My Library</NavLink>
                <NavLink className="nav-buttons" to="/UserProfile">User Profile</NavLink>
            </nav>
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
    
    </BrowserRouter>
    )

}

export default Navbar;