import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Report from "./views/Report";


function App() {
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
                <Route path="/report">
                    <Report />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}
export default App;
