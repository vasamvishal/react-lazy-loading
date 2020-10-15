import React from "react";
import "./HamberGerMenu.scss";
import MenuIcon from '@material-ui/icons/Menu';
import HeaderMobile from "../Component/HeaderMobile";
import BrowserService from "../BrowserService";
import ShowDetails from "../Component/ShowDetails";


class HamburgerMenuExport extends React.Component {
    constructor() {
        super()
        this.state = {
            open: true,
            isAuthenticated:false
        }
        this.handleClick = this.handleClick.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

    getToken=()=>{
        console.log("State");
        const value = BrowserService.getLocalStorage();
        if (value.token === undefined || value.token === null) {
            this.setState({isAuthenticated: false});
        }
        else {
            this.setState({isAuthenticated: true});
        }
    }


    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    handleClick() {
         this.getToken();
        document.getElementById("myNav").style.width = "100%";
    }
    render() {
        return (
             <>
                <div id="myNav" class="overlay">
                    <div>{!this.state.isAuthenticated?<div className="login-signup">LOGIN/SIGNUP</div>:<div className="login-signup"><ShowDetails/></div>}</div>
                    <a class="closebtn" onClick={()=>this.closeNav()}>&times;</a>
                    <div class="overlay-content">
                    <HeaderMobile Authenticated={this.state.isAuthenticated}/>
                    </div>
                </div>
                <MenuIcon onClick={() => this.handleClick()} style={{ fontSize: 40,color:'white',marginTop:'1.25vh',
                    paddingLeft: '7px'}}>openClose</MenuIcon>
            </>
        )
    }
}
export default HamburgerMenuExport