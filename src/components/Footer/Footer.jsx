
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Facebook from './facebook.png';
import Insta from './instagram.png';

import './Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <footer className="footer-container">
                <nav className="footer">
                    <div className="footer-logos">
                        <a href="https://facebook.com/wildify">
                        <img className="logo" src={Facebook} alt="facebook logo" />
                        </a>
                        <a href="https://instagram.com/wildify">
                        <img className="logo" src={Insta} alt="insta logo" />
                    </a>
                    </div>
                    <div className="footer-links">
                        <NavLink className="footer-buttons" to="/Legal">Mentions Légales</NavLink>
                        <NavLink className="footer-buttons" to="/Contact">Contactez-nous</NavLink>
                    </div>
                </nav>
            </footer>
        </BrowserRouter>
    )
}

export default Footer;