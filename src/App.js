import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import NewReport from "./components/NewReport";
import Home from "./views/Home";
import About from "./views/About";
import Report from "./views/Report";

const auth = {
  token: "",
  authenticate(token) {
    auth.token = token;
  },
  signout() {
    auth.token = "";
  }
};

function App() {
    const [token, setToken] = useState("");

  return (
    <div className="container">
        <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home name="Home"/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/report/week/:id">
                <Report />
            </Route>
            <Route path="/report/add">
                <NewReport auth={auth}/>
            </Route>
            <Route path="/login">
                <Login auth={auth} />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
        </Router>
    </div>
  );
}
export default App;
