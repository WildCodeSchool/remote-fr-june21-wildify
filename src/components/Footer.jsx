
import './Footer.css'

import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";


const Footer = () => {
    return (
        <BrowserRouter>
            <div className="footer">
                <nav>
                    <NavLink className="footer-buttons" to="/Legal">Mentions Légales</NavLink>
                    <NavLink className="footer-buttons" to="/Legal">Mentions Légales</NavLink>
                </nav>
            </div>



            <Switch>
                <Route path="/Legal">
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Footer;