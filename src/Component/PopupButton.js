import React from 'react'
import "./PopupButton.scss";
import SignUp from '../SignUp/SignUp';
import { connect } from 'react-redux';
import { logout } from "./PopupButtonAction";
import BrowserService from "../BrowserService"
import { NavLink, Redirect } from 'react-router-dom';
import ShowDetails from './ShowDetails';

class PopupExamplePinned extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isAuthenticated: false
        }
        this.renderSignUpPage = this.renderSignUpPage.bind(this);
        this.closeSignUpPage = this.closeSignUpPage.bind(this);
    }
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClickOutside = () => {
        if (this.state.show === false) {
            this.setState({ show: false }, () => {
                this.props.onCloseAccountPage();
            })
        }
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClickOutside();
    }

    renderSignUpPage = () => {
        console.log("blah", this.state.show);
        if (this.state.show !== true) {
            this.setState({ show: true })
        }
    }

    closeSignUpPage() {
        if (this.state.show === true) {
            this.setState({ show: false })
        }
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <>
                <div ref={node => this.node = node}>
                    <div className="account-popup">
                        <div>Your Account</div>
                        {this.props.isAuthenticated === false ? <><br /><button onClick={this.renderSignUpPage} className="button-login">Log&nbsp;In/Sign&nbsp;Up</button></> : ""}
                        {this.state.show ? <SignUp onCloseSignUpPage={this.closeSignUpPage} /> : " "}
                        {this.props.isAuthenticated === true ?
                            <div>
                                <hr />
                                <ShowDetails/>
                                <hr />
                                <ul className="header-links">
                                    <NavLink to="/account" className="li-def">&nbsp;&nbsp;&nbsp;&nbsp;<div className="my-orders">&nbsp;&nbsp;&nbsp;&nbsp;My Orders</div></NavLink>
                                    <hr />
                                    <div onClick={this.logout} className="li-def"><div className="my-orders my-orders-logout">&nbsp;&nbsp;&nbsp;&nbsp;Logout</div></div>
                                </ul>
                            </div> : ""}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "logout": () => (dispatch(logout())),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PopupExamplePinned)