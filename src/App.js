import React,{Suspense,lazy,useState} from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import { Redirect } from "react-router-dom";
// import SignUp from './SignUp/SignUp';
import account from "../src/Account/Account"
// import PopupButton from "./Component/PopupButton";
const Login=lazy(()=>import("./Login/Login"));
const HomePage=lazy(()=>import("./HomePage/HomePage"));
const BuyPage=lazy(()=>import("./BuyPage/BuyPage"));
const AddToCart=lazy(()=>import("./AddToCart/AddToCart"));

export default function App() {
    const [count, setCount] = useState(true);
    console.log("count",count);
    return (
        <Router>
               <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                <div className="App">
                {/* {count?
                 <Redirect to="/home" /> :""} */}
                <Route path={"/home"} exact component={HomePage}/>
                <Route path={"/login"} exact component={Login} /> 
                <Route path={"/buyPrice/:id"} exact component={BuyPage} /> 
                <Route path={"/cart"} exact component={AddToCart}/>
                <Route path={"/account"} exact component={account}/>
                </div>
                </Switch>
                </Suspense>
        </Router>
    )
}
