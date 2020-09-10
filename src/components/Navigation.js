import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavigationMenu from "./NavigationMenu"
import NavigationBar from "./NavigationBar"

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="nav">
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
            />
            <NavigationBar />

        {showMenu &&
            <NavigationMenu
                closeMenu={() => setShowMenu(!showMenu)}
            />
        }
        </nav>
    );
}

export default Navigation;
