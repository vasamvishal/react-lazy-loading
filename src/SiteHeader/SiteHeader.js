import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import HamburgerMenu from "../Component/HamberGerMenu";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
// import SignUp from "../SignUp/SignUp";
import SearchIcon from "../SiteHeader/SearchIcon";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
import "./SiteHeader.scss";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import { redirectToSignUpPage } from "./SiteHeaderAction"
// import PopupButton from "../Component/PopupButton";

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        console.log("prpops");
    }
 
    render() {
        // console.log("header",this.props);
        // console.log("prpopseeeeee",this.props.signUpPage);
        // console.log("SiteHeader");
        
        return (
            <div className={"header-logo"}>
                <div className={"site-header-tabs"}>
                    <div className="hamberger-menu">
                        <HamburgerMenu />
                        <div className={"def"}>XBAY</div>
                        {/* <div style={{alignSelf:"center"}}><AccountBoxIcon style={{color:"white"}} fontSize="large"/><span style={{color:"white"}}>Sign&nbsp;Up</span></div>&nbsp;
                        <div style={{alignSelf:"center"}}><AccountCircleRoundedIcon style={{color: "white",display:"flex"}} fontSize="large" /><span style={{color:"white"}}>Account</span></div> */}
                        <div className="searchIcon">
                            <SearchIcon onSearch={this.props.onSearch} />
                        </div>
                    </div>
                    <div className="desktop-icons">
                        <HeaderIcons/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.header;
}

export default connect(mapStateToProps, null)(SiteHeader);

