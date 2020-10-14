import React from "react";
import { connect } from "react-redux";
import HamburgerMenu from "../Component/HamberGerMenu";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import SearchIcon from "../SiteHeader/SearchIcon";
import "./SiteHeader.scss";
import { withRouter } from 'react-router-dom';
import BrowserService from "../BrowserService";
class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            showSearch: false
        }
    }

    componentDidMount = () => {
        this.renderSearchIcon();
    }

    renderSearchIcon = () => {
        const { location } = this.props;
        console.log("location site ", location);
        if (location.pathname.match("/home")) {
            this.setState({ showSearch: true })
        }
        else {
            this.setState({ showSearch: false })
        }
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

    searchValue = (e) => {
        this.props.onSearchValue(e);
    }

    render() {
        console.log("Ffff")
        return (
            <div className={"header-logo"}>
                <div className={"site-header-tabs"}>
                    <div className="hamberger-menu">
                        <HamburgerMenu />
                        {this.state.showSearch?<div className="searchIcon">
                            <SearchIcon onSearch={this.searchValue} />
                        </div>:<div style={{color:"#2f445c"}}>vvvvvvvvvvvvvvvvvvvvvvvv
                            vvvccccccccccccccccccccccccccsdddddc</div>}
                    </div>
                    <div className="desktop-icons">
                        <HeaderIcons onSearch={this.searchValue} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.header;
}

export default connect(mapStateToProps, null)(withRouter(SiteHeader));

