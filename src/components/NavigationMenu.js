import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function NavigationMenu(props) {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <ul>
                <li>
                    <Link
                        to="/"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu;
