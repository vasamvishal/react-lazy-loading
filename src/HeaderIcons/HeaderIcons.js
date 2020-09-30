import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from "../SiteHeader/SearchIcon";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route,NavLink,HashRouter, Redirect } from 'react-router-dom';
import "./HeaderIcon.scss";
import { redirectToCartPage, redirectToAccountPage, redirectToHomePage, redirectToSignUpPage } from "./HeaderIconsAction"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ExampleReact from "../Component/ExampleReact";
import SiteHeader from "../SiteHeader/SiteHeader";
import PopupButton from "../Component/PopupButton";

class HeaderIcons extends React.Component {
    constructor(props){
        super(props);
        this.state={
            signUpPage:false,
            accountDetails:false
        }
        this.signUpPage = this.signUpPage.bind(this);
        this.closeSignUpPage = this.closeSignUpPage.bind(this);
    }

    signUpPage(){
        // console.log("def")
        // console.log(this.state.signUpPage);
        if(this.state.signUpPage !==true){
        this.setState({signUpPage:!this.state.signUpPage})
        }
    }
    accountDetails=()=>{
        this.setState({accountDetails:true})
    }

    closeSignUpPage(){
        // console.log("def")
        // console.log(this.state.signUpPage);
        if(this.state.signUpPage===true){
            this.setState({signUpPage:false})
        }
    }

    closeSignUpPageOnAccountPage=()=>{
        // console.log("def")
        // console.log(this.state.accountDetails);
        // console.log(this.state.signUpPage);
        if(this.state.accountDetails===true){
            this.setState({signUpPage:false})
        }
    }

    closeAccountDetails=()=>{
        this.setState({accountDetails:false})
    }

    render() {
        console.log("HeaderIcon",this.state)
        return (
            <ul className="headerexample">
                <li className={"def"}><NavLink to="/home">
                    XBAY</NavLink>
                </li>
                <li className={"def"}>
                    <NavLink to="">
                    <ExitToAppIcon />&nbsp;&nbsp;
                        <div>About&nbsp;Us</div>
                    </NavLink>
                </li>
                <li className={"def"}>
                <NavLink to="/cart">
                    <ShoppingCartIcon />&nbsp;&nbsp;
                        <div>Cart</div>
                    </NavLink>
                </li>

                <li className={"def"}  onClick={this.signUpPage} > <AccountBoxIcon />&nbsp;&nbsp;
                        <div>Sign&nbsp;Up</div>
                        {this.state.signUpPage ?<div><SignUp onCloseSignUpPage={this.closeSignUpPage}/></div>:""}
                </li>

                <li className={"def"} onClick={this.accountDetails}>
                    <AccountCircleRoundedIcon className={"defeee"} />&nbsp;&nbsp;
                        <div>Account</div>
                    {this.state.accountDetails?<div><PopupButton onCloseSignUpPage={this.closeSignUpPageOnAccountPage} onCloseAccountPage={this.closeAccountDetails} /></div>:""}
                </li>

                <div className="search-Def">
                    <SearchIcon/>
                </div>&nbsp;&nbsp;
            </ul>
        )
    }
    //     return (
    //         <>
    //             <div className={"def"} onClick={this.props.redirectToHomePage}>
    //                 XBAY
    //             </div>
    //             <div className={"def"}>
    //                 <AccountCircleRoundedIcon className={"defeee"} />&nbsp;&nbsp;
    //                     <div>Account</div>
    //             </div>
    //             <div className={"def"} onClick={this.props.redirectToLogoutPage}>
    //                 <ExitToAppIcon />&nbsp;&nbsp;
    //                     <div>About&nbsp;Us</div>
    //             </div>
    //             <div className={"def"} onClick={this.props.redirectToCartPage}>
    //                 <ShoppingCartIcon />&nbsp;&nbsp;
    //                     <div>Cart</div>
    //             </div>
    //             <div className={"def"}  onClick={this.props.redirectToSignUpPage} >
    //                 <AccountBoxIcon />&nbsp;&nbsp;
    //                     <div>Sign&nbsp;Up</div>
    //             </div>
    //             <div className="search-Def">
    //                 <SearchIcon/>
    //             </div>
    //         </>
    //     )
    // }
}
const mapStateToProps = (state) => {
    return state.header;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "redirectToCartPage": () => (dispatch(redirectToCartPage())),
        "redirectToAccountPage": () => (dispatch(redirectToAccountPage())),
        "redirectToHomePage": () => (dispatch(redirectToHomePage())),
        "redirectToSignUpPage": () => (dispatch(redirectToSignUpPage()))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIcons);
