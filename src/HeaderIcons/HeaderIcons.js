import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from "../SiteHeader/SearchIcon";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { connect } from "react-redux";
import { NavLink, withRouter } from 'react-router-dom';
import "./HeaderIcon.scss";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
import SignUp from "../SignUp/SignUp";
import PopupButton from "../Component/PopupButton";
import BrowserService from "../BrowserService";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { logout } from "./HeaderIconsAction";


class HeaderIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpPage: false,
            loginPage: true,
            isAuthenticated: false,
            showSearch: false,
            css:true
        }
        this.signUpPage = this.signUpPage.bind(this);
        this.closeSignUpPage = this.closeSignUpPage.bind(this);
    }

    componentDidMount = () => {
        this.renderSearchIcon();
    }

    signUpPage = () => {
        if (this.state.signUpPage !== true) {
            this.setState({ signUpPage: !this.state.signUpPage })
        }
    }

    renderSearchIcon = () => {
        const { location } = this.props;
        if (location.pathname.match("/home")) {
            this.setState({ showSearch: true })
        }
        else {
            this.setState({ showSearch: false })
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

    showHeaderCss=()=>{
        this.setState({css:!this.state.css})
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
                    <li id="home" className={"home"}>
                        <NavLink to="/home">
                            XBAY
                        </NavLink>
                    </li>

                    <li id="aboutUs" className={"aboutUs"} >
                        <NavLink to="/account">
                            <LabelImportantIcon />&nbsp;&nbsp;
                        <div>About&nbsp;Us</div>
                        </NavLink>
                    </li>

                    <li id="cart-desktop" className={"cart-desktop"}>
                        <NavLink to="/cart">
                            <ShoppingCartIcon />&nbsp;&nbsp;
                        <div>Cart</div>
                        </NavLink>
                    </li>

                    <li id="account-data" className={"account-data"} onClick={this.accountDetails}>
                        <AccountCircleRoundedIcon className={"defeee"} />&nbsp;&nbsp;
                        <div>Account</div>
                        {this.state.accountDetails ? <div><PopupButton onCloseSignUpPage={this.closeSignUpPageOnAccountPage} onCloseAccountPage={this.closeAccountDetails} isAuthenticated={this.state.isAuthenticated} /></div> : ""}
                    </li>

                    {this.state.isAuthenticated === false ?
                        <li id="signUp" className={"signUp"} onClick={this.signUpPage}> <AccountBoxIcon />&nbsp;&nbsp;
                        <div>Sign&nbsp;Up</div>
                            {this.state.signUpPage && this.props.logoutPopinButton.logout === false ? <div><SignUp onCloseSignUpPage={this.closeSignUpPage} /></div> : ""}
                        </li>
                        : <li id="logout" className={"logout"} onClick={this.props.logout}> <ExitToAppIcon />&nbsp;&nbsp;
                        <div>Logout</div>
                        </li>}

                    {this.state.showSearch ?
                        <div className="search-Def">
                            <SearchIcon onSearch={this.search} />
                        </div> : ""}
                </ul>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        "logout": () => (dispatch(logout()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderIcons));
