import React from 'react';
import { Link } from "react-router-dom";

function TocItem(props) {
    return (
        <li>
            <Link
                to={`/report/week/${props.week}`}
            >
                Week {props.week}
            </Link>
        </li>
    );
}

export default TocItem;
