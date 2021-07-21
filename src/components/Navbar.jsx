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
                <NavLink className="nav-buttons" to="/Home" >Accueil</NavLink>
                <NavLink className="nav-buttons" to="/Explore">Explorer</NavLink>
                <NavLink className="nav-buttons" to="/MyLibrary">Mes favoris</NavLink>
                <NavLink className="nav-buttons" to="/UserProfile">Profil</NavLink>
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