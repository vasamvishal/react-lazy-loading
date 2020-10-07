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
import { checkForNameValidation, checkForIdValidation,checkForAgeValidation } from "../SignUp/formValidation";
import Login from '../Login/Login';
import { red } from '@material-ui/core/colors';
import './Registration.scss';
var password=[];
var confirmPassword=[];

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            // numberError: false,
            // ageError: false,
            firstNameError:false,
            lastNameError: false,
            userNameError:false,
            // colourNameError: false,
            showPassword: false,
            passwordError:false,
            confirmPasswordError:false,
            phoneNumber:false
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
        // console.log(this.state.open);
        this.setState({ open: !this.state.open })
    }

    checkForPhoneNumberValidation = (e) => {
        if (checkForIdValidation(e)) {
            this.setState({ phoneNumber: true })
        }
        else {
            this.setState({ phoneNumber: false })
            this.setState({ Id: e.target.value })
        }
    }

    checkForFirstNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ firstNameError: false })
            this.setState({ nameValue: e.target.value })
        }
        else {
            this.setState({ firstNameError: true })
        }
    }

    checkForLastNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ lastNameError: false })
            this.setState({ nameValue: e.target.value })
        }
        else {
            this.setState({ lastNameError: true })
        }
    }

    checkForPasswordValidation = (e) => {
        //  if (checkForAgeValidation(e)) {
        //     this.setState({ ageError: true })
        // }
        // else {
            // this.setState({ passwordError: false })
            password.push(e.target.value);

            // this.setState({ passwordError: e.target.value })
        // }
    }

    checkForConfirmPasswordValidation = (e) => {
        // if (checkForAgeValidation(e)) {
        //     this.setState({ ageError: true })
        // }
        // else {
            // this.setState({ ageError: false })
            confirmPassword.push(e.target.value);
            console.log(password);
            console.log(confirmPassword);

            if(password.length!==confirmPassword.length){
                console.log(password.length)
                console.log(confirmPassword.length)
                this.setState({ confirmPasswordError:false})
            }

            //
        // }
    }

    checkForUserNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ userNameError: false })
            this.setState({ colourName: e.target.value })
        }
        else {
            this.setState({ userNameError: true })
        }
    }
    displayNothing() {
        return alert("Hello! User has ID registered create a new User!");
    }

    closeRegistration=()=>{
        this.props.onClose();
    }

    checkForDisabledButton() {
        if (this.state.numberError === false && this.state.colourNameError === false
            && this.state.ageError === false && this.state.nameError === false
            && this.state.Id !== undefined && this.state.nameValue !== undefined &&
            this.state.ageValue !== undefined && this.state.colourName !== undefined
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
                                helperText={this.state.firstNameError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForFirstNameValidation(e) }} />&nbsp;&nbsp;&nbsp;
                            {/* <div className="mobile-break"></div> */}
                            <TextField required
                                error={this.state.lastNameError}
                                id="outlined-error-helper-text"
                                label="LastName"
                                helperText={this.state.lastNameError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForLastNameValidation(e) }} />
                            <br />
                            <br />
                            <TextField required
                                error={this.state.userNameError}
                                id="outlined-error-helper-text"
                                label="userName"
                                // style={{marginRight:"91vh"}}
                                helperText={this.state.userNameError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForUserNameValidation(e) }} />
                            <br />
                            <br />
                            <TextField
                                required
                                error={this.state.passwordError}
                                id="outlined-error-helper-text"
                                label="password"
                                helperText={this.state.passwordError ? "Incorrect entry" : ""}
                                type={this.state.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={(e) => { this.checkForPasswordValidation(e) }} />&nbsp;&nbsp;&nbsp;

                             {/* <div className="mobile-break"></div> */}

                            <TextField required
                                error={this.state.confirmPasswordError}
                                id="outlined-error-helper-text"
                                label="confirm"
                                helperText={this.state.confirmPasswordError ? "Incorrect entry" : ""}
                                type={this.state.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={(e) => { this.checkForConfirmPasswordValidation(e) }} />

                            {!this.state.showPassword ? <VisibilityOffIcon fontSize="large" style={{paddingTop:"0.25em"}} onClick={this.showPassword} /> : <VisibilityIcon onClick={this.showPassword} fontSize="large" />}
                            <br />
                            <br />
                            <TextField required
                                error={this.state.phoneNumber}
                                id="outlined-error-helper-text"
                                label="Phone Number"
                                helperText={this.state.phoneNumber ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForPhoneNumberValidation(e) }} />
                            <br />
                            <br />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose,this.closeRegistration} color="primary">
                            BACK
                        </Button>
                        <Button disabled={this.checkForDisabledButton()}
                            color="primary" autoFocus>
                            CREATE
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}