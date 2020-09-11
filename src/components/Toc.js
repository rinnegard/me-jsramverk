import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Toc() {
    return (
        <div className="toc">
            <h2>Vecka</h2>
            <ul>
                <li>
                    <Link
                        to="/report/week/1"
                    >
                        1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/report/week/2"
                    >
                        2
                    </Link>
                </li>
                <li>
                    <Link
                        to="/report/week/3"
                    >
                        3
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Toc;
