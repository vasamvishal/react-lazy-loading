import React from "react";
import "./HamberGerMenu.scss";
import MenuIcon from '@material-ui/icons/Menu';
import HeaderIcons from "../HeaderIcons/HeaderIcons";


class HamburgerMenuExport extends React.Component {
    constructor() {
        super()
        this.state = {
            open: true
        }
        this.handleClick = this.handleClick.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    handleClick() {
        document.getElementById("myNav").style.width = "100%";
    }
    render() {
        return (
            <div>
                <div id="myNav" class="overlay">
                    <a class="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <div class="overlay-content">
                    <HeaderIcons/>
                    </div>
                </div>
                <MenuIcon onClick={() => this.handleClick()} style={{ fontSize: 40,color:'white',paddingTop:'9px',paddingLeft:'27px'}}>openClose</MenuIcon>
            </div>
        )
    }
}
export default HamburgerMenuExport