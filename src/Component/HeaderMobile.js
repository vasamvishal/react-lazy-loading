import React from "react";
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconComponent from "./IconComponent";
import BrowserService from "../BrowserService";

class HeaderMobile extends React.Component {
    logout = () => {
        BrowserService.deleteLocalStorageItem("token");
        BrowserService.deleteLocalStorageItem("selectedBook");
        BrowserService.changeLocation("/home")
    }

    render() {
        return (
            <ul className="mobile-hamberger-menu">
                <div className={"mobile-aboutUs"}>
                    <NavLink to="/account">
                        <IconComponent icon={<ExitToAppIcon />} name="About Us" />
                    </NavLink>
                </div>
                <br/>
                {/* <hr style="height:3em"/> */}
                <div className={"mobile-cart"}>
                    <NavLink to="/cart">
                        <IconComponent icon={<ShoppingCartIcon />} name="Cart" />
                    </NavLink>
                </div>
                <br/>
                {/* <br /> */}
                <div className={"mobile-logout"} onClick={this.logout}>
                    <IconComponent icon={<ExitToAppIcon />} name="Logout" />
                </div>
            </ul>
        )
    }
}
export default HeaderMobile