import React, {useState, useEffect} from 'react';
import axios from "axios";

function Login() {
    return (
        <form>
            <label for="email">Email</label>
            <input type="email" name="email"/>
            <label for="password">Password</label>
            <input type="password" name="password"/>
            <input type="submit" value="submit" />
        </form>
    )
}

export default Login;
