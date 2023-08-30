import './navtab.css';

import React from "react";

function Navtab(props) {
    return(
        <a className="Navtab" href={props.reference}>
            <span>{props.name}</span>
        </a>
    );
}

export default Navtab;