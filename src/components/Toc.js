import React from 'react';
import { Link } from "react-router-dom";

function Toc() {
    return (
        <div className="toc">
            <h2>Content:</h2>
            <ul>
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
                <li>
                    <Link
                        to="/report/week/3"
                    >
                        Week 3
                    </Link>
                </li>
                <li>
                    <Link
                        to="/report/week/4"
                    >
                        Week 4
                    </Link>
                </li>
                <li>
                    <Link
                        to="/report/add"
                    >
                        Add/Edit
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Toc;
