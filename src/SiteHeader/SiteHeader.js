import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import HamburgerMenu from "../Component/HamberGerMenu";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import SearchIcon from "../SiteHeader/SearchIcon";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircle';
import "./SiteHeader.scss";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
 
    searchValue=(e)=>{
        this.props.onSearchValue(e);
    }
    render() {
        return (
            <div className={"header-logo"}>
                <div className={"site-header-tabs"}>
                    <div className="hamberger-menu">
                        <HamburgerMenu />
                        <div className="searchIcon">
                            <SearchIcon onSearch={this.searchValue} />
                        </div>
                    </div>
                    <div className="desktop-icons">
                        <HeaderIcons onSearch={this.searchValue}/>
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

