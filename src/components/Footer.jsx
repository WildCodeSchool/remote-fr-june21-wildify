
import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Contact from "./Contact"


import './Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <footer className="footer-container">
                <nav className="footer">
                    <NavLink className="footer-buttons" to="/Legal">Mentions Légales</NavLink>
                    <NavLink className="footer-buttons" to="/Contact">Contactez-nous</NavLink>
                    <a className="footer-buttons" href="https://facebook.com/wildify"><img className="logo" src='../assets/facebook.png' alt="facebook logo"></img></a>
                    <a className="footer-buttons" href="https://instagram.com/wildify"><img className="logo" src='../assets/instagram.png' alt="insta logo"></img></a>
                </nav>
            </footer>

            <Switch>
                <Route path="/Legal">
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Footer;