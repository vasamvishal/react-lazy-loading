import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Redirect } from "react-router-dom";
import account from "../src/Account/Account";
import Loader from 'react-loader-spinner';


const Login = lazy(() => import("./Login/Login"));
const HomePage = lazy(() => import("./HomePage/HomePage"));
const BuyPage = lazy(() => import("./BuyPage/BuyPage"));
const AddToCart = lazy(() => import("./AddToCart/AddToCart"));
const notfound = lazy(() => import("./Component/NotFound"));

export default function App() {
    const [count, setCount] = useState(true);
    console.log("count", count);
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<div>
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={700}
                        width={200}
                        timeout={2000} /></div>}>
                    <Switch>
                        <Route exact path="/" render={() => {
                                return (
                                    count ?
                                        <Redirect to="/home" /> :
                                        <Redirect to="/test1" />
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
