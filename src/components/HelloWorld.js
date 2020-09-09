import React, { useState } from 'react';

function HelloWorld(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default HelloWorld;
