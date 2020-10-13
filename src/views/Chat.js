import React, {useState, useEffect} from 'react';
import {socket} from "../service/socket.js";

function Chat() {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);




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
        socket.emit('chat message', newMessage);
        setNewMessage("");
    }


    function inputChange(e) {
        if (e.target.type === "textarea") {
            setNewMessage(e.target.value);
        }
    }

    return (
        <div className="content">
            <h1>Chat</h1>
            <div className="chatbox">
                {messages}
            </div>
            <form onSubmit={formSubmit}>
                <label htmlFor="message">Content</label>
                <textarea name="message" required onChange={inputChange}/>
                <input className="blue-button button" type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Chat;
