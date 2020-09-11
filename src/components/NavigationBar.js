import React from 'react';
import { Link } from "react-router-dom";

function NavigationBar(props) {
    return (
        <nav className="nav">
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
                <li>
                    <Link
                        to="/report/week/1"
                        onClick={props.closeMenu}
                    >
                        Reports
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
