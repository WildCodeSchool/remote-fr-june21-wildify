
import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import './Footer.css'



const Footer = () => {
    return (
        <BrowserRouter>
            <footer className="footer-container">
                <nav className="footer">
                    <NavLink className="footer-buttons" to="/Legal">Mentions Légales</NavLink>
                    <NavLink className="footer-buttons" to="/Legal">Mentions Légales</NavLink>
                </nav>
            </footer>



            <Switch>
                <Route path="/Legal">
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Footer;