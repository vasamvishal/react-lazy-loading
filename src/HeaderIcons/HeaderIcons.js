import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from "../SiteHeader/SearchIcon";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { connect } from "react-redux";
import "./HeaderIcon.scss"
import { redirectToCartPage, redirectToAccountPage, redirectToHomePage, redirectToSignUpPage } from "./HeaderIconsAction"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
class HeaderIcons extends React.Component {
    render() {
        return (
            <>
                <div className={"def"} onClick={this.props.redirectToHomePage}>
                    XBAY
                </div>
                <div className={"def"}>
                    <AccountCircleRoundedIcon className={"defeee"} />&nbsp;&nbsp;
                        <div>Account</div>
                </div>
                <div className={"def"} onClick={this.props.redirectToLogoutPage}>
                    <ExitToAppIcon />&nbsp;&nbsp;
                        <div>Logout</div>
                </div>
                <div className={"def"} onClick={this.props.redirectToCartPage}>
                    <ShoppingCartIcon />&nbsp;&nbsp;
                        <div>Cart</div>
                </div>
                <div className={"def"} onClick={this.props.redirectToSignUpPage}>
                    <AccountBoxIcon />&nbsp;&nbsp;
                        <div>Sign&nbsp;Up</div>
                </div>
                <div className="search-Def">
                    <SearchIcon/>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state.header;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "redirectToCartPage": () => (dispatch(redirectToCartPage())),
        "redirectToLogoutPage": () => (dispatch(redirectToAccountPage())),
        "redirectToHomePage": () => (dispatch(redirectToHomePage())),
        "redirectToSignUpPage": () => (dispatch(redirectToSignUpPage()))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIcons);
