import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './Login.scss';
import Button from "@material-ui/core/Button";
import Registration from '../Registartion/Registration';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            show:false
        }
        console.log("Login",props);
        this.back = this.back.bind(this);
    }
    
    back=()=>{
        console.log("blah1");
        this.props.onClose()
    }

    renderRegisterPage = () => {
        this.setState({show:!this.state.show})
    }

    closeRegistration=()=>{
        this.setState({show:!this.state.show})
    }
    // renderMainPage = () => {
    //     this.props.history.push("/home");
    // }

    render() {
        console.log("render");
        console.log("login",this.state.show)
        if(this.state.show){
          return <Registration onClose={this.closeRegistration}/>
        }
        return (
            <React.Fragment>
                <div className={"flex"}>
                    <div className={"left-article"}>
                        <h2 style={{color: "white", marginTop: "69%", marginLeft: "2em"}}>XBAY&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        <div className={"button-css"}>
                            {/* <Button variant="contained" color="primary"
                                    onClick={this.renderRegisterPage}>REGISTER</Button> */}
                        </div>
                    </div>
                    <div className={"right-article"}>
                        <MuiThemeProvider>
                            <h3 className={"company-name"}><CloseOutlinedIcon onClick={this.back}/></h3>
                            <div className={"login-button"}>
                                <div className={"logo"}>Log&nbsp;In</div>
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
                                <button className={"button-text"} onClick={this.renderMainPage}>
                                    Log&nbsp;In
                                </button>
                                <br/>
                                <br/>
                                <div className="forgot-password">Forgot&nbsp;password?</div>
                                <br/>
                                <br/>
                                <div className="account" onClick={this.renderRegisterPage}>Create your Account</div>
                                <br/>
                                <br/>
                            </div>
                        </MuiThemeProvider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;

