import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

function Chat() {
    const { id } = useParams();

    const [content, setContent] = useState("");
    const [week, setWeek] = useState("");

    useEffect(() => {

    });

    return (
        <div className="content">
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;
