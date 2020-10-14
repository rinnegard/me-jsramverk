import React, {useState, useEffect} from 'react';


function ChatMessage(props) {
    return (
        <div className="message">
            <p>{props.username}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default ChatMessage;
