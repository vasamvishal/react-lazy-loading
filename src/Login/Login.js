import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './Login.scss';
import { connect } from "react-redux";
import Registration from '../Registartion/Registration';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {login} from "./LoginAction";
import { ThemeProvider } from '@material-ui/core';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            show:false,
            userName:"",
            password:"",
            error:this.props.status===undefined ? 200:this.props.status
        }
        console.log("Login",props);
        console.log("DFDFDF",this.props.login);
        this.back = this.back.bind(this);
    }
    
    back=()=>{
        console.log("blah1");
        this.setState({error:200},()=>{
        this.props.onClose()
        });
    }

    renderRegisterPage = () => {
        this.setState({show:!this.state.show})
    }
     
    userName=(e)=>{
        this.setState({userName:e.target.value})
    }

    onKeyDown=(e)=>{
        if (e.key === "Delete" || e.key === "Backspace") {
            this.setState({password:e.target.value},()=>{
                this.setState({error:200})
            })
        }
        else{
            this.setState({password:e.target.value})
        }
    }

    closeRegistration=()=>{
        this.setState({show:!this.state.show})
    }

    renderMainPage = () => {
        let userName=this.state.userName;
        let password=this.state.password;
        let item={userName,password}
        this.props.login(item).then(()=>{
            console.log("status",this.props.status)
            this.setState({error:this.props.status===undefined ? 400:this.props.status},()=>{
                if(this.state.error === 200){
                this.props.onClose();
                }
            })
        });
    }

    render() {
        console.log("DFDFDF",this.state.error);
        console.log("blahhh",this.props.loginData)
        console.log("errorValue",this.state.error);
        if(this.state.show){
          return <Registration onClose={this.closeRegistration}/>
        }
        return (
            <React.Fragment>
                <div className={"flex"}>
                    <div className={"left-article"}>
                        <h2 style={{color: "white", marginTop: "69%", marginLeft: "2em"}}>XBAY&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        {/* <div className={"button-css"}>
                            {/* <Button variant="contained" color="primary"
                                    onClick={this.renderRegisterPage}>REGISTER</Button> */}
                        {/* </div>  */}
                    </div>
                    <div className={"right-article"}>
                        <MuiThemeProvider>
                            <h3 className={"company-name"}><CloseOutlinedIcon onClick={this.back}/></h3>
                            <div className={"login-button"}>
                                <div className={"logo"}>Log&nbsp;In</div>
                                <TextField
                                    hintText="Enter your Username"
                                    floatingLabelText="Username"
                                    id="outlined-basic" label="Outlined" variant="outlined" 
                                    onChange={this.userName}/>
                                <br/>
                                <TextField
                                    hintText="Enter your Password"
                                    floatingLabelText="Password"
                                    id="outlined-basic" label="Outlined"
                                     variant="outlined" 
                                     onChange={this.password}
                                     onKeyDown={this.onKeyDown}/>
                                <br></br>
                                <br></br>
                                { this.state.error !== 200 ?<p>Your login credentials could not be verified, please try again.</p>:""}
                                <button disabled={this.state.userName ==="" && this.state.password === ""} className={"button-text"} onClick={this.renderMainPage}>
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
const mapStateToProps=(state)=>{
 return state.loginForm;
}

const mapDispatchToProps = (dispatch) => {
    return{
    "login":(item)=>(dispatch(login(item)))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

