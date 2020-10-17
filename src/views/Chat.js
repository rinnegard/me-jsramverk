import React, {useState, useEffect} from 'react';
import ChatMessage from "../components/ChatMessage.js";
import io from 'socket.io-client';
import useSocket from 'use-socket.io-client';

function Chat() {
    const [newMessage, setNewMessage] = useState("");
    const [username, setUsername] = useState("");
    const [messages, setMessages] = useState([]);
    const [connected, setConnected] = useState(false);
    const [socket] = useSocket('https://socket-chat.rinnegard.me/')

    useEffect(() => {
        socket.on('connect', function() {
            console.info("Connected");
            socket.on('chat message', function (message) {
                console.log("Message received: " + message);
                setMessages(messages => [...messages, message])
            });
        });

        socket.on('disconnect', function() {
            console.info("Disconnected");
        });
    });



    function formSubmit(e) {
        e.preventDefault()
        console.log(newMessage);
        socket.emit('chat message', {
            message: newMessage,
            username: username,
            time: Date.now()
        });
        setNewMessage("");
    }


    function inputChange(e) {
        if (e.target.name === "message") {
            setNewMessage(e.target.value);
        } else if (e.target.name === "username") {
            setUsername(e.target.value);
        }
    }

    return (
        <div className="content">
            <h1>Chat</h1>
            <div className="chatbox">
                {
                    messages.map(function(item, i) {
                        return <ChatMessage key={i} message={item.message} username={item.username} time={item.time}/>
                    })
                }
            </div>
            <form onSubmit={formSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required onChange={inputChange} value={username}/>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" required onChange={inputChange} value={newMessage}/>
                <input className="blue-button button" type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Chat;
