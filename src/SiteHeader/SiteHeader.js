import React from "react";
import "./SiteHeader.scss";
import SearchIcon from "../SiteHeader/SearchIcon";
import HamburgerMenu from "../Component/HamberGerMenu";
import HeaderIcons from "../HeaderIcons/HeaderIcons";

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <div className={"header-logo"}>
                <div className={"site-header-tabs"}>
                    <div className="hamberger-menu">
                        <HamburgerMenu />
                        <div className={"def"}>XBAY</div>
                        <div className="searchIcon">
                            <SearchIcon onSearch={this.props.onSearch} />
                        </div>
                    </div>
                    <div className="desktop-icons">
                        <HeaderIcons />
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteHeader

