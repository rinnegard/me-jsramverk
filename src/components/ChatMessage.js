import React, {useState, useEffect} from 'react';


function ChatMessage(props) {
    return (
        <div className="message-container">
            <p className="info">{props.username} {new Date(props.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="message">{props.message}</p>
        </div>
    )
}

export default ChatMessage;
