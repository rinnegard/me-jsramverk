import React, {useState, useEffect} from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    function formSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        axios.post("https://me-api.rinnegard.me/login", {
            email: email,
            password: password
        })
        .then(function(res) {
            console.log(res);
            props.auth.authenticate(res.data.data.token);
            setToken(res.data.data.token);
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

        <>
            {token !== "" &&
                <Redirect to = {{ pathname: "/" }} />
            }
            <div className="content">
                <h1>Log in</h1>
                <form onSubmit={formSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder="john.doe@gmail.com" onChange={inputChange}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required onChange={inputChange}/>
                    <input className="blue-button button" type="submit" value="Submit" />
                    <Link
                        to="/register"
                    >
                        Click here to register!
                    </Link>
                </form>
            </div>
        </>

    )
}

export default Login;
