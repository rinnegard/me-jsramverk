import React, {useState, useEffect} from 'react';


function ChatMessage(props) {
    return (
        <div className="message-container">
            <p className="info">{props.username}<span className="time">{new Date(props.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></p>
            <p className="message">{props.message}</p>
        </div>
    )
}

export default ChatMessage;
