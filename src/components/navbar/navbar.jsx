import './navbar.css';

import React from "react";

import Navtab from '../navtab';

function Navbar() {
    return (
        <div className="Navbar">
            <img src="/logo.svg" alt="logo.svg" style={{"width": "40px", "height": "40px", "filter":"grayscale(100%) brightness(1000%)"}} />
            <div style={{"font-weight":"bold"}}>Polyfabrica Technologies, LLC</div>
            <div className="Navbar-tabs">
                <Navtab name="Software" reference="null" />
                <Navtab name="3D Printing" reference="null" />
                <Navtab name="About" reference="null" />
            </div>
        </div>
    );
}

export default Navbar;