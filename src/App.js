import React,{Suspense,lazy} from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
// import SignUp from './SignUp/SignUp';
// import PopupButton from "./Component/PopupButton";
const Login=lazy(()=>import("./Login/Login"));
const HomePage=lazy(()=>import("./HomePage/HomePage"));
const BuyPage=lazy(()=>import("./BuyPage/BuyPage"));
const AddToCart=lazy(()=>import("./AddToCart/AddToCart"));

export default function App() {
    return (
        <Router>
               <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                <div className="App">
                <Route path={"/home"} exact component={HomePage}/>
                <Route path={"/login"} exact component={Login} /> 
                <Route path={"/buyPrice/:id"} exact component={BuyPage} /> 
                <Route path={"/cart"} exact component={AddToCart}/>
                </div>
                </Switch>
                </Suspense>
        </Router>
    )
}
