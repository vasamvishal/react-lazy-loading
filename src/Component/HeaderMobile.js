import React from "react";
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {MemoizedIcon} from "./IconComponent";
import BrowserService from "../BrowserService";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import "./HeaderMobile.scss";

class HeaderMobile extends React.PureComponent {

    logout = () => {
        BrowserService.deleteLocalStorageItem("token");
        BrowserService.deleteLocalStorageItem("user");
        BrowserService.deleteLocalStorageItem("selectedBook");
        BrowserService.changeLocation("/home")
    }

    render() {
        return (
            <ul className="mobile-hamberger-menu">
                <div className={"mobile-aboutUs"}>
                    <NavLink to="/account">
                        <MemoizedIcon icon={<LabelImportantIcon fontSize="large"/>} name="About Us" />
                    </NavLink>
                </div>
                <hr className="Class"/>
                <div className={"mobile-cart"}>
                    <NavLink to="/cart">
                        <MemoizedIcon icon={<ShoppingCartIcon fontSize="large" />} name="Cart" />
                    </NavLink>
                </div>
                <hr className="Class"/>
                {this.props.authenticated?<><div className={"mobile-logout"} onClick={this.logout}>
                    <MemoizedIcon icon={<ExitToAppIcon fontSize="large"/>} name="Logout" />
                </div>
                <hr className="Class"/></>:""}
            </ul>
        )
    }
}
export default HeaderMobile