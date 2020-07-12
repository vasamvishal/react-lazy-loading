import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import AsyncHeavy from "./AsyncSetting";
import Heavy from "./Heavy";
import HomePage from "./HomePage/HomePage";
import BuyPage from "./BuyPage/BuyPage";

export default function App() {
    return (
        <Router>
            <div>
                <Route path={"/"} exact component={Login}/>
                <Route path={"/home"} exact component={HomePage}/>
                <Route path={"/buyPrice"} exact component={BuyPage}/>
            </div>
        </Router>
    )
}
