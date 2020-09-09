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


function App() {
  return (
    <div>
        <Router>
        <Header />
            <Switch>
                <Route exact path="/">
                    <Home name="Home"/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}
export default App;
