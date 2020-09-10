import React from 'react';

function About() {
    return (
        <div className="content">
            <h1>Information om kursen</h1>
            <img src="./img/frameworks.png" alt="logo" />
            <p>Denna webbplatsen är en uppgift i kursen Jsramverk på BTH.</p>
            <h2>Länkar</h2>
            <ul>
                <li><a href="https://jsramverk.se">Kurswebbplats</a></li>
                <li><a href="https://github.com/emilfolino/jsramverk.se">GitHub - Kursen</a></li>
                <li><a href="https://github.com/rinnegard/me-jsramverk">GitHub - Den här webbplatsen</a></li>
            </ul>

        </div>
    )
}

export default About;
