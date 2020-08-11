import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import BuyPage from "./BuyPage/BuyPage";
import AddToCart from "./AddToCart/AddToCart";
import MenuBurger from "./SiteHeader/MenuBurger";
import HamburgerMenu from "./Component/HamberGerMenu";
import Exam from "./Component/Exam";

export default function App() {
    return (
        <Router>
            <div>
                <div className="App">
                    <Route path={"/login"} exact component={Login} />
                    <Route path={"/home"} exact component={HomePage} />
                    <Route path={"/buyPrice"} exact component={BuyPage} />
                    <Route path={"/cart"} exact component={AddToCart} />
                    <Route path={"/exampleDemo"} exact component={MenuBurger} />
                    <Route path={"/example"} exact component={HamburgerMenu} />
                    <Route path={"/exam"} exact component={Exam} />
                </div>
            </div>
        </Router>
    )
}
