import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import AsyncHeavy from "./AsyncSetting";
import Heavy from "./Heavy";



export default function App() {
    return (
        <Router>
            <div>
                <Route path={"/"} exact component={Login}/>
                {/*<Route path={"/heavy/"} exact component={AsyncHeavy}/>*/}
            </div>
        </Router>
    )
}
