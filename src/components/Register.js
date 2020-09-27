import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function formSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        axios.post("https://me-api.rinnegard.me/register", {
            email: email,
            password: password
        })
        .then(function(res) {
            console.log(res.data.data);
            console.log(res.data.data.message);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    function inputChange(e) {
        if (e.target.type === "email") {
            setEmail(e.target.value);
        } else if (e.target.type === "password") {
            setPassword(e.target.value);
        }
    }

    return (
        <div className="content">
            <h1>Register</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required placeholder="john.doe@gmail.com" onChange={inputChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required onChange={inputChange}/>
                <input className="blue-button button" type="submit" value="Submit" />
            </form>

        </div>

    )
}

export default Register;
