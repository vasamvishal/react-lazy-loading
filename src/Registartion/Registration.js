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
import { checkForAgeValidation, checkForColourNameValidation, checkForIdValidation, checkForNameValidation } from "../SignUp/formValidation";
import Login from '../Login/Login';
import { red } from '@material-ui/core/colors';
import './Registration.scss';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            numberError: false,
            ageError: false,
            nameError: false,
            colourNameError: false,
            showPassword: false
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

    checkForIdValidation = (e) => {
        if (checkForIdValidation(e)) {
            this.setState({ numberError: true })
        }
        else {
            this.setState({ numberError: false })
            this.setState({ Id: e.target.value })
        }
    }

    checkForNameValidation = (e) => {
        if (checkForNameValidation(e) === false) {
            this.setState({ nameError: false })
            this.setState({ nameValue: e.target.value })
        }
        else {
            this.setState({ nameError: true })
        }
    }

    checkForAgeValidation = (e) => {
        if (checkForAgeValidation(e)) {
            this.setState({ ageError: true })
        }
        else {
            this.setState({ ageError: false })
            this.setState({ ageValue: e.target.value })
        }
    }

    checkForColourNameValidation = (e) => {
        if (checkForColourNameValidation(e) === false) {
            this.setState({ colourNameError: false })
            this.setState({ colourName: e.target.value })
        }
        else {
            this.setState({ colourNameError: true })
        }
    }
    displayNothing() {
        return alert("Hello! User has ID registered create a new User!");
    }

    css() {
        return "css-for-eye"
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
                                error={this.state.numberError}
                                id="outlined-error-helper-text"
                                label="id"
                                helperText={this.state.numberError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForIdValidation(e) }} />&nbsp;&nbsp;&nbsp;
                            {/* <div className="mobile-break"></div> */}
                            <TextField required
                                error={this.state.nameError}
                                id="outlined-error-helper-text"
                                label="name"
                                helperText={this.state.nameError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForNameValidation(e) }} />
                            <br />
                            <br />
                            <TextField required
                                error={this.state.ageError}
                                id="outlined-error-helper-text"
                                label="userName"
                                // style={{marginRight:"91vh"}}
                                helperText={this.state.ageError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForAgeValidation(e) }} />
                            <br />
                            <br />
                            <TextField
                                required
                                error={this.state.numberError}
                                id="outlined-error-helper-text"
                                label="password"
                                helperText={this.state.numberError ? "Incorrect entry" : ""}
                                type={this.state.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={(e) => { this.checkForIdValidation(e) }} />&nbsp;&nbsp;&nbsp;

                             {/* <div className="mobile-break"></div> */}

                            <TextField required
                                error={this.state.nameError}
                                id="outlined-error-helper-text"
                                label="confirm"
                                helperText={this.state.nameError ? "Incorrect entry" : ""}
                                type={this.state.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={(e) => { this.checkForNameValidation(e) }} />

                            {!this.state.showPassword ? <VisibilityOffIcon fontSize="large" onClick={this.showPassword} /> : <VisibilityIcon onClick={this.showPassword} fontSize="large" />}
                            <br />
                            <br />
                            <TextField required
                                error={this.state.colourNameError}
                                id="outlined-error-helper-text"
                                label="Phone Number"
                                helperText={this.state.colourNameError ? "Incorrect entry" : ""}
                                variant="outlined"
                                onChange={(e) => { this.checkForColourNameValidation(e) }} />
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