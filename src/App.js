import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Redirect } from "react-router-dom";
import account from "../src/Account/Account";
import SiteHeader from "../src/SiteHeader/SiteHeader"
const Login = lazy(() => import("./Login/Login"));
const HomePage = lazy(() => import("./HomePage/HomePage"));
const BuyPage = lazy(() => import("./BuyPage/BuyPage"));
const AddToCart = lazy(() => import("./AddToCart/AddToCart"));
const notfound = lazy(() => import("./Component/NotFound"));

export default function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<div><SiteHeader />Loading</div>}>
                    <Switch>
                        <Route exact path="/" render={() => {
                            return (
                                <Redirect to="/home" />
                            )
                        }}
                        />
                        <Route path={"/home"} exact component={HomePage} />
                        <Route path={"/login"} exact component={Login} />
                        <Route path={"/buyPrice/:id"} exact component={BuyPage} />
                        <Route path={"/cart"} exact component={AddToCart} />
                        <Route path={"/account"} exact component={account} />
                        <Route component={notfound} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
