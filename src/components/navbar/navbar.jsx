import './navbar.css';

import React from "react";

import Navtab from '../navtab';

function Navbar() {
    return (
        <div className="Navbar">
            <a href='/'>
                <img src="/logo.svg" alt="logo.svg" style={{"width": "2em", "height": "2em", "padding":"0", "filter":"grayscale(100%) brightness(1000%)"}} />
                <span className="Title" style={{"font-weight":"bold"}}>Joseph Shapiro</span>
            </a>
            <div className="Navbar-tabs">
                <Navtab name="Software" reference="/software" />
                <Navtab name="3D Printing" reference="printing" />
                <Navtab name="About" reference="about" />
            </div>
        </div>
    );
}

export default Navbar;