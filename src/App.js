import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
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
