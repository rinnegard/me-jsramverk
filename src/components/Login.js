import React, {useState, useEffect} from 'react';
import axios from "axios";

function Login() {
    function formSubmit(e) {
        e.preventDefault();
        alert("hello");
    }

    return (
        <div className="content">
            <form onSubmit={formSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required placeholder="john.doe@gmail.com"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required/>
                <input className="blue-button button" type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Login;
