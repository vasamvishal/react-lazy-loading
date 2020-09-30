import React,{Suspense,lazy} from 'react';
import { BrowserRouter as Router, Route,NavLink,HashRouter } from 'react-router-dom';
import './App.css';
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import BuyPage from "./BuyPage/BuyPage";
import AddToCart from "./AddToCart/AddToCart";
import DropDownComponent from "./Component/DropDownComponent";
import MenuBurger from "./SiteHeader/MenuBurger";
import HamburgerMenu from "./Component/HamberGerMenu";
import Exam from "./Component/Exam";
import Read from "./Component/Read";
import Registration from './Registartion/Registration';
import SiteHeader from './SiteHeader/SiteHeader';
import SignUp from './SignUp/SignUp';
import PopupButton from "./Component/PopupButton";
const login=lazy(()=>{"./Login/Login"});
const homePage=lazy(()=>{"./HomePage/HomePage"});
const buyPage=lazy(()=>{"./BuyPage/BuyPage"});
const addToCart=lazy(()=>{"./AddToCart/AddToCart"});

export default function App() {
    return (
        <Router>
            <div>
                <div className="App">
                <Route path={"/home"} exact component={HomePage}/>
                <Route path={"/login"} exact component={Login} /> 
                <Route path={"/buyPrice/:id"} exact component={BuyPage} /> 
                <Route path={"/cart"} exact component={AddToCart}/>
                <Route path={"/signup"} exact component={SignUp}/>
                <Route path={"/popup"} exact component={PopupButton}/>
                </div>
            </div>
        </Router>
    )
}
