import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Home(props) {
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get("http://localhost:1337/")
        .then(function(res) {
            console.log(res.data);
            setContent(res.data.content);
        })
        .catch(function(error) {
            console.log(error);
        })
    });

    return (
        <div className="content" dangerouslySetInnerHTML={{__html: content}}>

        </div>
    )
}

export default Home;
