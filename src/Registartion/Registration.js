import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SiteHeader from "../SiteHeader/SiteHeader";
import "../SignUp/SignUp.scss";
import { registerPage } from "../Registartion/RegistrationAction";
import { checkForNameValidation, checkForIdValidation, checkForAgeValidation } from "../SignUp/formValidation";
import Login from '../Login/Login';
import './Registration.scss';
import { connect } from "react-redux";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            firstNameError: false,
            lastNameError: false,
            userNameError: false,
            showPassword: false,
            passwordError: false,
            confirmPasswordError: false,
            emailError: false,
            phoneNumberError: false
        }
        console.log("Fff");
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showPassword = this.showPassword.bind(this);
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    };

    showPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleClose = () => {
        console.log("blah");
        // this.setState({ open: !this.state.open })
    }

    checkForPhoneNumberValidation = (e) => {
        const phoneNumber = e.target.value;
        console.log(phoneNumber);
        var phoneno = /^\d{10}$/;
        if (phoneNumber.match(phoneno)) {
            console.log("FFFF")
            this.setState({ phoneNumberError: false })
            this.setState({ phoneNumber: phoneNumber })
        }
        else {
            this.setState({ phoneNumberError: true })
        }
    }

    checkForFirstNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ firstNameError: false })
            this.setState({ firstName: e.target.value })
        }
        else {
            this.setState({ firstNameError: true })
        }
    }

    checkForLastNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ lastNameError: false })
            this.setState({ lastName: e.target.value })
        }
        else {
            this.setState({ lastNameError: true })
        }
    }

    checkForPasswordValidation = (e) => {
        this.setState({ password: e.target.value })
    }

    checkForConfirmPasswordValidation = (e) => {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("ConfirmPassword").value;
        if (password === confirmPassword) {
            alert("blah",e.target.value);
            this.setState({ confirmPasswordError: false })
            this.setState({ confirmpassword: e.target.value })
        }
        else {
            this.setState({ confirmPasswordError: true });
        }
    }

    checkForUserNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ userNameError: false })
            this.setState({ userName: e.target.value })
        }
        else {
            this.setState({ userNameError: true })
        }
    }

    displayNothing() {
        return alert("Hello! User has ID registered create a new User!");
    }

    closeRegistration = () => {
        this.props.onClose();
    }

    checkForEmailValidation = (e) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
            this.setState({ emailError: false })
            this.setState({ email: e.target.value })
        }
        else {
            this.setState({ emailError: true })
        }
    }

    saveRegistration = () => {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const userName = this.state.userName;
        const password = this.state.password;
        const confirmpassword = this.state.confirmpassword;
        const phoneNumber = this.state.phoneNumber;
        const email = this.state.email;
        console.log("confirmPassword",confirmpassword);

        this.props.registerPage({ firstName, lastName, userName, password, confirmpassword, phoneNumber, email });
    }

    checkForDisabledButton() {
        console.log("firstNameError", this.state.firstNameError)
        console.log("lastNameError", this.state.lastNameError)
        console.log("usewrNameError", this.state.userNameError)
        console.log("phoneNameError", this.state.phoneNumberError)
        console.log("emailError", this.state.emailError)
        console.log("emailError", this.state.confirmPasswordError)

        console.log("firstName", this.state.firstName)
        console.log("lastName", this.state.lastName)
        console.log("UserName", this.state.userName)
        console.log("phoneName", this.state.phone)
        console.log("email", this.state.email)
        console.log("passw", this.state.password)
        console.log("conf", this.state.confirmPassword)

        if (this.state.firstNameError === false
            && this.state.lastNameError === false
            && this.state.userNameError === false
            && this.state.phoneNumberError === false
            && this.state.emailError === false
            && this.state.confirmPasswordError === false
            && this.state.firstName !== undefined
            && this.state.lastName !== undefined
            && this.state.userName !== undefined
            && this.state.phoneNumber !== undefined
            && this.state.password !== undefined
            && this.state.confirmpassword !== undefined
            && this.state.email !== undefined
        ) {
            return false;
        }
        else {
            return true;
        }
    }
    render() {
        console.log("open", this.state.open);
        return (
            <>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Create Your Account"}</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                                required
                                error={this.state.firstNameError}
                                id="outlined-error-helper-text"
                                label="FirstName"
                                helperText={this.state.firstNameError ? "Incorrect value" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForFirstNameValidation(e) }} />&nbsp;&nbsp;&nbsp;
                            <TextField required
                                error={this.state.lastNameError}
                                id="outlined-error-helper-text"
                                label="LastName"
                                helperText={this.state.lastNameError ? "Incorrect value" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForLastNameValidation(e) }} />
                            <br />
                            <br />
                            <TextField required
                                error={this.state.userNameError}
                                id="outlined-error-helper-text"
                                label="userName"
                                helperText={this.state.userNameError ? "Incorrect value" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForUserNameValidation(e) }} />
                            <br />
                            <br />
                            <TextField
                                required
                                error={this.state.passwordError}
                                id="password"
                                label="password"
                                helperText={this.state.passwordError ? "Incorrect password" : ""}
                                type={this.state.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={(e) => { this.checkForPasswordValidation(e) }} />&nbsp;&nbsp;&nbsp;

                            <TextField required
                                error={this.state.confirmPasswordError}
                                id="ConfirmPassword"
                                label="confirm"
                                helperText={this.state.confirmPasswordError ? "Incorrect Password" : ""}
                                type={this.state.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={(e) => { this.checkForConfirmPasswordValidation(e) }} />

                            {!this.state.showPassword ? <VisibilityOffIcon fontSize="large" style={{ paddingTop: "0.25em" }} onClick={this.showPassword} /> : <VisibilityIcon onClick={this.showPassword} fontSize="large" />}
                            <br />
                            <br />
                            <TextField required
                                error={this.state.phoneNumberError}
                                id="outlined-error-helper-text"
                                label="Phone Number"
                                helperText={this.state.phoneNumberError ? "Incorrect phone Number" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForPhoneNumberValidation(e) }} />
                            <br />
                            <br />
                            <TextField required
                                error={this.state.emailError}
                                id="outlined-error-helper-text"
                                label="email"
                                helperText={this.state.emailError ? "Incorrect Email Id" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForEmailValidation(e) }} />
                            <br />
                            <br />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose, this.closeRegistration} color="primary">
                            BACK
                        </Button>
                        <Button disabled={this.checkForDisabledButton()}
                            onClick={this.saveRegistration}
                            color="primary" autoFocus>
                            CREATE
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "registerPage": (item) => (dispatch(registerPage(item))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);