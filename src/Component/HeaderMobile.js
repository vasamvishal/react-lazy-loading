import React from "react";
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconComponent from "./IconComponent";
import BrowserService from "../BrowserService";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';


class HeaderMobile extends React.Component {
    constructor(props){
        super(props);
    }

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
                        <IconComponent icon={<LabelImportantIcon fontSize="large"/>} name="About Us" />
                    </NavLink>
                </div>
                <br/>
                <div className={"mobile-cart"}>
                    <NavLink to="/cart">
                        <IconComponent icon={<ShoppingCartIcon fontSize="large" />} name="Cart" />
                    </NavLink>
                </div>
                <br/>
                {this.props.authenticated?<div className={"mobile-logout"} onClick={this.logout}>
                    <IconComponent icon={<ExitToAppIcon fontSize="large"/>} name="Logout" />
                </div>:""}
            </ul>
        )
    }
}
export default HeaderMobile