import React from 'react';
import { Link } from "react-router-dom";

function Toc() {
    return (
        <div className="toc">
            <h2></h2>
            <ul>
                <li>
                    <Link
                        to="/report/add"
                    >
                        Add new
                    </Link>
                </li>
                <li>
                    <Link
                        to="/report/week/1"
                    >
                        Week 1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/report/week/2"
                    >
                        Week 2
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Toc;
