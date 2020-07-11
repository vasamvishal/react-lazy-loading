import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from "./Home";
import AsyncHeavy from "./AsyncSetting";
import Heavy from "./Heavy";

export default function App() {
    return (
        <Router>
            <div>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/heavy/"} exact component={Heavy}/>
            </div>
        </Router>
    )
}
