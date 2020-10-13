import React from 'react';
import { NavLink } from "react-router-dom";

function NavigationBar(props) {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink
                        exact
                        activeClassName="selected"
                        to="/"
                        onClick={props.closeMenu}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        activeClassName="selected"
                        to="/about"
                        onClick={props.closeMenu}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        activeClassName="selected"
                        to="/report/week/1"
                        onClick={props.closeMenu}
                    >
                        Reports
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        activeClassName="selected"
                        to="/login"
                        onClick={props.closeMenu}
                    >
                        Log in
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        activeClassName="selected"
                        to="/chat"
                        onClick={props.closeMenu}
                    >
                        Chat
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
