import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <p>Hello {props.name}</p>
        </div>
    )
}

export default Home;
