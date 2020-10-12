import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from "../SiteHeader/SearchIcon";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import "./HeaderIcon.scss";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
import SignUp from "../SignUp/SignUp";
import PopupButton from "../Component/PopupButton";
import BrowserService from "../BrowserService";

class HeaderIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpPage: false,
            loginPage: true,
            isAuthenticated: false,
        }
        this.signUpPage = this.signUpPage.bind(this);
        this.closeSignUpPage = this.closeSignUpPage.bind(this);
    }

    signUpPage() {
        if (this.state.signUpPage !== true) {
            this.setState({ signUpPage: !this.state.signUpPage })
        }
    }

    accountDetails = () => {
        this.setState({ accountDetails: true })
    }

    closeSignUpPage = () => {
        if (this.state.signUpPage === true) {
            this.setState({ signUpPage: false })
        }
    }

    closeSignUpPageOnAccountPage = () => {
        if (this.state.accountDetails === true) {
            this.setState({ signUpPage: false })
        }
    }

    closeAccountDetails = () => {
        this.setState({ accountDetails: false })
    }

    search = (e) => {
        this.props.onSearch(e);
    }

    static getDerivedStateFromProps(props, state) {
        const value = BrowserService.getLocalStorage();
        if (value.token === undefined || value.token === null) {
            return { isAuthenticated: false };
        }
        else {
            return { isAuthenticated: true };
        }
    }

    render() {
        return (
            <>
                <ul className="headerexample">
                    <li className={"home"}><NavLink to="/home">
                        XBAY</NavLink>
                    </li>

                    <li className={"aboutUs"}>
                        <NavLink to="/account">
                            <ExitToAppIcon />&nbsp;&nbsp;
                        <div>About&nbsp;Us</div>
                        </NavLink>
                    </li>

                    <li className={"cart"}>
                        <NavLink to="/cart">
                            <ShoppingCartIcon />&nbsp;&nbsp;
                        <div>Cart</div>
                        </NavLink>
                    </li>

                    <li className={"account-data"} onClick={this.accountDetails}>
                        <AccountCircleRoundedIcon className={"defeee"} />&nbsp;&nbsp;
                        <div>Account</div>
                        {this.state.accountDetails ? <div><PopupButton onCloseSignUpPage={this.closeSignUpPageOnAccountPage} onCloseAccountPage={this.closeAccountDetails} isAuthenticated={this.state.isAuthenticated} /></div> : ""}
                    </li>

                    {this.state.isAuthenticated === false ?
                        <li className={"signUp"} onClick={this.signUpPage} > <AccountBoxIcon />&nbsp;&nbsp;
                        <div>Sign&nbsp;Up</div>
                            {this.state.signUpPage && this.props.logoutPopinButton.logout === false ? <div><SignUp onCloseSignUpPage={this.closeSignUpPage} /></div> : ""}
                        </li>
                        : ""}

                    <div className="search-Def">
                        <SearchIcon onSearch={this.search} />
                    </div>&nbsp;&nbsp;
            </ul>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         "redirectToCartPage": () => (dispatch(redirectToCartPage())),
//         "redirectToAccountPage": () => (dispatch(redirectToAccountPage())),
//         "redirectToHomePage": () => (dispatch(redirectToHomePage())),
//         "redirectToSignUpPage": () => (dispatch(redirectToSignUpPage()))
//     };
// };
export default connect(mapStateToProps, null)(HeaderIcons);
