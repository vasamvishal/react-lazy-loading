import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './Login.scss';
import Button from "@material-ui/core/Button";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRegisterPage = () => {
        console.log("ddddd");
    }

    renderMainPage = () => {
        console.log("dddddeeee");
    }

    render() {
        return (
            <React.Fragment>
                <div className={"flex"}>
                    <div className={"left-article"}>
                        <h2 style={{color: "white", marginTop: "69%", marginLeft: "2em"}}>Click Here to Register</h2>
                        <div className={"button-css"}>
                            <Button variant="contained" color="primary"
                                    onClick={this.renderRegisterPage}>REGISTER</Button>
                        </div>
                    </div>

                    <div className={"right-article"}>
                        <MuiThemeProvider>
                            <h1 className={"company-name"}>XBAY</h1>
                            <div className={"login-button"}>
                                <div className={"logo"}><h2>Welcome Back</h2></div>
                                <TextField
                                    hintText="Enter your Username"
                                    floatingLabelText="Username"
                                    id="outlined-basic" label="Outlined" variant="outlined"/>
                                <br/>
                                <TextField
                                    hintText="Enter your Password"
                                    floatingLabelText="Password"
                                    id="outlined-basic" label="Outlined" variant="outlined"/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className={"checkbox-css"}>
                                    <input type={"checkbox"}/>
                                    <div>Stay Signed In</div>
                                </div>
                                <button className={"button-text"} onClick={this.renderMainPage}>
                                    SIGN IN
                                </button>
                            </div>
                        </MuiThemeProvider>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Login;

